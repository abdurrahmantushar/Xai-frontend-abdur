import { motion,useMotionValue, useSpring, useTransform } from "framer-motion";

export const Hero = () =>{
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useSpring(useTransform(mouseY,[-300,300],[8,-8]),{
        stiffness: 120,
        damping: 20
    })

    const rotateY = useSpring(useTransform(mouseX,[-300,300],[-8,8]),{
        stiffness: 120,
        damping: 20        
    })

    const handleMouseMove =(e) =>{
        const rect = e.currentTarget.getBoundingClientRect()

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
    }

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };


    return(
        <section
        id="home"
        onMouseLeave={handleMouseLeave} 
        onMouseMove={handleMouseMove}   
        className="relative min-h-screen overflow-hidden 
                bg-[#050816] text-white flex items-center pt-28">
                 {/* Background Glow ekhne korlam */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="  absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-[150px]" />
                        <div className="hidden md:block absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[150px]" />
                    </div>       
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
                {/* lift side div eta*/}
                <div>

                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-200 text-sm backdrop-blur-md"
                    >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

                    <span>AI Powered Workspace</span>
                    </motion.div>
                    
                    <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
                    >
                     Transform
                     <br />
                     Raw Data Into 
                     <br />
                     <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                        Intelligent Decisions
                     </span>
                    </motion.h1>


                     <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .4 }}
                    className="mt-8 max-w-lg text-lg leading-8 text-gray-300"
                     >
                    Transform scattered business data into structured intelligence,
                    interactive analytics, and AI-powered automation using one unified
                    workspace built for modern decision-makers.               
                     </motion.p>

                     {/* Butten sectionss eta */}

                     <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .6 }}
                    className="mt-10 flex flex-wrap gap-4"            
                     >
                    <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="group rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 
                    px-8 py-4 font-semibold shadow-lg shadow-violet-600/30 transition-all duration-300 
                    hover:-translate-y-1 hover:shadow-violet-500/50"
                    >
                        Get Started Free
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                    </motion.button>

                    < motion.button
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-violet-500 hover:bg-white/10"
                    >
                    Watch Live Demo
                    </motion.button>

                     </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 w-[250px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
                        >
                        <p className="text-sm text-gray-400">
                            AI Accuracy
                        </p>

                        <h2 className="mt-2 text-4xl font-bold text-white">
                            98.6%
                        </h2>
                        <p className="mt-3 text-xs text-gray-500">
                            Powered by real-time AI analytics
                        </p>
                        <p className="mt-2 text-sm text-green-400">
                            ▲ +12% Performance
                        </p>
                        </motion.div>
                     </div>



                {/* Right side div eta */}
                {/* Orb */}
                <motion.div
                    initial={{ opacity: 0, scale: .8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                      style={{
                                rotateX,
                                rotateY,
                                transformPerspective: 1000,
                            }}
                    className="relative flex justify-center items-center h-[340px] sm:h-[420px] lg:min-h-[500px]  overflow-hidden"
                >
                    <div className=" hidden md:block w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 blur-3xl absolute"></div>
                     <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute w-[340px] h-[340px] md:w-[480px] md:h-[480px] rounded-full border border-violet-500/20"
                    />

                    <div className=" relative w-[280px] h-[280px]  sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] rounded-full border
                     border-violet-500/40 bg-white/5 backdrop-blur-xl flex 
                     items-center justify-center shadow-[0_0_80px_rgba(139,92,246,.35)]">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute inset-0"
                        >
                    
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
                    
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 3, repeat: Infinity }} 
                    className="absolute w-5 h-5 rounded-full bg-violet-500 top-4 left-12 md:top-5 md:left-20"/>

                    <motion.div
                      animate={{ y: [0, 12, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    className="absolute w-4 h-4 rounded-full bg-fuchsia-500 bottom-6 right-10 md:bottom-10 md:right-16"/>

                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                     transition={{ duration: 5, repeat: Infinity }}
                    className="absolute w-3 h-3 rounded-full bg-cyan-400 top-10 right-6 md:top-16 md:right-8"/>
                    {/* ghure j oi dot gula */}
                    <motion.div
                    animate={{
                        scale: [1, 1.12, 1],
                        opacity:[1,.9,1],
                        rotate:[0,360]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className=" w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-[0_0_100px_rgba(168,85,247,.9)]"
                    ></motion.div>
                    </div>                
                </motion.div>
            </div>
        </section>
    )
}