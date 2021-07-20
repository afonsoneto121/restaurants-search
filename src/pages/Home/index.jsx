import React from 'react';
import { useState } from 'react';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png'
import { Container, Search, Logo, Wrapper, CorouselTitle, Carousel, ModalTitle, ModalContent } from './styles';
/* Import Redux */
import { useSelector } from 'react-redux';
/* Import Components  */
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Card, RestaurantsCard, Modal, Map } from '../../components';


const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState('');
    const [modalOpened, setModalOpened] = useState(false);
    const [placeId, setPlaceId] = useState(null);
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurant);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    };
    function handlekeyPress(e) {
        if (e.key === 'Enter') {
            setQuery(inputValue);
        }

    }
    function handleOpenModal(placeId) {
        setPlaceId(placeId);
        setModalOpened(true);
    }
    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt='Logo do Aplicativo' />
                    <TextField
                        label='Pesquisar'
                        outlined={true}
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.currentTarget.value)}
                            onKeyPress={handlekeyPress}

                        />
                    </TextField>
                    <CorouselTitle>Na sua Área</CorouselTitle>
                    <Carousel {...settings}>
                        {restaurants.map((restaurant) => (
                            <Card photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                                title={restaurant.name} />
                        ))}
                    </Carousel>
                </Search>
                {restaurants.map((value) => (
                    <RestaurantsCard onClick={() => handleOpenModal(value.place_id)}
                        restaurant={value} />
                ))}

            </Container>
            <Map query={query} placeId={placeId} />
            <Modal open={modalOpened}
                onClose={() => setModalOpened(!modalOpened)}
            >
                <ModalTitle>{restaurantSelected?.name}</ModalTitle>

                <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                <ModalContent>{restaurantSelected?.opening_hours?.open_now ? 'Aberto agora :)' : 'Fechado no momento :('}</ModalContent>
            </Modal>
        </Wrapper>
    )
};

export default Home;
