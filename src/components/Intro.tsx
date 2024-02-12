import { motion } from 'framer-motion';
import { useEffect } from 'react';
import IntroText from './IntroText';
import useAnimationIntro from '@/animations/useAnimationIntro';

type IntroProps = {
  setIsIntroFinished: (value: boolean) => void;
};

export default function Intro({ setIsIntroFinished }: IntroProps) {
  const { playIntro, scope } = useAnimationIntro();
  const windowHeight = window.innerHeight;

  useEffect(() => {
    playIntro(windowHeight, setIsIntroFinished);
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
