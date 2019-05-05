import styled from 'styled-components';


export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
    // background:red;
    background:white;
`;

export const HomeLeft = styled.div`
    width:625px;
    margin-left:15px;
    padding-top:30px;
    float:left;
    .banner-image{
        width:625px;
        height:240px;
    }

`;


export const HomeRight = styled.div`
    width:280px;
    float:right;

`;

export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin:0 -18px;
    // background:red;
    border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    background:#f7f7f7;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    margin-left:18px;
    padding-right:10px;
    margin-bottom:18px;
    .youtube{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
        
    }
`;

export const ListItem = styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .pic{
        display:block;
        width:125px;
        height:140px;
        float:right;
    }
`;


export const ListInfo = styled.div`
    width:500px;
    float:right;
    .title{
        font-size:19px;
        line-height:27px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        font-size:13px;
        line-height:24px;
        color:black;
    }
`;



export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
    .p{
        font-size:28px;
        font-weight:bold;
    }
`;

export const RecommendItem = styled.div`
    width:280px;
    height:70px;
    background:url(${(props) => props.imgUrl});
    // background-size:contain;
    .pic{
        margin-top:10px;
        width:280;
        height:90;
    }
`;
