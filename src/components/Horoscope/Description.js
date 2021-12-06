import Card from "../UI/Card";
import classes from "./Content.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
const Description = (props) => {
  return (
    <Card className={classes.content}>
      {props.isLoading && <LoadingSpinner />}
      {!props.isLoading && props.error && <p>{props.error.message}</p>}
      {!props.isLoading && !props.error && <p>{props.description}</p>}
    </Card>
  );
};

export default Description;
