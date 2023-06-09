import React, { useCallback } from "react";
import logo from './logo.svg';
import './App.css';
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";
import particleConfig from './ParticlesConfig.json';
import '../src/Components/Timer.css'; // Import your existing Timer component CSS
import Timer from './Components/Timer';

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
    <Particles
      id="tsparticles"
      loaded={particlesLoaded}
      options={particleConfig}
      init={particlesInit}
     />
    <Timer />
    </>
    
  );
}

export default App;
