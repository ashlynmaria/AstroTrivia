import { quizzes } from "../constants";
import styles, { layout } from "../style";
import CustomButton from "./CustomButton";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== quizzes.length - 1 ? "mb-6" : "mb-0"} quiz-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="quizzes" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        The Ultimate Brain Workout: <br className="sm:block hidden" /> Ready, Set, Learn!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      With our comprehensive range of quizzes, you can dive into your studies, reinforce what you know, and discover what you need to focus on. Put your knowledge to the test, get instant feedback, and keep your learning on track. Our quizzes are more than just questions; they're stepping stones to academic achievement.
      </p>

      <CustomButton styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {quizzes.map((quiz, index) => (
        <FeatureCard key={quiz.id} {...quiz} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
