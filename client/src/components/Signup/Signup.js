import React from "react";
import { Link } from "react-router-dom";

import styles from "./signup.module.scss";
import icons from "../../assets/icons.svg";

export function Signup() {
  return (
    <form className={styles.container}>
      <div className={`${styles.form} ${styles.login}`}>
        <div className={styles.field}>
          <label for="loginUsername" className={styles.label}>
            <svg className={styles.icon}>
              <use xlinkHref={`${icons}#icon-user`}></use>
            </svg>
            <span class="hidden">username</span>
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
          <label for="loginFullName" className={styles.label}>
            <svg className={styles.icon}>
              <use xlinkHref={`${icons}#icon-user`}></use>
            </svg>
            <span class="hidden">full name</span>
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Full name"
            name="fullname"
            required
          />
        </div>
        <div className={styles.field}>
          <label for="loginPassword" className={styles.label}>
            <svg className={styles.icon}>
              <use xlinkHref={`${icons}#icon-lock`}></use>
            </svg>
            <span class="hidden">Password</span>
          </label>
          <input
            className={styles.input}
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
        </div>
        <div className={styles.field}>
          <label for="loginConfirmPassword" className={styles.label}>
            <svg className={styles.icon}>
              <use xlinkHref={`${icons}#icon-lock`}></use>
            </svg>
            <span class="hidden">Confirm Password</span>
          </label>
          <input
            className={styles.input}
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
        <section className={styles.member}>
          <p class={styles.text}>
            Already a member? <Link to="/login">Login</Link>{" "}
          </p>
          <svg class={`${styles.icon} ${styles.arrow}`}>
            <use xlinkHref={`${icons}#icon-arrow-right`}></use>
          </svg>
        </section>
      </div>
    </form>
  );
}
