import React from "react";
import "./Question.css";
import QuestionImage from "../../Images/3_4.png";
import { IoMdCheckboxOutline } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
function Question() {
  return (
    <div className="main">
      <div className="image-container">
        <img src={QuestionImage} alt="" />
      </div>
      <div>
        <p className="main-heading">
          A small river named Duden flows by their place and supplies it with
          the country regalia is a paradisematic A small river named Duden flows
          by their place and supplies it with the country supplies its{" "}
        </p>
        <div className="question-tags ">
          <div className="question-tags-1">
            <IoMdCheckboxOutline size={20} color="rgba(118, 118, 126, 1)" />
            <p className="heading line">More than one options correct</p>
          </div>

          <div className="question-tags-1">
            <AiFillStar style={{paddingLeft: "12px"}} color="rgba(253, 216, 53, 1)" size={20} />
            <p className="heading">50 Points</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
