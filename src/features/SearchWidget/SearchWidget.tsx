import { Results } from "../../components/Results/Results";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import styles from "./SearchWidget.module.scss";

export function SearchWidget() {
  return (
    <div className={styles.searchWidget}>
      <header className={styles.searchHeader}>Find a Dog</header>
      <SearchBox />
      <Results />
    </div>
  );
}
