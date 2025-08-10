import styles from './Footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© {new Date().getFullYear()} K — Crafted with passion and coffee ☕</p>
        <div className={styles.social}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer