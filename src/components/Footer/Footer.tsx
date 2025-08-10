
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© {new Date().getFullYear()} Keshav Arunesar — Crafted with passion and coffee ☕</p>
        <div className={styles.social}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img className="github" src="./images/github.png" alt="github" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <img className="twitter" src="./images/twitter.png" alt="twitter" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <img  className="{styles.linkedin}" src="./images/linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer