import arrowDownUrl from '@/assets/arrow-down.svg';
import { motion } from 'framer-motion';

export default function ScrollDown() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <motion.div
        id="scroll-down"
        initial={{ y: 30 }}
        className="flex flex-col items-center justify-center opacity-70"
      >
        <img src={arrowDownUrl} />
        <p className="text-text-lighter">Scroll down to explore</p>
      </motion.div>
    </div>
  );
}
