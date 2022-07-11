import React from 'react';
import Row from 'react-bootstrap/Row';
import PostCard from '../views/PostCard';
import { useSelector } from 'react-redux';
import { getAllCards } from '../../redux/postsRedux'
import Header from '../views/Header';

const Home = () => {
    const cards = useSelector(getAllCards);

    return (
        <div>
            <Header />
            <Row className="justify-content-between align-items-between">
                {cards.map(card => <PostCard postData={card} key={card.id} />)}
            </Row>
        </div>

    );
};

export default Home;
