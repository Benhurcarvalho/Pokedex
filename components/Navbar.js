import Link from 'next/link'
import Image from 'next/image'

import styles from '../src/styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <Image src="/images/pokeball.png" width="30" height="30" alt="pokeball" />
            <h1>Pokedex</h1>
        </div>
        <ul className={styles.link_items}>
            <li>
                <Link legacyBehavior href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link legacyBehavior href="/about">
                    <a>About</a>
                </Link>
            </li>
        </ul>     
    </nav>
  )
}
