import styles from "./Image.module.scss";

interface ImageInterface {
  src: string;
}

export function Image({ src }: ImageInterface) {
  return (
    <div className={styles.image}>
      <img className="image" src={src} alt="Dog" />
    </div>
  );
}
