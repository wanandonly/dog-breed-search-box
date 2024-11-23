import styles from "./Results.module.scss";

interface Suggestions {
  suggestions: string[];
  getDogBreedImage: (e: string) => void;
}

export function Results({ suggestions, getDogBreedImage }: Suggestions) {
  return (
    <ul className={styles.results}>
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          onClick={() => {
            getDogBreedImage(suggestion);
          }}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
}
