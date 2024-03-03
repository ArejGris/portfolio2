"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import "./hero.css";
import ConnectList from "../connect/connect";
export default function Hero() {
  return (
    <motion.section
      className="main-home"
      initial={{ opacity: 0, clipPath: "circle(10px at 50px 50px)" }}
      animate={{ opacity: 1, clipPath: "circle(1500px at 50px 50px)" }}
      transition={{ duration: 1.6 }}
    >
        
      <div className="main">
        <div className="img">
          <Image src="/areeg.png" width={300} height={300} alt="areeg" />
        </div>
        <h1>Hi, I'm Areej</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
          temporibus doloremque dolore.
        </p>
      </div>
      <div className="list-icon">
        <ConnectList />
        </div>
    </motion.section>
  );
}
