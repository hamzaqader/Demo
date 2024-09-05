import React from 'react'
import styles from '@/styles/components/banner.module.scss'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className={styles.bannerMain}>
        <Image
            src={'/assets/banner.jpeg'}
            alt="personal portfolio image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={styles.BannerText}>
        Protect your presence  Secure Future
        </div>
        <div className={styles.Maintext}>
        <div className={styles.BannerText2}>
        this is Dummy Text 
        </div>
        <div className={styles.BannerText2}>
        this is  Dummy Text 2forDummy Text 2for 
        </div>
        </div>
        <div>
          <button 
          
          className={styles.button}>
              <Image
            src={'/assets/icon.png'}
            alt="personal"
            width={20}
            height={20}
        />
            
            
            Explore</button>
        </div>
    </div>
  )
}
