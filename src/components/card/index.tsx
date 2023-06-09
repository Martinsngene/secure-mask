/** @format */

import Image from "next/image";
import React from "react";

import styles from "./styles.module.css";
import Logo from "../logo";
import { CardPropsI } from "../interface";

const Card = ({ isHome, cardBg, cardType, onClick }: CardPropsI) => {
  return (
    <div className={styles.container}>
      <Image
        src={cardBg}
        alt='Card template design'
        width={350}
        height={139}
        className='border border-transparent'
      />
      <div className={styles.card_details_group_one}>
        <p className={styles.card_name}>John Doe</p>
        <button onClick={onClick} className={styles.view_card_details}>
          <Image
            src='/settings.svg'
            alt='settings icon'
            width={32}
            height={32}
          />
        </button>
      </div>
      {!isHome && (
        <div className={styles.card_details_group_two}>
          <p className={styles.card_address}>
            8897b5dbc8541ed446a5e59ffa62f39f5894fb9cee169ba85b5cfa436ae5ac41
          </p>
        </div>
      )}

      <div className={styles.card_details_group_three}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.card_type}>
          <Image src={cardType} alt='type of card' width={60} height={15} />
        </div>
      </div>
    </div>
  );
};

export default Card;
