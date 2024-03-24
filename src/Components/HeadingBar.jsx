import styles from "./headingbar.module.css";
import RightSide from "./rightSideHeadingBar";
const HeadingBar = () => {
  return (
    <>
      <section className={styles.headingbar}>
        <div className={styles.firstBlock}>
          <h4 className={styles.h4Tag}>
            <strong>Wedding Venues</strong>
          </h4>
          <p className={styles.para}>Showing Result</p>
        </div>
        <section className={styles.secondSection}>
          <RightSide />
        </section>
      </section>
    </>
  );
};
export default HeadingBar;
