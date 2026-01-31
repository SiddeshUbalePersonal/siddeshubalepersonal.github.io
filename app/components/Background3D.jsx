import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from '../context/ThemeContext'

// Vertex Shader: Handles the grid shape and wave animation
const vertexShader = `
uniform float uTime;
uniform float uScroll;
uniform vec2 uMouse;
varying vec3 vPos;
varying float vDistance;

void main() {
    vec3 pos = position;
    
    // INFINITE SCROLL LOGIC
    float zOffset = uScroll * 10.0;
    pos.z += zOffset;

    vPos = pos;
    
    // Wave Effect
    float wave1 = sin(pos.x * 0.5 + uTime * 0.2) * 0.3;
    float wave2 = cos(pos.z * 0.3 + uTime * 0.1) * 0.3;
    pos.y += wave1 + wave2;
    
    // Mouse Interaction
    vec3 localPos = position; 
    localPos.y += wave1 + wave2;
    
    float mouseDist = distance(localPos.xz, uMouse * 25.0);
    float mouseLift = smoothstep(12.0, 0.0, mouseDist);
    pos.y += mouseLift * 1.5;

    // Distance Calculation for Fog
    vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * worldPosition;
    vDistance = -viewPosition.z;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`

// Fragment Shader: Handles the grid lines and colors
const fragmentShader = `
uniform float uTime;
uniform float uIsDark; // 1.0 = Dark Mode, 0.0 = Light Mode
varying vec3 vPos;
varying float vDistance;

void main() {
    // Grid Logic
    float gridSize = 2.0;
    vec2 coord = vPos.xz;
    vec2 grid = abs(fract(coord / gridSize - 0.5) - 0.5) / fwidth(coord / gridSize);
    float line = min(grid.x, grid.y);
    float strength = 1.0 - min(line, 1.0);
    
    // Palette
    // Dark Mode: Indigo/Blue
    vec3 darkColor = vec3(0.3, 0.3, 0.9);
    // Light Mode: Subtle Grey/Black sketch
    vec3 lightColor = vec3(0.1, 0.1, 0.1);
    
    vec3 colorGrid = mix(lightColor, darkColor, uIsDark);
    
    // Pulse effect
    float pulse = 1.0 + sin(uTime * 2.0) * 0.2;
    colorGrid *= pulse;

    // Visibility
    // In light mode, make it very subtle (low alpha)
    float activeAlpha = mix(0.1, 0.6, uIsDark);

    // Distance Fog
    float fogStart = 0.0;
    float fogEnd = 40.0;
    float fogFactor = smoothstep(fogEnd, fogStart, vDistance);
    
    vec3 finalColor = colorGrid * strength * fogFactor; 
    
    gl_FragColor = vec4(finalColor, strength * fogFactor * activeAlpha);
}
`

function InteractiveGrid() {
    const mesh = useRef()
    const { theme } = useTheme()

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uScroll: { value: 0 },
            uMouse: { value: new THREE.Vector2(0, 0) },
            uIsDark: { value: 1.0 } // Default to dark
        }),
        []
    )

    // Scroll handling
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const scrollNorm = scrollY / (maxScroll || 1);
            mesh.current.userData.targetScroll = scrollNorm;
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    useFrame((state) => {
        const { clock, mouse } = state;
        const time = clock.getElapsedTime();

        // Update Time
        mesh.current.material.uniforms.uTime.value = time;

        // Update Mouse
        mesh.current.material.uniforms.uMouse.value.lerp(mouse, 0.1);

        // Update Scroll
        const target = mesh.current.userData.targetScroll || 0;
        const current = mesh.current.material.uniforms.uScroll.value;
        mesh.current.material.uniforms.uScroll.value = THREE.MathUtils.lerp(current, target, 0.05);

        // Update Theme Uniform (Lerp for smooth transition)
        const targetDark = theme === 'dark' ? 1.0 : 0.0;
        const currentDark = mesh.current.material.uniforms.uIsDark.value;
        // Faster transition (0.1) for responsiveness
        mesh.current.material.uniforms.uIsDark.value = THREE.MathUtils.lerp(currentDark, targetDark, 0.1);
    });

    return (
        <mesh ref={mesh} rotation={[-Math.PI / 2, -0.2, 0]} position={[0, -5, -10]}>
            <planeGeometry args={[100, 100, 128, 128]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                side={THREE.DoubleSide}
            />
        </mesh>
    )
}

export default function Background3D() {
    return (
        <div className="fixed inset-0 z-0 bg-bg transition-colors duration-[1500ms]">
            <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
                <InteractiveGrid />
            </Canvas>
        </div>
    )
}
