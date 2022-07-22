import Link from 'next/link';
import type { Project, Post } from '../../types/graphql';
import Image from 'next/image';

interface ProjectLinkProps {
  project: Project | Post;
  projectDetails: any;
  type?: 'post' | 'project';
  subTitle?: 'Next' | 'Previous' | string;
}

import styles from './ProjectLink.module.scss';

export const ProjectLink = ({
  project,
  projectDetails,
  type = 'project',
  subTitle,
}: ProjectLinkProps): JSX.Element => {
  return (
    <Link href={project?.uri} prefetch={false}>
      <a className={styles.link}>
        {projectDetails && (
          <div className={styles.image}>
            <Image
              src={
                type === 'project'
                  ? projectDetails?.headerImage?.sourceUrl
                  : projectDetails?.featuredImage?.node?.sourceUrl
              }
              layout="fill"
              alt={
                type === 'project'
                  ? projectDetails?.headerImage?.altText
                  : projectDetails?.featuredImage?.node?.altText
              }
              objectFit="cover"
            />
            <div className={styles.overlay}>
              <p className={styles.subtitle}>{subTitle}</p>
              <h3>{project?.title}</h3>
            </div>
          </div>
        )}
      </a>
    </Link>
  );
};

export default ProjectLink;
