import Card from "../UI/Card";

import classes from "./Content.module.css";
const Compatibility = (props) => {
  return (
    <Card className={classes.content}>
      <p>{props.compatibility}</p>
    </Card>
  );
};
export default Compatibility;
