import Head from "next/head";

import Post from "../components/Post";
import PostForm from "../components/PostForm";
import Bio from "../components/Bio";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Meine Posts!</h1>

        <Bio
          headshot="https://pbs.twimg.com/profile_images/1303644762067664901/iHKD1qSG_400x400.jpg"
          name="Lene Saile"
          tagline="Desarrolladora web en Madrid"
          role="Más sobre mi en www.lenesaile.com"
        />

        <ul className={styles.posts}>
          <li>
            <Post content="Hex ich bin ein neuer Post" date="17.03.2021" />
          </li>

          <li>
            <Post content="Wir sind andere Posts" date="15.03.2021" />
          </li>

          <li>
            <Post content="Wir sind andere Posts" date="15.03.2021" />
          </li>

          <li>
            <Post
              content="Ich arbeite an Figma und mache eine neue Webseite die all meine
              Tweets zeigt und noch ein paar Wörter damit s genug sind"
              date="14.03.2021"
            />
          </li>
        </ul>

        <PostForm />
      </main>
    </div>
  );
}
