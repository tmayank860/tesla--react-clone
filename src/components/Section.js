import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import DownArrowSVG from '../assets/down-arrow.svg'
const Section = ({
  title,
  description,
  backgroundImg,
  leftButtonText,
  rightButtonText,
}) => {
  return (
    <Wrap backgroundImg={backgroundImg}>
       <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p> {description} </p>
      </ItemText>
      </Fade>
      <Fade bottom>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftButtonText}</LeftButton>
         { rightButtonText && <RightButton>{rightButtonText}</RightButton> }
        </ButtonGroup>
        <DownArrow src={DownArrowSVG}/>
      </Buttons>
      </Fade>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
  background-image: ${props => `url(${props.backgroundImg})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 786px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;
const DownArrow = styled.img`
  height: 40px;
  animation: animationDown infinite 1.5s;
  overflow-x: hidden;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
