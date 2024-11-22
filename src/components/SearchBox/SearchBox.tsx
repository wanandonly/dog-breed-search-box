import styles from "./SearchBox.module.scss";

export function SearchBox() {
  return (
    <div className={styles.search}>
      <label htmlFor="dog-search">Search by dog breed</label>
      <input
        id="dog-search"
        className={styles.search}
        placeholder="Great Dane, Dalmatian, Chihuahua"
        type="text"
      />
    </div>
  );
}
