import { useEffect, useState } from "react";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import styles from "./SearchWidget.module.scss";
import { API_ENDPOINT } from "../../constants";

export function SearchWidget() {
  const [dogBreedData, setDogBreedData] = useState<string[] | []>([]);

  // Make call to get all dog breeds and we pass this down to SearchBox component
  const getDogBreedData = async () => {
    const url = `${API_ENDPOINT}breeds/list/all`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setDogBreedData(Object.keys(json.message));
    } catch (e) {
      const message = e instanceof Error ? e.message : "Unknown error.";
      return {
        message,
      };
    }
  };

  useEffect(() => {
    getDogBreedData();
  }, []);

  return (
    <div className={styles.searchWidget}>
      <header className={styles.searchHeader}>Find a Dog</header>
      <SearchBox
        placeholder="Great Dane, Dalmatian, Chihuahua"
        dogBreedData={dogBreedData}
      />
    </div>
  );
}
