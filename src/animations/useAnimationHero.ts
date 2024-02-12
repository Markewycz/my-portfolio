import { useAnimate } from 'framer-motion';

export default function useAnimationHero() {
  const [scope, animate] = useAnimate();

  const animationWelcomeMessage = () => {
    animate('#h', { y: 0 }, { duration: 0.5, type: 'spring', stiffness: 100 });
    animate(
      '#e',
      { y: 0 },
      { duration: 0.5, type: 'spring', stiffness: 100, delay: 0.05 },
    );
    animate(
      '#l-1',
      { y: 0 },
      { duration: 0.5, type: 'spring', stiffness: 100, delay: 0.1 },
    );
    animate(
      '#l-2',
      { y: 0 },
      { duration: 0.5, type: 'spring', stiffness: 100, delay: 0.15 },
    );
    animate(
      '#o',
      { y: 0 },
      { duration: 0.5, type: 'spring', stiffness: 100, delay: 0.2 },
    );
  };

  const animationBlobEntry = () => {
    animate(
      '#blob-top',
      { x: 0, y: 0, scale: 1, opacity: 1 },
      { duration: 1, stiffness: 100, type: 'spring' },
    );
    animate(
      '#blob-bottom',
      { x: 0, y: 0, scale: 1, opacity: 1 },
      { duration: 1, stiffness: 100, type: 'spring' },
    );
  };

  const animationNav = () => {
    animate('#nav', { y: 0 }, { duration: 1, stiffness: 100, type: 'spring' });
  };

  const animationScrollDown = () => {
    animate(
      '#scroll-down',
      { y: 0 },
      { duration: 1, stiffness: 50, type: 'spring' },
    );
  };

  return {
    scope,
    animationWelcomeMessage,
    animationBlobEntry,
    animationNav,
    animationScrollDown,
  };
}
