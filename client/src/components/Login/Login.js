import React from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.scss";
import icons from "../../assets/icons.svg";

export function Login() {
  return (
    <form className={styles.container}>
      <div className={`${styles.form} ${styles.login}`}>
        <div className={styles.field}>
          <label for="login__password" className={styles.label}>
            <svg className={styles.icon}>
              <use xlinkHref={`${icons}#icon-user`}></use>
            </svg>
            <span class="hidden">Password</span>
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Username"
            name="uname"
            required
          />
        </div>
        <div className={styles.field}>
          <label for="login__password" className={styles.label}>
            <svg className={styles.icon}>
              <use xlinkHref={`${icons}#icon-lock`}></use>
            </svg>
            <span class="hidden">Password</span>
          </label>
          <input
            className={styles.input}
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
        <section className={styles.member}>
          <p class={styles.text}>
            Not a member? <Link to="/signup">Sign up now</Link>{" "}
          </p>
          <svg class={`${styles.icon} ${styles.arrow}`}>
            <use xlinkHref={`${icons}#icon-arrow-right`}></use>
          </svg>
        </section>
      </div>
    </form>
  );
}
