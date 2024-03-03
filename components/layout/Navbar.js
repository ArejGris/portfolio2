'use client'
import Link from "next/link";
import "./navbar.css";
import classes from './main-navigation.module.css';
import { signOut, useSession } from "next-auth/react";
const Navbar = () => {
 const {data:session}=useSession()
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <h1>Areej Blog</h1>
      </Link>
      <ul className="list">
        <li>
         {!session&& <Link href="/auth">Login</Link>}
        </li>
        <li>
          <Link href="/sign-in">Profile</Link>
        </li>
        <li>
         {session&& <button onClick={()=>signOut()}>Logout</button>}
        </li>
        <li>
          <Link href="/posts">posts</Link>
        </li>
        <li>
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </header>
  );
};
export default Navbar;
