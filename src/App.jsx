import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { DashboardShow } from "./Components/Dashboard/Dashbord"
import { Footer } from "./Components/Footer/footer"
import { Hero } from "./Components/Hero/hero"
import { IntelligenceFlow } from "./Components/IntelligenceFlow/inteligenceFlow"
import { Navbar } from "./Components/Navbart/Navbar"
import { SignatureInteraction } from "./Components/SIgnatureInteraction/signatureInteraction"
import { LoadingScreen } from "./Components/Loading/loadingScreen";

export const App = () => {

const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1800);

  return () => clearTimeout(timer);
}, []);

  return (
    <>
      <AnimatePresence>
       {
         loading &&<LoadingScreen />
        } 
      </AnimatePresence>
      <div className="min-h-screen  bg-[#050816] text-white">
        <Navbar />
        <Hero />
        <DashboardShow />
        <IntelligenceFlow />
        <SignatureInteraction />
        {/* <Clients/>  eta client er jnne  */}
        <Footer />
      </div>
    </>
  )
}