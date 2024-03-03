'use client'
import style from './portfolio.module.css'
import { motion } from 'framer-motion'
export default function Portfolio(){
    return(
        <div>
            <motion.div className={style.box} animate={{opacity:1}} transition={{duration:.5}} whileHover={{opacity:0}}></motion.div>

           
        </div>
    )
}