import { motion } from "framer-motion";

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] bg-[#050816] flex items-center justify-center"
    >
      <div className="flex flex-col items-center">

        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
        >
          XAI
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 180 }}
          transition={{ duration: 1.4 }}
          className="h-1 mt-8 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
        />

        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
          }}
          className="mt-5 text-gray-400 tracking-widest text-sm"
        >
          Loading Intelligence...
        </motion.p>

      </div>
    </motion.div>
  );
};