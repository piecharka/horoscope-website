import { useHistory } from "react-router-dom";
import { useRef, useContext } from "react";
import HoroscopeContext from "../../store/horoscope-ctx";
import Card from "../UI/Card";
import classes from "./BirthdayInput.module.css";
const BirthdayInput = () => {
  const history = useHistory();
  const ctx = useContext(HoroscopeContext);
  const birthdateInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredDate = new Date(birthdateInputRef.current.value);

    ctx.setSign(enteredDate);
    history.replace("/horoscope/today/description");
  };

  return (
    <div className={classes.block}>
      <Card className={classes.form}>
        <form onSubmit={submitHandler}>
          <label>Input your birthday</label>
          <input type="date" ref={birthdateInputRef} required></input>
          <button className={classes.btn}>Submit</button>
        </form>
      </Card>
    </div>
  );
};

export default BirthdayInput;
