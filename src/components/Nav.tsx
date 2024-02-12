import { motion } from 'framer-motion';

export default function Nav() {
  return (
    <div className="absolute left-1/2 top-6 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
      <motion.ul
        id="nav"
        initial={{ y: -40 }}
        className="flex  list-none gap-3 text-2xl text-text-lighter"
      >
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#works">works</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </motion.ul>
    </div>
  );
}
