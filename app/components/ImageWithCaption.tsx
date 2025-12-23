interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
  aspectRatio?: string; // e.g., "16/9", "4/3", "1/1", "3/2"
}

export default function ImageWithCaption({ src, alt, caption, aspectRatio = "4/3" }: ImageWithCaptionProps) {
  return (
    <figure className="inline-block my-4 mx-auto w-full">
      <div 
        className="w-full rounded-lg shadow-md overflow-hidden"
        style={{ aspectRatio: aspectRatio }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      <figcaption className="text-gray-500 dark:text-gray-400 text-sm italic mt-2 text-center">
        {caption}
      </figcaption>
    </figure>
  );
}

