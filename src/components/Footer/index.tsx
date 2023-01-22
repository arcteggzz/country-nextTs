import React from "react";
import styles from "./Footer.module.scss";

interface Props {}

function Footer(props: Props) {
  const {} = props;
  const date = new Date().getFullYear();
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>{`oghenetegaEsedere.com ${date}`}</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
