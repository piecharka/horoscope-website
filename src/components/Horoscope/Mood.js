import Card from "../UI/Card";
import classes from "./Content.module.css";
const Mood = (props) => {
  return <Card className={classes.content}>{props.mood}</Card>;
};

export default Mood;
