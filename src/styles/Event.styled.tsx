import styled from "styled-components";

export const Label = styled.div`
    width: 30vh;
    float:right;
    padding-right: 25px;
    padding-top: 15px ;
    @media screen and (max-width: 600px) {
        width:30vh;
        
    }

`
export const IdeaStatus = styled.div`
    float: right;
    padding-right: 40px;
    margin-right: auto;
    padding-top: 15px ;
    position: relative;
`
export const SortBy = styled.div`
    float:right;
    margin-right: 55px;
    margin-left: 20px;
    padding-top:15px ;
    position: relative;

`
export const SearchBar = styled.div`
    float: right;
    padding-right: -130px;
    padding-top: 10px ;
    position: relative;
    @media screen and (max-width: 900px){
        width:20vh;
    }
`
export const Shared = styled.div`
    margin-top: 60px;

`
export const Footerfix = styled.div`
    margin-top: 0 auto;
`
export const Upvote = styled.div`
    margin-right: 10px;
    
`
export const ViewFilter = styled.div`
    float:right;
    padding-top: 35px;
    padding-right: 130px;
    position:relative;
`
export const RightSide = styled.div`
    float: right;
    margin-top: -1050px;
    padding-left: -100px;
    display: block;
    width: 30vw;
    @media screen and (max-width: 1100px){
        float: column;
        flex-direction: column;
        margin-top: 0px;
        padding-left: 10px;
        display: grid;
        grid-template-columns: repeat(1,1fr);
        width: 80vw;
        position:relative;
        transition: display 0.1s;
    }
`
export const FontSize = styled.div`
    font-size: 24px;
`

export const Space = styled.div`
    margin: 10px;
    padding-left: 10px;
`
export const SpaceTopLiked = styled.div`
    width: 50vw;
    margin: 10px;
    padding-left: 10px;

`
export const ButtonRight = styled.div`
    float: right;
    padding-top: 20px;
    padding-right: 10px;
`
export const PSpacing = styled.div`
    padding-left: 15px;
`

export const Events = styled.div`
    margin: 20px 50px 0px 0px;
    padding:13px;
    @media screen and (max-width: 1100px){
        flex-direction: column;
        text-align: center;
    }
    &:img{
    flex:5;
    margin:10px;
    }
`
export const Info = styled.div`
    flex:2;
    padding:0px 175px 30px 10px;
    @media screen and (max-width: 1100px){
        margin-bottom: 20px;
    }

`
export const Links = styled.div`
    color: red;

`
