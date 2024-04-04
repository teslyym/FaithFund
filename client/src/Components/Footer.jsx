import React from "react";
import twitter from "../assets/twitter.png";
import facebook from "../assets/faceb.png";
import insta from "../assets/insta.png";
import linked from "../assets/linked.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#E4F6F2] px-[7vw] py-12 flex flex-col gap-9">
        <div className="font-bold text-4xl">
          <p>Join Our Newsletter Community</p>
        </div>

        <div>
          <div className="flex justify-center items-center gap-4 text-center content-center">
            <h1>Subscribe to our newsletter</h1>
            <div className="w-[19px] h-1 bg-[#017358] rounded"></div>
            <div className="flex border border-[#017358] rounded-2xl w-[36vw] overflow-hidden">
              <input
                type="input email"
                placeholder="input email"
                className="bg-white w-full pl-4 outline-none border-[#80B9AB]"
              />
              <p className=" py-2 px-4 bg-[#017358] text-white ">Subscribe</p>
            </div>
          </div>
          <div className=" px-4 py-10 color text-[13.5px] text-[#001712]">
            <h1>
              Interested in knowing how the donations are being used, subscribe
              to our newsletter. You also gain access to exclusive content,
              updates, and valuable insights. Here's why it's worth becoming
              part of our newsletter community: <br /><span className="text-[#E4F6F2]">.</span> <span>1.</span> Stay
              Informed: Receive regular updates on the progress of mosque
              restoration projects, success stories, and the impact of your
              generous contributions. You'll be the first to know about new
              initiatives, upcoming events, and opportunities to get involved.{" "}
              <br /><span className="text-[#E4F6F2]">.</span> <span>2.</span> Inspiring Stories: Discover heartwarming
              success stories of restored mosques and the positive
              transformations they bring to communities. Experience the joy of
              witnessing lives being touched and the spirit of unity fostered
              through mosque revitalization. <br /> <span className="text-[#E4F6F2]">.</span><span>3.</span> Valuable
              Insights: Gain unique insights into the significance of mosques in
              Islamic communities, their historical and cultural importance, and
              the spiritual nourishment they provide. Deepen your understanding
              of our shared heritage and the power of faith. <br />
              <span className="text-[#E4F6F2]">.</span>4. Community Engagement: Be part of a vibrant
              community that shares a common passion for mosque restoration and
              community development. Connect with like-minded individuals,
              volunteers, and organizations who are dedicated to making a
              positive difference. <br /> <span className="text-[#E4F6F2]">.</span> <span>5.</span> Inspire Others: Your
              involvement in our newsletter community helps inspire others to
              join the cause, spreading awareness and encouraging greater
              support for mosque restoration. Together, we can create a powerful
              ripple effect of change and unity. <br/>Subscribe now to experience the
              full benefits of our newsletter community. Join us in restoring
              mosques, revitalizing communities, and forging a future of faith,
              compassion, and unity.
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-20 items-center px-[10vw] gap-8 text-center content-center bg-[#017358] text-white img">
        <div>
          <h1>@ IBM, 2023. All rights reserved</h1>
        </div>

        <div className="gap-4">
          <a>Ibni Masjidan Lillah</a>
          <a>Donate</a>
          <a>Projects</a>
          <a>Community</a>
          <a>Say Salam</a>
        </div>

        <div className="flex gap-4">
          <a>
            <img src={twitter} alt="" />
          </a>
          <a>
            <img src={insta} alt="" />
          </a>
          <a>
            <img src={facebook} alt="" />
          </a>
          <a>
            <img src={linked} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
