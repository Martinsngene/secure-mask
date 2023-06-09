/** @format */

import Image from "next/image";
import { CustomInputPropsI } from "../interface";
import styles from "./styles.module.css";

const Input = ({
  htmlFor,
  label,
  id,
  type,
  placeHolder,
  containerStyles,
  inputValue,
  onChange,
}: CustomInputPropsI) => {
  return (
    <div className={`${styles.container} ${containerStyles}`}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        type={type}
        onChange={onChange}
        placeholder={placeHolder}
        value={inputValue}
      />
      <button className={styles.search_button}>
        <Image src='/search.svg' alt='search icon' width={32} height={32} />
      </button>
    </div>
  );
};

export default Input;
