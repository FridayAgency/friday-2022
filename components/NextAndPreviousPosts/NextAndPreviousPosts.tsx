import styles from './NextAndPreviousPosts.module.scss';
import { Post } from '../../types/graphql';
import Link from 'next/link';
import Image from 'next/image';

interface NextAndPreviousPostsProps {
  nextPost: Post | null;
  prevPost: Post | null;
}

const NextAndPreviousPosts = ({ prevPost, nextPost }: NextAndPreviousPostsProps): JSX.Element => {
  return (
    <div className={styles['post-next-prev']}>
      {prevPost && (
        <Link href={`${prevPost?.uri}`} prefetch={false}>
          <a className={styles.prev} style={{ flexBasis: nextPost ? '50%' : '100%' }}>
            <div className={styles.image}>
              <Image
                src={prevPost?.featuredImage?.node?.sourceUrl}
                alt={prevPost?.featuredImage?.node?.altText}
                layout="fill"
                objectFit="cover"
              />
              <div className={styles.overlay}>
                <div className={styles.subtitle}>Previous Post</div>
                <div className={styles.title}>{prevPost?.title}</div>
              </div>
            </div>
          </a>
        </Link>
      )}
      {nextPost && (
        <Link href={`${nextPost?.uri}`} prefetch={false}>
          <a className={styles.next}>
            <div className={styles.image}>
              <Image
                src={nextPost?.featuredImage?.node?.sourceUrl}
                alt={nextPost?.featuredImage?.node?.altText}
                layout="fill"
                objectFit="cover"
              />
              <div className={styles.overlay}>
                <div className={styles.subtitle}>Next Post</div>
                <div className={styles.title}>{nextPost?.title}</div>
              </div>
            </div>
          </a>
        </Link>
      )}
    </div>
  );
};

export default NextAndPreviousPosts;
