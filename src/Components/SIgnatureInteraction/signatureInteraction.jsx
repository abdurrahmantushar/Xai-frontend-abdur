import { motion } from "framer-motion";

const particles = [
    { top: "10%", left: "20%" },
    { top: "25%", left: "75%" },
    { top: "50%", left: "15%" },
    { top: "70%", left: "80%" },
    { top: "85%", left: "35%" },
    { top: "30%", left: "45%" },
];

export const SignatureInteraction = () => {
    return (
        <section 
        id="about"
        className="bg-[#050816] py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                    className="text-center"
                >
                    <h2 className="text-5xl font-bold text-white">
                        AI Core Intelligence
                    </h2>
                    <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-8">
                        Every insight begins from a connected intelligence core that
                        continuously analyzes, predicts, and automates business decisions.
                    </p>
                </motion.div>

                <div className="relative h-[650px] flex items-center justify-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 25,
                            ease: 'linear'
                        }}
                        className="absolute w-[300px] h-[300px] md:w-[430px] md:h-[430px] border
                     border-violet-500/30 rounded-full"
                    />
                    {/* eta inner ring */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 35,
                            ease: 'linear'
                        }}
                        className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px] border border-cyan-400/20 rounded-full"
                    />
                    {/* orb sorrunding particles */}
                    {
                        particles.map((item, index) => (
                            <motion.div
                                key={index}
                                animate={{
                                    y: [0, -25, 0],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 3 + index,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                }}
                                className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                                style={{
                                    top: item.top,
                                    left: item.left,
                                }}
                            />
                        ))
                    }

                    {/* eta hlo center er orb */}
                    <motion.div
                        animate={{
                            scale: [1, 1.12, 1],
                            opacity: [1, 0.9, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity
                        }}
                        className=" w-35 h-35 md:w-44 md:h-44 rounded-full bg-gradient-to-r from-violet-600 
                         to-fuchsia-600 shadow-[0_0_120px_rgba(168,85,247,.8)] flex items-center justify-center"
                    >
                        <h3 className="text-white text-3xl font-extrabold tracking-wider">
                            XAI
                        </h3>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}