import styles from "./Body.module.css";  // styles object 
import bannerImage from "../../assets/images/banner-puppies.jpg";
import puppyOne from "../../assets/images/puppy-1.jpg";
import puppyTwo from "../../assets/images/puppy-2.jpg";
import puppyThree from "../../assets/images/puppy-3.jpg";
import puppyFour from "../../assets/images/puppy-4.jpg";

function Body() {
  return (
    <main>
      {/* Section One - Banner */}
      <section>
        <div className={styles.banner}>
          <img src={bannerImage} alt="puppy image does not exist" />
        </div>
      </section>

      {/* Section Two - Three Puppies */}
      <section className={`${styles.threePuppies} ${styles.commonPuppies}`}>
        <div className={styles.puppyone}>
          <img src={puppyOne} alt="puppy image does not exist" />
        </div>

        <div className={styles.missingPuppies}>
          <p>Puppy missing here!!</p>
        </div>

        <div className={styles.puppyTwo}>
          <img src={puppyTwo} alt="puppy image does not exist" />
        </div>
      </section>

      {/* Section Three - More Puppies */}
      <section className={styles.morePuppies}>
        <div>
          <h2>More puppies</h2>
        </div>
      </section>

      {/* Section Four - Two More Puppies */}
      <section className={`${styles.twoMorePuppies} ${styles.commonPuppies}`}>
        <div className={styles.puppyThree}>
          <img src={puppyThree} alt="puppy image does not exist" />
        </div>

        <div className={styles.puppyFour}>
          <img src={puppyFour} alt="puppy image does not exist" />
        </div>
      </section>
    </main>
  );
}

export default Body;
