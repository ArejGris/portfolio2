"use client";
import "./experience.css";
import Image from "next/image";
import { motion, spring } from "framer-motion";
import { useEffect, useState } from "react";
import {Swiper,SwiperSlide} from 'swiper/react'
export default function Experience() {
  const [swap, setSwap] = useState(false);
  const allyears = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam fuga",
      year: 2020,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam fuga",
      year: 2021,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam fuga",
      year: 2023,
    },
  ];

  return (
    <section className="info">
      <div className="exp">
        <Swiper scrollbar={{ draggable: true }} loop="true" autoplay aut className="slider">
          {allyears.map((year) => 
            (<SwiperSlide
              key={year.year}
            >
              <motion.div 
              className="year"
              initial={{ translateY: 100 }}
              animate={{ translateY: 0 }}
              whileHover={() => {
                setSwap((prev) => !prev);
              }}
              transition={{ duration: 1, type: spring }}>
              
              <h1>{year.year}</h1>
              <p>{year.text}</p>
              </motion.div>
            </SwiperSlide>)
          )}
        </Swiper>
      </div>
      <Image
        width={600}
        height={400}
        src="/mountains.png"
        responsive="true"
        className="img"
      />
    </section>
  );
}
