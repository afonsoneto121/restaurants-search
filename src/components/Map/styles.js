import styled from "styled-components";

export const ContaineInfo = styled.div`
display: flex;
align-items: center;
border-radius: 6px;
max-height: 200 px 
`;

export const TitleInfo = styled.p`
text-decoration: none;
font-size: 14px;
font-weight: bold;
line-height: 16px;
margin-right: 5px;
:hover {
    color: #aaa;
}
`;

export const ImageInfo = styled.img`
width: 60px;
height: 60px;
border-radius: 6px;
object-fit: cover;
`;