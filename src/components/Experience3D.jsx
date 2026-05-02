import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { ScrollControls, useScroll, Text, Float, Stars, Sparkles } from '@react-three/drei';

const SceneLayout = () => {
    const scroll = useScroll();

    useFrame((state) => {
        // Physical mapping of native trackpad scroll 0-1 metrics to absolute Z-axis flight depth
        const scrollOffset = scroll.offset; 
        
        // Base focal length is Z=10. Final node is Z=-200.
        state.camera.position.z = 10 - (scrollOffset * 220);
        
        // Subtle rotational sway relative to flight depth
        state.camera.rotation.y = Math.sin(scrollOffset * Math.PI) * 0.1;
        state.camera.rotation.z = Math.sin(scrollOffset * Math.PI * 2) * 0.05;
    });

    return (
        <group>
            {/* Global Engine Lighting & Atmos */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
            <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#ff4d00" />
            
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={400} scale={100} size={6} speed={0.4} opacity={0.6} color="#ff4d00" />

            {/* Z-0: The Hero Monolith */}
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <Text position={[0, 1, 0]} fontSize={2} letterSpacing={-0.05} font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf" color="#ffffff" anchorX="center" anchorY="middle">
                    BHUMIKA
                </Text>
                <Text position={[0, -1.2, 0]} fontSize={2.5} letterSpacing={-0.05} font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf" color="#ff4d00" anchorX="center" anchorY="middle">
                    GUPTA
                </Text>
                <Text position={[0, -3.5, 0]} fontSize={0.3} letterSpacing={0.2} color="#888888" font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf">
                    SENIOR SOFTWARE ENGINEER / AI ARCHITECT
                </Text>
            </Float>

            {/* Z-40: The Technical Orbit */}
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
                <Text position={[4, 2, -40]} fontSize={1.5} color="#ffffff" letterSpacing={-0.05} font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf">
                    TECHNICAL
                </Text>
                <Text position={[4, 0.5, -40]} fontSize={1.5} color="#ff4d00" letterSpacing={-0.05} font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf">
                    ARSENAL.
                </Text>
                
                <Text position={[2, -1.5, -40]} fontSize={0.3} color="#aaaaaa" maxWidth={8} lineHeight={1.5} font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf">
                    JAVA // PYTHON // SPRING BOOT // NODE.JS
                </Text>
                <Text position={[2, -2.2, -40]} fontSize={0.3} color="#aaaaaa" maxWidth={8} lineHeight={1.5} font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf">
                    LANGGRAPH // DSPY // POSTGRESQL // KAFKA
                </Text>
            </Float>

            {/* Z-80: Experience Coordinates */}
            <Float speed={1} rotationIntensity={0.3} floatIntensity={1}>
                <Text position={[-4, 2, -80]} fontSize={1.5} color="#ffffff" letterSpacing={-0.05} font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf" anchorX="left">
                    HISTORY.
                </Text>
                
                <Text position={[-4, 0, -80]} fontSize={0.5} color="#ff4d00" letterSpacing={0.05} font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf" anchorX="left">
                    2026 - PRESENT // SOFTTECHERS
                </Text>
                <Text position={[-4, -0.8, -80]} fontSize={0.3} color="#888888" maxWidth={8} lineHeight={1.5} font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf" anchorX="left">
                    Engineered fraud-detection microservices processing 50K+ high-frequency transactions.
                </Text>

                <Text position={[-4, -2.5, -80]} fontSize={0.5} color="#ff4d00" letterSpacing={0.05} font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf" anchorX="left">
                    2022 - 2023 // WEBCRAFT
                </Text>
                <Text position={[-4, -3.3, -80]} fontSize={0.3} color="#888888" maxWidth={8} lineHeight={1.5} font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf" anchorX="left">
                    Apache Kafka continuous ingestion architecture holding 100K streams.
                </Text>
            </Float>

            {/* Z-120: Architectural Projects */}
            <Float speed={2} rotationIntensity={0.6} floatIntensity={1.5}>
                <Text position={[3, 3, -120]} fontSize={1.5} color="#ffffff" letterSpacing={-0.05} font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf" anchorX="center">
                    BUILDS.
                </Text>
                
                <Text position={[-2, 0, -122]} fontSize={0.5} color="#ff4d00" anchorX="center" font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf">
                    PROJECT ZERO / AI ENGINE
                </Text>
                
                <Text position={[4, -2, -118]} fontSize={0.5} color="#ff4d00" anchorX="center" font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf">
                    AURORA SUB-LATTICE
                </Text>
            </Float>

            {/* Z-160: Terminal Contact Node */}
            <Float speed={1} rotationIntensity={0.1} floatIntensity={0.5}>
                <Text position={[0, 0, -160]} fontSize={2} color="#ffffff" letterSpacing={-0.05} font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf" anchorX="center">
                    END SEQUENCE.
                </Text>
            </Float>

        </group>
    );
};

// Physics wrapper for Scroll Hook processing
const Experience3D = () => {
    return (
        <ScrollControls pages={6} damping={0.15}>
            <SceneLayout />
        </ScrollControls>
    );
};

export default Experience3D;
