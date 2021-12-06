import Card from "../UI/Card";
import classes from "./Content.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
import ChangeBirthdayButton from "../UI/ChangeBirthdayButton";
const Description = (props) => {
  return (
    <Card className={classes.content}>
      {!props.fetched && !props.isLoading && <ChangeBirthdayButton />}
      {!props.fetched && props.isLoading && <LoadingSpinner />}
      {props.fetched && !props.isLoading && props.error && (
        <p>{props.error.message}</p>
      )}
      {props.fetched && !props.isLoading && !props.error && (
        <p>{props.description}</p>
      )}
    </Card>
  );
};

export default Description;
