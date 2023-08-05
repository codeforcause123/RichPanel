import styled from "styled-components";
import { FaBars } from 'react-icons/fa';


import { NavLink as Link } from 'react-router-dom';

const Colors = {
    aqua: "#33cccc",
    grey: "#666",
    lightGrey: "#ccc",
    red: "#cc0000"
};
export const AppWrapper = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  margin: 20px;
  flex-direction: column;
`;

export const SubscriptionPlansWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const SubscriptionPlanCard = styled.div`
  margin: auto;
  padding: 10px;
  border-radius: 8px;
  border-top: 5px solid ${Colors.aqua};
  height: auto;
  box-shadow: 0 2px 2px 0 rgba(14, 30, 37, 0.32);
`;

export const SubscriptionPlanCardHeading = styled.h2`
  text-align: center;
  font-size: 1.65em;
  color: ${Colors.aqua};
  padding: 7px;
  text-transform: capitalize;
`;

export const SubscriptionPlanCardPrice = styled.h2`
  color: ${Colors.aqua};
  text-align: center;
  font-size: 2.95em;
`;

export const CurrencySymbol = styled.span`
  color: ${Colors.grey};
  font-size: 0.5em;
`;

export const SubscriptionPlanCardSubHeading = styled.p`
  color: ${Colors.aqua};
  font-weight: 100;
  text-align: center;
  border-bottom: 1px dotted ${Colors.lightGrey};
  padding-bottom: 10px;
`;


export const Nav = styled.nav`
  
  backdrop-filter: blur(5px);
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
   box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
  border-radius: 5px;
  background-color: rgba(255, 255, 255, .15);
  
  backdrop-filter: blur(5px);
  
  

  
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;