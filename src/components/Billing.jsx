import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import '../index.css'
const Billing = () => (
  
  <section id="dashboard" className={layout.sectionReverse}>

    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5] rounded-lg" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Unlock Your Potential <br className="sm:block hidden" />  Every Quiz!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Dive into a comprehensive learning experience that adapts to your pace. Master subjects, track progress, and achieve your educational goals.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
