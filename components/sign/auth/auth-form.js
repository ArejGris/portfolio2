"use client";
import { useEffect, useState } from "react";
import classes from "./auth-form.module.css";
import { useRef } from "react";
import { Notification } from "../../ui/notifications/Notification";
import { Fragment } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function AuthForm() {
  const { data: session } = useSession();
  const [isLogin, setIsLogin] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const email = useRef();
  const password = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    if (isLogin) {
      signIn("Credentials", {
        redirect: false,
        email: email.current.value,
        password: password.current.value,
      });
      console.log("getSession");
    } else {
      try {
        fetch("/api/signup", {
          method: POST,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
          }),
        });
      } catch (error) {
        console.log("not signed in", error);
      }
    }
    email.current.value = "";
    password.current.value = "";
  }
  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    }
  }, [success]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 1000);
    }
  }, [error]);
  return (
    <Fragment>
      {!session ? (
        <section className={classes.auth}>
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          <form onSubmit={handleSubmit}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" required ref={email} />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Your Password</label>
              <input type="password" id="password" required ref={password} />
            </div>
            <div className={classes.actions}>
              <button>{isLogin ? "Login" : "Create Account"}</button>
              <button
                type="button"
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
        </section>
      ) : 
      useRouter().push('/')}
      <>
          {success && (
            <Notification
              status={"success"}
              text="you have successfully signed"
            />
          )}
          {error && (
            <Notification status={"error"} text="you have failed signed" />
          )}
        </>
    </Fragment>
  );
}

export default AuthForm;
