import { useState } from "react";
import { Results } from "../../components/Results/Results";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import styles from "./SearchWidget.module.scss";

interface HandleInputChange {
  target: HTMLInputElement;
}

export function SearchWidget() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[] | []>([]);

  const handleInputChange = (event: HandleInputChange) => {
    const value = event.target.value;
    let possibleValues: string[] = ["Great Dane"];

    setInputValue(value);
    if (value.length > 1) {
      const filteredSuggestions = possibleValues?.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className={styles.searchWidget}>
      <header className={styles.searchHeader}>Find a Dog</header>
      <SearchBox
        inputValue={inputValue}
        placeholder="Great Dane, Dalmatian, Chihuahua"
        handleChange={handleInputChange}
      />
      {suggestions.length > 0 && <Results suggestions={suggestions} />}
    </div>
  );
}
