import React from "react";
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restaurante-fake.png'


import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from "./styles";

const RestaurantsCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <ReactStars count={5} isHalf={true} edit={false} value={4} activeColor='#e7711c'
            />
            <Address>Rua de Alguma coisa</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurante} />
    </Restaurant>);

export default RestaurantsCard