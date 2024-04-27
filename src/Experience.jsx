import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = () => {
    
    return (
        <>
        <ambientLight/>
        <directionalLight position={[10,10,5]}/>
        <OrbitControls makeDefault/>
        <mesh>
            <boxGeometry args = {[3,2,3]}/>
            <meshStandardMaterial color = "pink"/>
        </mesh>
        </>

    )

}

export default Experience