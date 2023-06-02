import React from 'react';
import styles from './page.module.css';
import Image from 'next/image.js';

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>desc</p>
          <div className={styles.author}>
            <Image
              // src={data.img}
              src="/apps.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>test</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          {/* <Image src={data.img} alt="" fill={true} className={styles.image} /> */}
          <Image src="/apps.jpg" alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>desc</p>
      </div>
    </div>
  );
};

export default BlogPost;
