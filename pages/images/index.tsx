import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Images = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Images 
      </h1>
      <ul>
        <li>
          <Link href="/images/0">
            <a>image 0</a>
          </Link>
        </li>
        <li>
          <Link href="/images/1">
            <a>image 1</a>
          </Link>
        </li>
        <li>
          <Link href="/images/2">
            <a>image 2</a>
          </Link>
        </li>
      </ul>
    </main>
  
  </div>
)

export default  Images