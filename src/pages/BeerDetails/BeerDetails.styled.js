import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`;

export const BackLink = styled(Link)`
  display: block;
  margin-bottom: 20px;
  color: #8bc34a;
  font-size: 20px;
`;

export const BearImg = styled.img`
  height: 500px;
  object-fit: contain;
  margin-bottom: 20px;
`;
