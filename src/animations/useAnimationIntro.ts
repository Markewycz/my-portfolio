import { cubicBezier, useAnimate } from 'framer-motion';

type Target = string;
type Delay = number;

const easeOutCustom = cubicBezier(0.55, 0.09, 1, 0.12);
const easeOutBgCustom = cubicBezier(0.8, -0.01, 0.41, 0.92);

export default function useAnimationIntro() {
  const [scope, animate] = useAnimate();

  const animationIntro = async (
    target: Target,
    delayIn: Delay = 0,
    delayOut: Delay = 0,
  ) => {
    await animate(
      `#intro-${target}`,
      { y: 0 },
      { duration: 1, type: 'spring', stiffness: 100, delay: delayIn },
    );
    await animate(
      `#intro-${target}-container`,
      { y: 5 },
      { duration: 0.7, type: 'spring', delay: 0.6 },
    );
    await animate(
      `#intro-${target}-container`,
      { y: -200, opacity: 0 },
      {
        duration: 1.1,
        ease: easeOutCustom,
        delay: delayOut,
      },
    );

    return Promise.resolve({});
  };

  const animationBg = (windowHeight: number) => {
    animate(
      '#bg',
      { y: -windowHeight },
      { duration: 1.6, ease: easeOutBgCustom, delay: 2.5 },
    );
  };

  const playIntro = async (
    windowHeight: number,
    setState: (value: boolean) => void,
  ) => {
    await Promise.all([
      animationIntro('top', 0, 0.1),
      animationIntro('bottom', 0.1),
      animationBg(windowHeight),
    ]);
    setInterval(() => {
      setState(true);
    }, 600);
  };

  return { playIntro, scope };
}
