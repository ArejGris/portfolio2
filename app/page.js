'use client'
import { Fragment, useEffect } from "react";
import Hero from "@/components/home-page/hero";
import FeaturedPost from "@/components/home-page/featured-posts";
import { Dummy_Data} from '../lib/getAllProject'
import Experience from "@/components/info/experience";
import gsap from "gsap";
import {  } from "../lib/animation";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion"; 
import './main.css'
export default function Home() {
  gsap.registerPlugin(ScrollTrigger)
  const animatePageIn={
    start: {
      opacity: 0,
      translateX: 100,
      transition: {
        duration: 1,
        stiffness: 800,
        dumping: 40,
      },
    },
    end: {
      opacity: 1,
      translateX: 0,
      transition: { delay: 0.1, duration: 3, type: "spring" },
    },
    
  }

 function ff(one){
  const page1=document.getElementById(one)
  page1.classList.remove('hide')
 }
 function ff2(one){
  const page1=document.getElementById(one)
  page1.classList.add('hide')
 }
  return (
  <motion.div className="hero" >
    <motion.div className="sec1" id="sec1" >
    
    <Hero/>
    </motion.div>
    <motion.div className="sec2" id="sec2" initial={animatePageIn.start} whileInView={()=>animatePageIn.end}>
  
    <Experience/>
    </motion.div>
    <motion.div className="sec3" id="sec3" initial={animatePageIn.start} whileInView={()=>animatePageIn.end}>
     
    <FeaturedPost posts={Dummy_Data}/>
    </motion.div>
  </motion.div>);
}
