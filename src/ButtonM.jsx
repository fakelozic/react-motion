import { motion } from "motion/react";
function ButtonM(props) {
  return (
    <>
      <div
        className="[perspective::1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-900 flex items-center justify-center"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.1) 1px, transparent 0)`,
          backgroundSize: "8px 8px",
          backgroundRepeat: "repeat",
        }}
      >
        <motion.button
          whileHover={{
            rotateX: 25,
            rotateY: 10,
            y: -7,
            scale: 1.05,
            boxShadow: "0px 20px 50px rgba(8,112,184,0.5)",
          }}
          whileTap={{
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          style={{ translateZ: 100 }}
          className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset cursor-pointer"
        >
          <span className="group-hover:text-cyan-500 transition-colors duration-300">
            {props.text}
          </span>
          <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
          <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-3/4 mx-auto blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </motion.button>
      </div>
    </>
  );
}

export default ButtonM;
