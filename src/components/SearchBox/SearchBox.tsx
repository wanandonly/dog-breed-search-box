import { ChangeEvent } from "react";
import styles from "./SearchBox.module.scss";

interface searchBoxInput {
  inputValue: string;
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBox({
  inputValue,
  placeholder,
  handleChange,
}: searchBoxInput) {
  return (
    <div className={styles.search}>
      <label htmlFor="dog-search">Search by dog breed</label>
      <input
        id="dog-search"
        className={styles.search}
        placeholder={placeholder}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}
