import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Post from '../views/Post';
import { useSelector } from 'react-redux';
import { getAllCards } from '../../redux/postsRedux'
import Header from '../views/Header';

const Home = () => {
    const cards = useSelector(getAllCards);
    console.log(cards);

    return (
        <Container>
            <Header/>
            <Row className="justify-content-between align-items-between">
                {cards.map(card => <Post postData={card} key={card.id}/>)}
            </Row>
        </Container>

    );
};

export default Home;
