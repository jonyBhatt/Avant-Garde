"use client";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="flex flex-col items-center pt-24 h-svh  overflow-hidden">
      <motion.p
        className="shadow-[inset_0_0_0_2px_#616467] text-black px-8 py-1 rounded-full tracking-widest uppercase font-bold bg-slate-800  hover:text-white dark:text-neutral-200 transition duration-200 my-4 font-inter"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        AG
      </motion.p>
      <motion.div
        className="text-center "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-white drop-shadow-lg font-rubik">
          Avant Garde
        </h1>
        <p className="mt-4 text-2xl font-inter tracking-wide text-muted-foreground  font-semibold">
          Your Ultimate Platform to Connect with Expert Mentors
        </p>
        <motion.button
          className="mt-8 shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-primary hover:text-white dark:text-neutral-200 transition duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};
export default Hero;

{
  /* <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
        Playlist
      </button> */
}
