import React from "react";
import { ReactComponent as Heart } from "../../assets/heart-lives.svg";
import { withRouter } from "react-router-dom";

const LivesScore = props => {
  const [livesArr, setLivesArr] = React.useState([1, 2, 3, 4]);

  React.useEffect(() => {
    const newLivesArr = livesArr.slice(0, -1);
    // pop mutates original array, slice returns a new one
    setLivesArr(newLivesArr);
  }, [props.badCount]);

  React.useEffect(() => {
    if (props.badCount === 3) {
      setTimeout(() => props.history.push("/results"), 1000);
    }
  }, [props.badCount]);

  return livesArr.map(() => {
    return [
        <Heart />
    ];
  });
};

export default withRouter(LivesScore);
