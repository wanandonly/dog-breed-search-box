import { useState } from "react";
import styles from "./SearchBox.module.scss";
import { Results } from "../../components/Results/Results";
import { API_ENDPOINT } from "../../constants";
import { Image } from "../Image/Image";
import { filterPossibleValues } from "../../utils/filter/filter";

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

  // Handle the input change here with the auto suggestion functionality
  const handleInputChange = (event: HandleInputChange) => {
    const value = event.target.value;
    setInputValue(value);

    // if the entered input is greater than 1 we show possible selections
    if (value.length > 1) {
      const filteredSuggestions = filterPossibleValues(dogBreedData, value);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Make call to get a random dog breed image if the passed down breed matches
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
        {/* Results component will only when the suggestions length is greater than 0 */}
        {suggestions.length > 0 && (
          <Results
            suggestions={suggestions}
            getDogBreedImage={(e) => {
              // reset suggestions to hide search results when clicking on a name and make call to get dog image
              setSuggestions([]);
              getDogBreedImage(e);
            }}
          />
        )}
      </div>
      {/* If dogBreedImage state is  set then we display the random image chosen here */}
      {dogBreedImage ? <Image src={dogBreedImage} /> : null}
    </div>
  );
}
