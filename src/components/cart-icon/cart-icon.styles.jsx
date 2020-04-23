import styled from "styled-components";
import {ReactComponent as CartImage} from '../../assets/shopping-bag.svg';

const CartIcon = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ShoppingIcon = styled(CartImage)`
    width: 24px;
    height: 24px;
`;

const IconCount = styled.div`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

export const Styled = {
    CartIcon,
    ShoppingIcon,
    IconCount
};