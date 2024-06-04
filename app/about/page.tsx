'use client';
import type { Metadata } from 'next';
import './about.scss';
import Image from 'next/image';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { Background, FullScreen, type Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const About = () => {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  const options:any = {
    background: {
      color: {
        value: '#17202A',
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
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
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
          area: 900,
        },
        value: 80,
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
  return (
    <section className="">
      <Particles init={init} options={options} />
      <div className="py-[15dvh] m-auto border border-red-500">
        <Image
          src="/assets/img/carte-agent.png"
          alt="Carte de l'agent Bertrand"
          width={1000}
          height={124}
          className="absolute"
        />
      </div>
    </section>
  );
};

export default About;
