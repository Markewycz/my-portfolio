import { motion } from 'framer-motion';

export default function Background() {
  return (
    <>
      {/* <div className="absolute h-screen w-full bg-transparent bg-opacity-60 backdrop-blur-lg backdrop-filter"></div> */}
      <div className="h-screen bg-[#001220]"></div>

      <motion.svg
        className="absolute top-0"
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          fill="#FBAE3C"
          d="M45,-56.8C58,-42.7,68,-28.2,71.3,-12.2C74.5,3.8,71.1,21.4,63.5,38.8C56,56.2,44.5,73.4,28.9,78.7C13.4,84,-6.2,77.4,-22.7,68.7C-39.2,59.9,-52.7,49,-53.8,36.3C-55,23.5,-44,8.9,-39.8,-5.6C-35.5,-20.1,-38.2,-34.4,-32.7,-49.8C-27.2,-65.1,-13.6,-81.6,1.2,-83C16,-84.5,32,-70.8,45,-56.8Z"
          transform="translate(460 20)"
        />
      </motion.svg>
    </>
  );
}
