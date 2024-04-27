const Experience = ({title,subtitle}) => {
    return (
        <>
        <ambientLight/>
        <directionalLight position={[10,10,5]}/>
        <mesh>
            <boxGeometry args = {[3,2,3]}/>
            <meshStandardMaterial color = "pink"/>
        </mesh>
        </>

    )

}

export default Experience