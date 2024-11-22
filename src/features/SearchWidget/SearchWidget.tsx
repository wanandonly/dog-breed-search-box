import { Results } from "../../components/Results/Results";
import styles from "./SearchWidget.module.scss";

export function SearchWidget() {
  return (
    <div>
      <header className={styles.searchHeader}>Dog Breed Search Box</header>
      <Results />
    </div>
  );
}
