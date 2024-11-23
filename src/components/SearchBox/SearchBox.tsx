import { useState } from "react";
import styles from "./SearchBox.module.scss";
import { Results } from "../../components/Results/Results";
import { API_ENDPOINT } from "../../constants";
import { Image } from "../Image/Image";

interface searchBoxInput {
  placeholder: string;
  dogBreedData: string[];
}

interface HandleInputChange {
  target: HTMLInputElement;
}

export function SearchBox({ placeholder, dogBreedData }: searchBoxInput) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[] | []>([]);
  const [dogBreedImage, setDogBreedImage] = useState("");

  const handleInputChange = (event: HandleInputChange) => {
    const value = event.target.value;
    let possibleValues: string[] = dogBreedData;

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

  const getDogBreedImage = async (breed: string) => {
    const url = `${API_ENDPOINT}breed/${breed}/images/random`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setDogBreedImage(json.message);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Unknown error.";
      return {
        message,
      };
    }
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchInput}>
        <label htmlFor="dog-search">Search by dog breed</label>
        <input
          id="dog-search"
          className={styles.search}
          placeholder={placeholder}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        {suggestions.length > 0 && (
          <Results
            suggestions={suggestions}
            getDogBreedImage={(e) => {
              // reset suggestions to hide search results when clicking on a name
              setSuggestions([]);
              getDogBreedImage(e);
            }}
          />
        )}
      </div>
      {dogBreedImage ? <Image src={dogBreedImage} /> : null}
    </div>
  );
}
