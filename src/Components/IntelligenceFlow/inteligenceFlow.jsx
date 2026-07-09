import { motion } from "framer-motion";
import { FaDatabase, FaBrain, FaChartLine } from "react-icons/fa";

const steps = [
  {
    icon: <FaDatabase size={35} />,
    title: "Ingest Data",
    description:
      "Collect structured and unstructured business data from multiple sources in real time.",
  },
  {
    icon: <FaBrain size={35} />,
    title: "AI Analysis",
    description:
      "Our AI processes and understands the data to identify trends, patterns, and opportunities.",
  },
  {
    icon: <FaChartLine size={35} />,
    title: "Generate Insights",
    description:
      "Receive clear dashboards, recommendations, and automations to make better decisions.",
  },
];

export const IntelligenceFlow = () => {
  return (
    <section 
    id="features"
    className="bg-[#050816] py-28 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            How XAI Works
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            XAI transforms complex business information into structured
            intelligence through a simple but powerful AI workflow.
          </p>
        </motion.div>

        <div className="relative mt-20">

          <div className="grid lg:grid-cols-3 gap-10">


            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .7,
                  delay: index * .2,
                }}
                className="relative z-10 group bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-violet-500 hover:-translate-y-4 hover:shadow-[0_0_60px_rgba(139,92,246,.45)] transition-all duration-500"
              >

                <motion.div
                  whileHover={{ rotate: 360,
                     scale: 1.1,
                    y: -5 }}
                  transition={{ duration: .8 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600
               to-fuchsia-600 flex items-center justify-center mb-8">
                  {step.icon}
                </motion.div>

                <h3 className="text-2xl font-semibold mb-5">
                  {step.title}
                </h3>
                <p className="text-violet-400 text-sm font-semibold mb-2">
                  Step 0{index + 1}
                </p>

                <p className="text-gray-400 leading-8">
                  {step.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-violet-400 font-medium group-hover:gap-4 transition-all duration-300">
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </motion.div>

            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

