import React from "react";
import styles from "./Login.module.scss";
import userIcon from "../assets/user-icon3.svg";
import icons from "../assets/icons.svg";

export function Login() {
  return (
    <form>
      <div className={styles.form}>
        <div className={styles.field}>
          {/* <label htmlFor="login__username" className={styles.label}>
            <img className={styles.icon} src={userIcon} alt="user icon" />
            <span className="hidden">Username</span>
          </label> */}
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
          {/* <label htmlFor="login__username" className={styles.label}>
            <img className={styles.icon} src={userIcon} alt="user icon" />
            <span className="hidden">Username</span>
          </label> */}
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
      </div>

      <p class="text--center">
        Not a member? <a href="#">Sign up now</a>{" "}
        <svg class="icon">
          <use xlinkHref="#icon-arrow-right"></use>
        </svg>
      </p>
    </form>
  );
}
