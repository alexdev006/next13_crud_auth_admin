import React from 'react';
import styles from './page.module.css';
import Image from 'next/image.js';
import Link from 'next/link.js';

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            alt=""
            src="/apps.jpg"
            width={400}
            height={250}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
