import styles from "./blog.module.css";

export default function Resume() {
  return (
    <div className={styles.pdf}>
      <iframe
        src="https://drive.google.com/file/d/1akyRhI4ILJBcEWI7Ls4PgJfSRFq0Zvxc/preview"
        width="100%"
        height="960"
        allow="autoplay"
      ></iframe>
    </div>
  );
}
