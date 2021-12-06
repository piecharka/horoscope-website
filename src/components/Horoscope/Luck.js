import Card from "../UI/Card";
import classes from "./Content.module.css";
const Luck = (props) => {
  return (
    <Card className={classes.content}>
      <p>{`Your lucky number of this day is ${props.lucky_number},`}</p>
      <p>{`also something lucky might happen to you at ${props.lucky_time} be careful!`}</p>
    </Card>
  );
};

export default Luck;
