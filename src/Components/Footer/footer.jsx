import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";


export const Footer =()=>{
  const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};
    return(
        <footer className="bg-[#040611] border-t border-white/10 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
                <div className=" grid lg:grid-cols-3 gap-12">

                    <div>
                        <h2 className="text-3xl font-bold">
                            XAI
                        </h2>
                        <p className="mt-5 leading-8 text-gray-400 max-w-sm">
                            Transforming raw business data into intelligent
                            insights through modern Ai-powerd workflows.
                        </p>
                    </div>
  
                    <div>
                    <h3 className="text-xl font-semibold mb-6">
                        Navigation
                    </h3>
                    <ul className="space-y-4 text-gray-400">
                        <li  onClick={() => scrollToSection("features")}
                          className="hover:text-white cursor-pointer transition">
                            Features
                        </li>

                        <li onClick={() => scrollToSection("dashboard")}
                          className="hover:text-white cursor-pointer transition">
                            Dashboard
                        </li>

                        <li onClick={() => scrollToSection("pricing")}
                          className="hover:text-white cursor-pointer transition">
                            Pricing
                        </li>

                        <li onClick={() => scrollToSection("about")}
                          className="hover:text-white cursor-pointer transition">

                            About
                        </li>
                    </ul>
                    </div>

     
                    <div>
                        <h3 className="text-xl font-semibold mb-6"> 
                        Connect
                        </h3 >
                            <div className="flex gap-5"> 
                                <a href="#" 
                                 className="w-12 h-12 rounded-full bg-white/5 border border-white/10
                                  hover:border-violet-500 hover:bg-violet-600 hover:-translate-y-1 
                                  transition-all duration-300 flex items-center justify-center">
                                    <FaGithub size={22} />
                                </a>
                                <a href="#"  
                                 className="w-12 h-12 rounded-full bg-white/5 border border-white/10
                                  hover:border-violet-500 hover:bg-violet-600 hover:-translate-y-1 
                                  transition-all duration-300 flex items-center justify-center">
                                    <FaLinkedin size={22} />
                                </a>
                                <a href="#"
                                 className="w-12 h-12 rounded-full bg-white/5 border border-white/10
                                  hover:border-violet-500 hover:bg-violet-600 hover:-translate-y-1 
                                  transition-all duration-300 flex items-center justify-center">
                                    <FaTwitter size={22} />
                                </a>  
                            </div>
                    </div>
                </div>
                <div  className="border-t border-white/10 mt-14 pt-8 text-center text-gray-500">
                    © 2026 XAI Intelligence Workspace • Designed with Precision & AI.
                </div>
            </div>
        </footer>
    )
}
