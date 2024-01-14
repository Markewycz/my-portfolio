import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-particles';

export default function ParticleCanvas() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: '#fff',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'attract',
            },
            onHover: {
              enable: true,
              mode: 'grab',
              parallax: {
                enable: true,
                force: 3,
                smooth: 80,
              },
            },
            resize: true,
          },
          modes: {},
        },
        particles: {
          color: {
            value: '#000',
          },
          links: {
            color: '#888',
            distance: 200,
            enable: true,
            opacity: 0.9,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: false,
            speed: 0.7,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1600,
            },
            value: 70,
          },
          opacity: {
            value: 0.4,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
