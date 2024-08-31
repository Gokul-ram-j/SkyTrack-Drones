import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import "./HeroSection.css";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";

const Herosection = () => {
  const { scene, animations } = useGLTF("/assests/buster_drone/scene.gltf");
  const { actions } = useAnimations(animations, scene);

  if (actions) {
    actions[Object.keys(actions)[0]].play();
  }

  return (
    <mesh>
      <ambientLight intensity={5} />
      <primitive object={scene} scale={10} position={[0, -5, -10]} />
    </mesh>
  );
};

const containerVarient = {
  exit: {
    x: "-150vw",
    transition: { duration: 0.7, delay: 4.5 },
  },
};

const varientsH1 = {
  initial: { y: -250 },
  animate: {
    y: -10,
    x: [-10, 30, 25, 10, 0, -10],
    color: ["white"],
    transition: { duration: 5, type: "spring", damping: 8, stiffness: 300 },
  },
  whileHover: {
    textShadow: "10px 10px green",
    transition: { type: "spring", stiffness: 300 },
  },
};

const varientP = {
  initial: { x: "-50vw" },
  animate: { x: -1, duration: 3, type: "spring", damping: 100, stiffness: 300 },
  whileHover: { scale: 1.1, duration: 0.5, transition: { yoyo: Infinity } },
};

const varientButton = {
  initial: { x: "50vw" },
  animate: { x: -1, duration: 3, type: "spring", stiffness: 300 },
  whileHover: { scale: 1.1 },
};

const HeroImgCanvas = () => {
  
  const [explore, setExplore] = useState(true);
  const navigate = useNavigate();
  return (
    <>
    <motion.div variants={containerVarient} exit="exit" className="holder3d">
      <motion.div className="hero-content">
        <motion.h1
          variants={varientsH1}
          initial="initial"
          whileHover="whileHover"
          animate="animate"
          className="hero-title"
        >
          Welcome to SkyTrack Drones
        </motion.h1>
        <motion.p
          variants={varientP}
          animate="animate"
          initial="initial"
          whileHover="whileHover"
          className="hero-subtitle"
        >
          Revolutionizing Aerial Photography & Beyond
        </motion.p>
        <AnimatePresence>
          {explore && (
            <motion.button
              variants={varientButton}
              initial="initial"
              animate="animate"
              whileHover="whileHover"
              exit={{
                x: [-10, 15, -20, 25, -50, 1000],
                transition: { duration: 5 },
              }}
              onClick={() => {
                setExplore(false);
                navigate("/service");
              }}
              className="explorebtn"
            >
              EXPLORE
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      <Canvas
        camera={{ position: [0, 20, 0], fov: 80 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loading />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Herosection />
        </Suspense>
        <Preload all />
      </Canvas>
    </motion.div>
    </>
  );
};

export default HeroImgCanvas;
