import "./Card.css";
import { IoMdCheckbox } from "react-icons/io";
import NumberIcon from "../NumberIcon/NumberIcon";
function Card({ image,  text, id, isActive }) {
  const active = {
    border: "2px solid #1DAA51",
  };

  return (
    <div style={isActive ? active : {}} className="container ">
      {image && (
        <div className="sub-container">
          <img src={image} alt="" />
        </div>
      )}
      {text && <p className="card-para-height">{text}</p>}

      {isActive === true ? (
        <IoMdCheckbox className="icon" size={30} color="rgba(29, 170, 81, 1)" />
      ) : (
        <NumberIcon num={id + 1} />
      )}
    </div>
  );
}

export default Card;
