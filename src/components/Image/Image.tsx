interface ImageInterface {
  src: string;
}

export function Image({ src }: ImageInterface) {
  return <img src={src} alt="Dog" />;
}
