import styles from "./blog.module.css";

export default function Resume() {
  return (
    <div className={styles.pdf}>
      <iframe
        src="https://drive.google.com/file/d/1zv7e5sc0IhnprVQf3oI6FAym-QmDi17l/preview"
        width="100%"
        height="960"
        allow="autoplay"
      ></iframe>
    </div>
  );
}
