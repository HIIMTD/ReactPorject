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
    // background-size:contain;
    .pic{
        margin-top:10px;
        width:280;
        height:90;
    }
`;


export const WriterWrapper = styled.div`
    width:277px;
    // border:1px solid #dcdcdc;
    // border-radius:3px;
    height:300px;

`;

export const WriterItem = styled.div`
    .p{
        font-size:30px;
        // background:green;
        margin-bottom:20px;

    }
    .text{
        width:250px;
        height:200px;
        font-size:20px;
    }
`;


export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    background:#a5a5a5;
    margin:30px 0;
    text-align:center;
    border-radius:20px;
    color:#fff;
    cursor:pointer;
`;

export const BackTop = styled.div`
    position:fixed;
    right:150px;
    bottom:100px;
    width:80px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    font-size:14px;
    font-weight:bold;
    cursor:pointer;
    background:black;
    color:white;
`;



