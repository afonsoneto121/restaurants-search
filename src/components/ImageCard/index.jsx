import Skeleton from '../Skeleton';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';



const Card = styled.div`
display: flex;
justify-content: center;
padding: 5px;
width: 90px;
height:90px;
border-radius: 6px;
background-image: url(${(props) => props.photo});
background-size: cover;
`;

const Title = styled.span`
font-family: ${(props) => props.theme.fonts.regular};
color: #ffffff;
font-size: 16px;
`;
const ImageCard = ({ photo, title }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const newImage = new Image();
        newImage.src = photo;
        newImage.onload = () => setImageLoaded(true);
    }, [photo]);
    return (
        <>{imageLoaded ? (
            <Card photo={photo}>
                <Title>{title} </Title>
            </Card>)
            : (<Skeleton width='100px' height='100px' />)
        }
        </>
    )
}

export default ImageCard