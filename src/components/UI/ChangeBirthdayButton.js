import { Link } from "react-router-dom";
import classes from "./ChangeBirthdayButton.module.css";
const ChangeBirthdayButton = () => {
  return (
    <div className={classes.btn}>
      <Link to="/home">
        <span>Set Birthdate</span>
      </Link>
    </div>
  );
};

export default ChangeBirthdayButton;
