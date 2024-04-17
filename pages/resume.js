import styles from "./blog.module.css";

export default function Resume() {
  return (
    <div className={styles.pdf}>
      <iframe
        src="https://drive.google.com/file/d/1YpdrJY1r9NcY4tnkDbElfHzKy5DVcmrj/preview"
        width="100%"
        height="960"
        allow="autoplay"
      ></iframe>
    </div>
  );
}
