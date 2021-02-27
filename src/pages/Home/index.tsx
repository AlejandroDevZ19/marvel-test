/** @jsxImportSource @emotion/react */
import React,{FC, memo} from 'react';
import Button from '../../common/components/atoms/Button';
import MovieCard from '../../common/components/molecules/MovieCard'
import {Container, Col,Row} from 'react-grid-system';
import {css} from '@emotion/react/macro';

const Home: FC = ()=>{

    /*Suponiendo que esta información vendría de back*/
    const JsonMovieDataFake = [
        {
            id: 1,
            title: 'Super Man',
            description: 'Pelicula del primer super heroe de la historia',
            img: '',
            positiveRate: 100, 
            negativeRate: 10,
        }, {
            id: 2,
            title: 'Thor',
            description: 'Película del Dios del trueno',
            img: '',
            positiveRate: 10, 
            negativeRate: 10,
        },{
            id: 3,
            title: 'Batman',
            description: 'Mejor película de super heroes',
            img: '',
            positiveRate: 10, 
            negativeRate: 10,
        },{
            id: 4,
            title: 'Spiderman',
            description: 'Petter Parker is back :D',
            img: '',
            positiveRate: 10, 
            negativeRate: 10,
        }];

        const renderCard = JsonMovieDataFake.map((item)=>{
            return(
                <Col xl={6} key={item?.id ?? 1}>
                    <MovieCard img={item.img} title={item.title} description={item.description} />
                </Col>
            )
        });

return(
    <Container>
        <Row>{renderCard}</Row>
    </Container>
)
}

export default memo(Home);

const fillWidth = css({
    width: '100%',
    });
    const modalContainer = css({
        padding: 5,
        display: 'flex',
        flexDirection:'column',
        width: '100%',
        });
        const inputsRow = css({
        width: '100%',
        marginTop:15,
        });