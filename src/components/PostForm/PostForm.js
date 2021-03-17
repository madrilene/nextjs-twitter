import styles from "./PostForm.module.scss";

const PostForm = () => {
  return (
    <form action="">
      <textarea className={styles.formContent} name="" id=""></textarea>
      <button className={styles.formButton}>Neuer Post!</button>
    </form>
  );
};

export default PostForm;
