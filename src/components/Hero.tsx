import blobTopUrl from '@/assets/blob-top.svg';
import blobBottomUrl from '@/assets/blob-bottom.svg';
import ScrollDown from './ScrollDown';
import Nav from './Nav';
import { motion } from 'framer-motion';
import useAnimationHero from '@/animations/useAnimationHero';
import { useEffect } from 'react';

export default function Hero() {
  const {
    scope,
    animationWelcomeMessage,
    animationBlobEntry,
    animationNav,
    animationScrollDown,
  } = useAnimationHero();

  useEffect(() => {
    animationWelcomeMessage();
    animationBlobEntry();
    animationNav();
    animationScrollDown();
  });

  return (
    <div
      ref={scope}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <Nav />
      <div className="absolute -right-64 -top-52 ">
        <motion.img
          src={blobTopUrl}
          id="blob-top"
          initial={{ x: 70, y: -70, scale: 0.2, opacity: 0.3 }}
          className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
        />
      </div>
      <div className="absolute -bottom-80 -left-52">
        <motion.img
          src={blobBottomUrl}
          id="blob-bottom"
          initial={{ x: -70, y: 70, scale: 0.2, opacity: 0.3 }}
          className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
        />
      </div>

      <div className="flex overflow-hidden p-5 text-8xl font-semibold text-text-dark">
        <motion.p id="h" initial={{ y: 120 }}>
          H
        </motion.p>
        <motion.p id="e" initial={{ y: 120 }}>
          e
        </motion.p>
        <motion.p id="l-1" initial={{ y: 120 }}>
          l
        </motion.p>
        <motion.p id="l-2" initial={{ y: 120 }}>
          l
        </motion.p>
        <motion.p id="o" initial={{ y: 120 }}>
          o
        </motion.p>
      </div>

      <ScrollDown />
    </div>
  );
}
