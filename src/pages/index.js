import { useState, useEffect } from "react";
import Head from "next/head";

import { useAuth } from "../hooks/useAuth";
import { getAllPosts, createPost } from "../lib/posts";

import Bio from "../components/Bio";
import Post from "../components/Post";
import PostForm from "../components/PostForm";

import styles from "../styles/Home.module.scss";

export default function Home({ posts: defaultPosts }) {
  const [posts, updatePosts] = useState(defaultPosts);

  const postsSorted = posts.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  const { user, logIn, logOut } = useAuth();

  async function handleOnSubmit(data, e) {
    e.preventDefault();

    await createPost(data);

    const posts = await getAllPosts();
    updatePosts(posts);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!user && (
        <p>
          <button className={styles.loginButton} onClick={logIn}>
            Log In
          </button>
        </p>
      )}

      {user && (
        <p>
          <button className={styles.loginButton} onClick={logOut}>
            Log Out
          </button>
        </p>
      )}

      <main className={styles.main}>
        <Bio
          headshot="https://pbs.twimg.com/profile_images/1303644762067664901/iHKD1qSG_400x400.jpg"
          name="Lene Saile"
          tagline="Desarrolladora web en Madrid"
          role="Más sobre mi en www.lenesaile.com"
        />
        <ul className={styles.posts}>
          {postsSorted.map((post) => {
            const { content, id, date } = post;
            return (
              <li key={id}>
                <Post
                  content={content}
                  date={new Intl.DateTimeFormat("en-US", {
                    dateStyle: "short",
                    timeStyle: "short",
                  }).format(new Date(date))}
                />
              </li>
            );
          })}
        </ul>

        {user && <PostForm onSubmit={handleOnSubmit} />}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
