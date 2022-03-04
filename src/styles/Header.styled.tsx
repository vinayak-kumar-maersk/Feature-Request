import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff ;
    color:rgba(189, 193, 199, 0.178);
    height:60px;
    padding:0 30px;
    box-shadow:0 20px 5px rgb(0,0,0,0.1);
    &:a{
    color:#000;
    margin-right: 20px;
    &:hover{
        color:#000;
    }
    
    }
    &:ul{
    display:flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    }
    @media(max-width:768px){
        flex-direction: column;
        height:auto;
        &:ul{
        margin:20px 0;
        flex-direction: column;
        text-align:center;
        }
        &:a{
            margin-right: 0;
        }
    }
`
export const Logo = styled.div`
    color:black;
    font-size: 20px;
    text-transform: uppercase;
    &:a{
        color:black;
    }
    @media(max-width:768px){
        margin:20px 0;
    }
`
export const Brand = styled.div`
    margin: 0; 
    float: none; 
    text-align:center;
    position: absolute;
    left: 50%;
    margin-left: -50px !important;  /* 50% of your logo width */
    display: block;

`