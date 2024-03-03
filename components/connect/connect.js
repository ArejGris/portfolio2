"use client";
import { useState } from "react";
import "./connect.css";
import { motion, spring } from "framer-motion";
export default function ConnectList() {
  const list = ["facebook.png", "youtube.png", "instagram.png"];
  const [open, setOpen] = useState(true);
  const variant = (i) => ({
    start: {
      translateX: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
        delay: i*.1,
        stiffness: 400,
        dumping: 40,
      },
    },
    end: {
      translateX: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,

      },
    },
  });
  return (
    <motion.div className="connect">
      <motion.ul
        whileHover={() => {
          setOpen(false);
          setTimeout(() => {
            setOpen(true);
          }, 2000);
        }}
        onMouseMove={() => {
            setOpen(false);
            setTimeout(() => {
              setOpen(true);
            }, 2000);
          }}
      >
        {list.map((item, index) => (
          <motion.li
            key={item}
            initial={variant(1).start}
            animate={open ? variant(index).end : variant(index).start}
            transition={{duration:1,type:spring}}
          >
            <img src={item} alt="" />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
