import { motion } from "framer-motion";

const companies = [
  "Google",
  "Microsoft",
  "OpenAI",
  "Amazon",
  "Spotify",
  "Netflix",
];

export const Clients =()=>{
return (
    <section className="bg-[#050816] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <p className="text-center text-gray-400 uppercase tracking-[6px] text-sm mb-12">
          Trusted by innovative companies
        </p>

        <motion.div
          animate={{ x: [0,-720] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: 'loop'
          }}
          className="flex gap-20"
        >
          {[...companies, ...companies].map((company, index) => (
            <h2
              key={index}
              className="text-4xl font-bold text-white/20 hover:text-violet-400 transition"
            >
              {company}
            </h2>
          ))}
        </motion.div>

      </div>
    </section>
)
}