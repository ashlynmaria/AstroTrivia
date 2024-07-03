import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       With Custom Quizzes <br className="sm:block hidden" /> That Adapt To You.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      With us, you're not just preparing for exams; you're building a solid foundation for lifelong knowledge. Let's make learning an adventure you look forward to every day.

      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      {/* <img src={card} alt="billing" className="w-[100%] h-[100%]" /> */}
    </div>
  </section>
);

export default CardDeal;
