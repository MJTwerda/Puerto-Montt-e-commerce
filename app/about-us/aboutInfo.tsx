import React from "react";
import styles from './about.module.css';
import { contactInfo } from '../../constants/contactInfo';
import Image from "next/image";

const NosostrosInfo = () => {
  return (
    <section className={styles.contactContainer}>
      {contactInfo.map(infoSection => (
        <section key={infoSection.slug}>
          <h3>{infoSection.title}</h3>
          {infoSection.infoList.map(item => (
            <div className={styles.socialMediaContainer}>
              {item.icon && (
                <Image
                  alt={item.info}
                  src={`/${item.icon}`}
                  width={20}
                  height={20}
                  className={styles.socialMediaIcon}
                />
              )}
              <p key={item.slug}>{item.info}</p>
            </div>
          ))}
        </section>
      ))}
    </section>
  )
};

export default NosostrosInfo;