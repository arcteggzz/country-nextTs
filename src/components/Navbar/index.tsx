import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

interface Props {}

function Navbar(props: Props) {
  const {} = props;

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <Link href="/" className={styles.homeLink}>
            Where in the world?
          </Link>
          <div className={styles.mode}>
            <p>Dark Mode</p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
