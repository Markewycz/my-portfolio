import { motion, useAnimate, cubicBezier } from 'framer-motion';
import { useEffect } from 'react';
import IntroText from './IntroText';

type Target = string;
type Delay = number;
type IntroProps = {
  setIsIntroFinished: (value: boolean) => void;
};

export default function Intro({ setIsIntroFinished }: IntroProps) {
  const [scope, animate] = useAnimate();
  const easeOutCustom = cubicBezier(0.55, 0.09, 1, 0.12);
  const easeOutBgCustom = cubicBezier(0.8, -0.01, 0.41, 0.92);
  const windowHeight = window.innerHeight;

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
      { duration: 0.7, type: 'spring', delay: 1.1 },
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

  const animationBg = () => {
    animate(
      '#bg',
      { y: -windowHeight },
      { duration: 1.6, ease: easeOutBgCustom, delay: 3 },
    );
  };

  useEffect(() => {
    const playIntro = async () => {
      await Promise.all([
        animationIntro('top', 0, 0.1),
        animationIntro('bottom', 0.1),
        animationBg(),
      ]);
      setInterval(() => {
        setIsIntroFinished(true);
      }, 1000);
    };

    playIntro();
  }, []);

  return (
    <div
      ref={scope}
      className="relative flex h-screen w-full items-center justify-center"
    >
      <motion.div
        id="bg"
        className="absolute left-0 top-0 -z-10 h-screen w-full bg-bg-intro"
      ></motion.div>
      <div className="text-center">
        <IntroText target="top" className="text-text-intro-light">
          Gracjan Markiewicz
        </IntroText>
        <IntroText target="bottom" className="text-text-intro">
          @ Folio 2024
        </IntroText>
      </div>
    </div>
  );
}
