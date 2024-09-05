"use client"

import { useState } from "react";
import styles from '@/styles/components/service.module.scss'


const NavComponent = () => {
  const [activeSection, setActiveSection] = useState("Services");

  const handleClick = (section:any) => {
    setActiveSection(section);
  };

  const renderCards = () => {
    switch (activeSection) {
      case "Services":
        return ["Card 1", "Card 2", "Card 3", "Card 4"];
      case "Products":
        return ["Card A", "Card B", "Card C", "Card D"];
      case "Features":
        return ["Card X", "Card Y", "Card Z", "Card W"];
      default:
        return [];
    }
  };

  return (
    <div>
      <div  className={styles.dicovertext}>
      Discover Our Services
    </div>
    <nav className={styles.nav}>
  <div className={styles.navWrapper}>
    <ul className={styles.serviceul}>
      <li onClick={() => handleClick("Services")}>Services</li>
      <li onClick={() => handleClick("Products")}>Products</li>
      <li onClick={() => handleClick("Features")}>Features</li>
    </ul>
  </div>
</nav>

      

      <div className={styles.cardscontainer}>
        {renderCards().map((card, index) => (
          <div key={index} className={styles.card}>
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavComponent;
