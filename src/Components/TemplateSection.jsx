import styles from "./template.module.css";
import LowerSection from "./loweSectionofCard";
const Template = ({ data }) => {
  return (
    <>
      <section className={styles.mainSection}>
        {data.map((value) => (
          <a className={styles.card} href="#">
            <img src={value.image} className={styles.cardImage} alt="..."></img>

            <LowerSection
              key={value.id}
              venue={value.venue}
              rating={value.rating}
              location={value.location}
              type={value.type}
              veg={value.vegPrice}
              nonVeg={value.nonVegPrice}
            />
          </a>
        ))}
      </section>
    </>
  );
};
export default Template;
