"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "./post-item.css";
const PostItem = ({ post }) => {
  const { title, num, image, excerpt, date, slug } = post;
  const variants = {
    start: {
      opacity: 0,
      translateY: 50,
      clipPath: "circle(12px at 50px 50px)",
      transition: {
        duration: 3,
      },
    },
    end: {
      opacity: 1,
      translateY: 0,
      clipPath: "circle(1200px at 50px 50px)",
      transition: { delay: num * 0.1, duration: 1, type: "spring" },
    },
  };
  const formatedDate = new Date(date).toLocaleDateString("es-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const linka = `/posts/${slug}`;
  return (
    <motion.li
      className="one-post"
      initial={variants.start}
      whileInView={variants.end}
      transition={{ duration: 2 }}
      whileHover={{ clipPath: "circle(30px at 50px 50px)" }}
    >
      <Link href={linka}>
        <div className="container">
          <div className="image">
            <Image
              src={image}
              width={600}
              height={600}
              alt="alt"
              responsive="true"
              className="img"
            />
          </div>
          <div className="content">
            <h3>{title}</h3>
            <time>{formatedDate}</time>
            <div className="excerpt"> {excerpt}</div>
          </div>
        </div>
      </Link>
    </motion.li>
  );
};

export default PostItem;
