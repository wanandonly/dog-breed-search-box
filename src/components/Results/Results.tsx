import { useState } from "react";
import styles from "./Results.module.scss";
import { API_ENDPOINT } from "../../constants";
import { Image } from "../Image/Image";

interface Suggestions {
  suggestions: string[];
}

export function Results({ suggestions }: Suggestions) {
  const [dogBreedImage, setDogBreedImage] = useState("");

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
    <>
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
      {dogBreedImage ? <Image src={dogBreedImage} /> : null}
    </>
  );
}
