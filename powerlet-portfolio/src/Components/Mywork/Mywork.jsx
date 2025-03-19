import React from "react";
import "./MyWork.css"; 
import project1 from "../../assets/project_1.svg";
import project2 from "../../assets/project_2.svg";
import project3 from "../../assets/project_3.svg";
import project4 from "../../assets/project_4.svg";
import project5 from "../../assets/project_5.svg";
import project6 from "../../assets/project_6.svg";
import arrowIcon from "../../assets/arrow_icon.svg";

const workImages = [project1, project2, project3, project4, project5, project6];

const MyWork = () => {
  return (
    <section className="mywork" id="mywork">
      <div className="mywork-title">
        <h1>My latest <span>work</span></h1>
      </div>
      <div className="work-container">
        {workImages.map((src, index) => (
          <img key={index} src={src} alt={`Work ${index + 1}`} />
        ))}
      </div>
      <div className="work-showmore">
        <p>show more</p>
        <img src={arrowIcon} alt="Show more arrow" />
      </div>
    </section>
  );
};

export default MyWork;
