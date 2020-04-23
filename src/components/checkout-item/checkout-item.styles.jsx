import styled from "styled-components";

const CheckoutItem = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Text = styled.span`
  width: 23%;
`;

const Quantity = styled(Text)`
    display: flex;

    div {
      cursor: pointer;
    }

    span {
      margin: 0 10px;
    }
`;

const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;

export const Styled = {
    CheckoutItem,
    ImageContainer,
    Text,
    Quantity,
    RemoveButton
};