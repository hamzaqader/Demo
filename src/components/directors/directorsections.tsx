"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import styles from '@/styles/components/boarddirectors.module.scss';


function DirectorSections() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };

    return (
        <>
            <div className={styles.mainfile}>
                <div>
                    Our directors
                </div>
                <div>
                    Meet Our Esteemed Board Of Directors
                </div>
            </div>
            <div className={styles.sliderContainer}>
                <Slider {...settings}>
                    <div>
                        <Image src={'/assets/download.png'} alt="Director 1" width={300} height={200} className={styles.slideImage} />
                    </div>
                    <div>
                        <Image src={'/assets/download.png'} alt="Director 2" width={300} height={200} className={styles.slideImage} />
                    </div>
                    <div>
                        <Image src={'/assets/download.png'} alt="Director 3" width={300} height={200} className={styles.slideImage} />
                    </div>
                    <div>
                        <Image src={'/assets/download.png'} alt="Director 4" width={300} height={200} className={styles.slideImage} />
                    </div>
                    <div>
                        <Image src={'/assets/download.png'} alt="Director 5" width={300} height={200} className={styles.slideImage} />
                    </div>
                    <div>
                        <Image src={'/assets/download.png'} alt="Director 6" width={300} height={200} className={styles.slideImage} />
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default DirectorSections;
