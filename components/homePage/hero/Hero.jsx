import styles from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/app/hero-img.jpg"
          alt="An image of Max"
          width={300}
          height={300}
        />
      </div>
      <h1>{`Hi, i'm Junior`}</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        or NextJS
      </p>
    </section>
  );
};

export default Hero;
