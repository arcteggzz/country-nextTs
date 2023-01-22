import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Country</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.header}>
            <input
              type="text"
              placeholder="Search for a country..."
              className={styles.searchBar}
            />
            <select name="continents" id="continents">
              <option value="" disabled selected hidden>
                Filter by Region
              </option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </section>
          <section className={styles.countryView}>
            <div className={styles.card}>
              <Image
                priority
                src="/images/profile.jpg"
                className={styles.image}
                height={144}
                width={144}
                alt="country"
              />
              <div className={styles.textArea}>
                <h2>Germany</h2>
                <p>
                  <span>Population:</span> 65803t430
                </p>
                <p>
                  <span>Region:</span>
                </p>
                <p>
                  <span>Capital:</span>
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                priority
                src="/images/profile.jpg"
                className={styles.image}
                height={144}
                width={144}
                alt="country"
              />
              <div className={styles.textArea}>
                <h2>Germany</h2>
                <p>
                  <span>Population:</span> 65803t430
                </p>
                <p>
                  <span>Region:</span>
                </p>
                <p>
                  <span>Capital:</span>
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                priority
                src="/images/profile.jpg"
                className={styles.image}
                height={144}
                width={144}
                alt="country"
              />
              <div className={styles.textArea}>
                <h2>Germany</h2>
                <p>
                  <span>Population:</span> 65803t430
                </p>
                <p>
                  <span>Region:</span>
                </p>
                <p>
                  <span>Capital:</span>
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                priority
                src="/images/profile.jpg"
                className={styles.image}
                height={144}
                width={144}
                alt="country"
              />
              <div className={styles.textArea}>
                <h2>Germany</h2>
                <p>
                  <span>Population:</span> 65803t430
                </p>
                <p>
                  <span>Region:</span>
                </p>
                <p>
                  <span>Capital:</span>
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                priority
                src="/images/profile.jpg"
                className={styles.image}
                height={144}
                width={144}
                alt="country"
              />
              <div className={styles.textArea}>
                <h2>Germany</h2>
                <p>
                  <span>Population:</span> 65803t430
                </p>
                <p>
                  <span>Region:</span>
                </p>
                <p>
                  <span>Capital:</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
