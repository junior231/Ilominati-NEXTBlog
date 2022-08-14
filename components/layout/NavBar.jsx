import styles from "./navbar.module.css";
import Logo from "./Logo";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          {" "}
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
