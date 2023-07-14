import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardBox = styled.li`
  width: 380px;
  height: 460px;
  padding: 28px 0 36px 0;
  background: #8080801c;

  border: 1px solid #00000033;
  border-radius: 20px;

  &.active {
    border: 2px solid #8bc34a;
  }
`;
export const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export const ImgBox = styled.div`
  width: 200px;
  padding: 10px;
  margin-bottom: 20px;

  background-color: #cddc393d;

  border-radius: 50%;
  border-left-style: dotted;
  border-top-right-radius: inherit;
  border-bottom-left-radius: inherit;
`;
export const CardImg = styled.img`
  height: 300px;
  margin: 0 auto;
`;
