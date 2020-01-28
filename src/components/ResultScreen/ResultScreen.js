import React from "react";
import styled from "styled-components";
import badges from "../../utils/badgeData";
import ProgressScore from "../GameScreen/ProgressScore";
import Button from "../Button";
import {
  Container,
  MessageBox,
  BadgeBox,
  BoxMessage,
  MessageImage
} from "../MasterCss";

const PageHeader = styled.h1`
  font-family: Freckle Face;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 79px;
  text-align: center;
  color: #ff8a00;
  -webkit-text-stroke: 2px black;
  text-transform: uppercase;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90vw;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
`;

const ResultScreen = props => {
  const [badgeGiven, setBadgeGiven] = React.useState(0);

  React.useEffect(() => {
    if (props.count >= 5 && props.count < 11) {
      setBadgeGiven(1);
    } else if (props.count >= 10 && props.count < 16) {
      setBadgeGiven(2);
    } else if (props.count >= 15) {
      setBadgeGiven(3);
    }
  }, [props.count, badgeGiven]);

  return (
    <Container>
      <PageHeader>nice one!</PageHeader>
      <ProgressScore count={props.count} />
      <BadgeBox>
        {" "}
        <MessageImage
          src={badges[badgeGiven].src}
          alt="An animal badge to say well done!"
        />
        <MessageBox>
          <BoxMessage>{badges[badgeGiven].message}</BoxMessage>
        </MessageBox>
      </BadgeBox>
      <ButtonContainer>
        <Button label="Play again">{props.label}</Button>
        <Button label="learn more">{props.label}</Button>
      </ButtonContainer>
    </Container>
  );
};

export default ResultScreen;
