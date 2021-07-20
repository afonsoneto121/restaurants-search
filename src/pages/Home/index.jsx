import React from 'react';
import { useState } from 'react';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png'
import { Container, Search, Logo, Wrapper, Map, CorouselTitle, Carousel } from './styles';

/* Import Components  */
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Card, RestaurantsCard, Modal } from '../../components';


const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    };

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
                        />
                    </TextField>
                    <CorouselTitle>Na sua Área</CorouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title='Nome 1 ' />
                        <Card photo={restaurante} title='Nome 5 ' />
                        <Card photo={restaurante} title='Nome 4 ' />
                        <Card photo={restaurante} title='Nome 3 ' />
                        <Card photo={restaurante} title='Nome 2 ' />
                    </Carousel>
                </Search>
                <button onClick={() => setModalOpened(true)}>abrir</button>
                <RestaurantsCard />
            </Container>
            <Map />
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} >Teste</Modal>
        </Wrapper>
    )
};

export default Home;
