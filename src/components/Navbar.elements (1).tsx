import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  
 z-index: 1;
 width: 100%;
 max-width: 800px;
 margin-right: auto;
 margin-left: auto;
 padding-right: 50px;
 padding-left: 50px;
 @media screen and (max-width: 991px) {
   padding-right: 30px;
   padding-left: 30px;
  }


`
export const Nav = styled.nav`
  background: white;
  height: 80px;
  width: auto;
  display: flex;
  font-size: 1.2rem;
  margin-top: -4px;
  margin-right: -10px;
  margin-left: -350px;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
 ${Container}
 
`;

export const Image = styled.img`
  src: url(${(props) => props.src});
  align-items: center;
  cursor: pointer;
  margin-left: -620px;
  margin-top: -4px;
  display: grid;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const DropDown = styled.div`
  display: none;
  position: absolute;
  perspective: 1000px;
  background-color: #f1f1f1;
  min-width: 100px;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropContent = styled.a`
  color: black;
  padding: 10px 10px;
  text-decoration: none;
  border-bottom: 1px solid #e0e0e0;
  display: block;
  font-size: 1rem;

  &:hover {
    background-color: #e2f0f7;
    border-left: 4px solid #90cfee;
  }
`;
export const ProfileDrop = styled.div`
  position: absolute;
  perspective: 1000px;
  background-color: #f1f1f1;
  min-width: 100px;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
  margin-left: -35px;
  margin-top: 14px;
  border: 1px solid #e0e0e0;
  justify-content: center;
  font-size: 1.5rem;

  @media screen and (max-width: 960px) {
    display: flex;
    position: absolute;
    justify-content: space-between;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: -369px;
  list-style: none;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  font-size: 1.5rem;
  margin: 10px;
  list-style: none;

  &:hover {
    cursor: pointer;
    transition: all 0.3s ease-out;
    ${DropDown} {
      transition: all;
      display: block;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const SearchBar = styled.input`
  width: 180px;
  height: 25px;
  border: 1px solid black;
  outline: none;
  color: darken(#f0ad4e, 25);

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  background-color: #fff;
  padding: 5px 12px;
  transition: all 1s ease;
  border-radius: 0;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 80%;
    background-color: #f0ad4e;
    transition: all 1s ease 0.5s;
  }
`;

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SidebarNav = styled.nav`
  background: #f5f5f5;
  width: 350px;
  height: 80vh;
  margin-left: -200px;
  margin-top: 15px;
  justify-content: center;
  position: fixed;
  top: 10;
  transition: 350ms;
  z-index: 10;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;

export const SMenu = styled.div`
  position: fixed;
  left: 100%;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.overlay};
  width: 100%;
  transition: 0.3s ease left;
`;
