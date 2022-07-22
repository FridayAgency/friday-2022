import Image from 'next/image';
import Link from 'next/link';

interface ImageLinkProps {
  imageSrc: string;
  linkUrl: string;
  imageAlt?: string;
  externalLink?: boolean;
  objectFit: 'contain' | 'cover';
  priority?: boolean;
  screenReaderText?: string;
}

const ImageLink: React.FC<ImageLinkProps> = ({
  imageSrc,
  linkUrl,
  imageAlt,
  externalLink = false,
  objectFit,
  priority = false,
  screenReaderText,
}) => {
  return externalLink ? (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <Image
        src={imageSrc}
        layout="fill"
        alt={imageAlt}
        objectFit={objectFit}
        priority={priority}
        sizes="90vw"
      />
      {screenReaderText && <span className="visuallyhidden">{screenReaderText}</span>}
    </a>
  ) : (
    <Link href={linkUrl} prefetch={false}>
      <a>
        <Image
          src={imageSrc}
          layout="fill"
          alt={imageAlt}
          objectFit={objectFit}
          priority={priority}
        />
        {screenReaderText && <span className="visuallyhidden">{screenReaderText}</span>}
      </a>
    </Link>
  );
};

export default ImageLink;
