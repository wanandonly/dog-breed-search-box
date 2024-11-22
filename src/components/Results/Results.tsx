import styles from "./Results.module.scss";

interface Suggestions {
  suggestions: string[];
}

export function Results({ suggestions }: Suggestions) {
  return (
    <ul className={styles.results}>
      {suggestions.map((suggestion, index) => (
        <li key={index} onClick={() => {}}>
          {suggestion}
        </li>
      ))}
    </ul>
  );
}
