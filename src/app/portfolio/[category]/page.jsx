import React from 'react';
import styles from './page.module.css';
import Button from '@/app/components/button/Button.jsx';
import Image from 'next/image.js';

const Category = ({ params }) => {
  //console.log('params ici =>>>>', params);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>test</h1>
          <p>desc</p>
          <Button text="Voir plus" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} alt="" src="/apps.jpg" fill />
        </div>
      </div>
    </div>
  );
};

export default Category;
