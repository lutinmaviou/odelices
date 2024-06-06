'use client';

import Particles from 'react-particles';
import { type Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';

const AboutParticles = () => {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  const options: any = {
    background: {
      color: {
        value: '#fff',
      },
    },
    fpsLimit: 180,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 80,
          duration: 30,
        },
      },
    },
    particles: {
      color: {
        value: '#0D34F5',
      },
      links: {
        color: '#0D34F5',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 700,
        },
        value: 70,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };
  return <Particles init={init} options={options} />;
};

export default AboutParticles;
