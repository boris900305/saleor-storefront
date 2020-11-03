import { media, styled } from "@styles";
import { css } from "styled-components";

const textProps = css`
  margin: 0 0 0.5rem 0;
  text-align: left;
`;

export const Wrapper = styled.div`
  background:white;
  padding: 0.5rem;
  text-align: center;
  max-height: 30rem;
  transition: 0.3s;

  :hover {
    /*background-color: ${props => props.theme.colors.hoverLightBackground};*/
    box-shadow: 0px 0px 5px #cacaca;
  }

  ${media.largeScreen`
    padding: 1.8rem;
  `}
`;

export const Title = styled.h4`
text-transform: none;
font-weight: normal;
margin-top: 1rem;
font-size: 0.85rem;
font-family: Nunito;
height: 58px;
color: #232f3e;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 4;
line-height: 0.95rem;
letter-spacing:-0.1px;
-webkit-box-orient: vertical;
  ${textProps}
`;

export const Price = styled.p`
  ${textProps}
`;

export const Image = styled.div`
  width: auto;
  height: auto;
  max-width: 100%;

  > img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 155px;
  }
`;

export const Price = styled.span`
    display: flex;
    font-family: 'Nunito';
    color: #F31F00;
`;

