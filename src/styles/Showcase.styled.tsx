import styled from "styled-components";

export const Showcase1 = styled.div`
    height:300px;
    width:100%;
    background: rgba(189, 193, 199, 0.178) ;
    color:rgb(17, 2, 2);
    position:relative;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    text-align: left;
    margin-left: 24px;
    background-color: rgba(245, 248, 252, 0) ;
    &:after{
    content: '';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgba(245, 248, 252, 0) ;
    }
    &:h1{
    font-size: 40px;
    margin-bottom: 0;
    }
    *{
    z-index: 20;
    }

`