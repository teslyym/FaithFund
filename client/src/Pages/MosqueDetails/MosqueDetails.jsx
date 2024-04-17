import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import buj from "../../assets/buj.svg";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import { Link } from "react-router-dom";
import CustomButtons from "../../Components/buttons/CustomButtons";

const MosqueDetails = () => {
  return (
    <div>
      <Header />
      <div className="pt-[8%] px-[7vw] ">
        <h3 className="w-[774px]">Ar-Rasheed Mosque, Yaba, Lagos</h3>
        <h1 className="font-normal text-base pt-5 leading-6">
          Welcome to the serene sanctuary of Ar-Rasheed Mosque, nestled in the
          heart of Yaba, Lagos. With its awe-inspiring architecture and rich
          historical significance, this sacred space has been a pillar of
          spiritual enlightenment for the local Islamic community.
        </h1>
        <h1 className="font-normal text-base pt-5 leading-6">
          Established in the early 20th century, Ar-Rasheed Mosque stands as a
          testament to the enduring legacy of faith and devotion in Lagos. Its
          stunning blend of traditional Islamic design and modern elements
          creates a harmonious ambiance, inviting worshippers to experience a
          profound connection with the Divine.
        </h1>
        <h1 className="font-normal text-base pt-5 leading-6">
          Over the years, Ar-Rasheed Mosque has played a pivotal role in
          fostering unity, education, and charitable endeavors within the
          community. However, the passage of time has taken its toll on the
          mosque's structure, necessitating vital restoration efforts.
        </h1>
        <h1 className="font-normal text-base pt-5 leading-6">
          Now, we embark on a transformative journey to breathe new life into
          Ar-Rasheed Mosque. Through your generous contributions, we seek to
          revive its splendor and preserve its historical significance for
          generations to come. The restoration project aims to address crucial
          repairs, upgrade facilities, and enhance the overall experience for
          worshippers.
        </h1>
        <h1 className="font-normal text-base pt-5 leading-6">
          By supporting Ar-Rasheed Mosque's restoration, you contribute to the
          preservation of our cherished heritage and the continuity of a sacred
          space that has been a source of inspiration and spiritual nourishment
          for countless souls.
        </h1>
        <h1 className="font-normal text-base pt-5 leading-6">
          Join us in this noble cause as we unite to rebuild Ar-Rasheed Mosque,
          renew its legacy, and create a brighter future for the Yaba community.
          Together, we can illuminate the path of faith, compassion, and unity,
          ensuring Ar-Rasheed Mosque remains a beacon of hope and enlightenment
          for all.
        </h1>
      </div>
      <div>
        <img src={buj} alt="" />
      </div>
      <div className="pt-[2%] px-[7vw] ">
        <h3>Current State of the Masjid</h3>
        <h1>
          Currently, Ar-Rasheed Mosque in Yaba, Lagos, bears the marks of its
          long-standing service to the community. While it continues to stand as
          a symbol of faith and unity, the passage of time has taken its toll on
          the mosque's structure, leaving behind visible signs of wear and tear.
          The masjid's exterior facade showcases cracks and weathered areas,
          reflecting the need for urgent repairs. The roofing, once pristine,
          now exhibits signs of deterioration, with leaks becoming a common
          concern during rainy seasons. Inside, the flooring shows signs of wear
          from countless prayers, necessitating restoration to ensure a safe and
          comfortable space for worshippers. Additionally, some sections of the
          mosque remain incomplete, restricting its full potential as a
          spiritual and community center. The lack of proper finishing in
          certain areas has hampered the mosque's ability to offer the
          comprehensive services and facilities the community deserves. Our
          restoration plan addresses these pressing needs with a detailed
          approach.
        </h1>
      </div>
      <div className="flex gap-5 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div className="pt-[8%] px-[7vw] flex w-[1272px] ">
        <div>
          <h3>Transparency and Trust</h3>
          <h1>
            At Ibni Masjidan Lillah, we firmly believe that transparency is the
            cornerstone of building trust with our valued donors. We want to
            assure you that your contributions towards the restoration of
            Ar-Rasheed Mosque are handled with utmost care, accountability, and
            integrity.
          </h1>
        </div>
        <div>
          <h3>Verification Process</h3>
          <h1>
            Restoring a mosque is not just a responsibility; it's a sacred duty.
            Our team works tirelessly to ensure the legitimacy and authenticity
            of the restoration project. We collaborate closely with local
            authorities, esteemed scholars, and renowned experts in Islamic
            architecture to verify every aspect of the restoration plan.
          </h1>
        </div>
      </div>
      <Link className="flex justify-center pt-10" to={"/donate"}>
        <CustomButtons text={"Donate now"} button_width={"131px"} />
      </Link>
      <Footer />
    </div>
  );
};

export default MosqueDetails;
