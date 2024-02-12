import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

type IntroTextProps = {
  target: string;
  className?: string;
  children: React.ReactNode;
};

export default function IntroText({
  target,
  className,
  children,
}: IntroTextProps) {
  return (
    <motion.div id={`intro-${target}-container`} className="overflow-hidden">
      <motion.p
        id={`intro-${target}`}
        initial={{ y: 40 }}
        className={cn('relative text-4xl font-bold', className)}
      >
        {children}
      </motion.p>
    </motion.div>
  );
}
