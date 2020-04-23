import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const Styled = {}

Styled.Image = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`;

Styled.AddToCartButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
`;

Styled.Name = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

Styled.Price = styled.span`
    width: 10%;
`;

Styled.CollectionItemFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

Styled.CollectionItem = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  
  &:hover {
    ${Styled.Image} {
      opacity: 0.8;
    }

    ${Styled.AddToCartButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`;