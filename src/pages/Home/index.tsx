/** @jsxImportSource @emotion/react */
import React,{FC, memo} from 'react';
import Button from '../../common/components/atoms/Button';
import MovieCard from '../../common/components/molecules/MovieCard'
import Text from '../../common/components/atoms/Text';
import {Container, Col,Row} from 'react-grid-system';
import {css} from '@emotion/react/macro';
import PercentageBar from '../../common/components/molecules/PercentageBar';
import Notification from '../../common/components/molecules/Notification';
import Banner from '../../common/components/organisms/Banner';
const Home: FC = ()=>{

    /*Suponiendo que esta información vendría de back*/
    const JsonMovieDataFake = [
        {
            id: 1,
            title: 'Superman',
            description: 'Yo nisiquiera soy de marvel pero bueno :D',
            img: 'https://p4.wallpaperbetter.com/wallpaper/853/426/478/fiction-costume-poster-superhero-wallpaper-preview.jpg',
            positiveRate: 60, 
            negativeRate: 40,
        }, {
            id: 2,
            title: 'Thor 2',
            description: 'Película del Dios del trueno',
            img: 'https://wallpapersplanet.net/sites/default/files/thor-wallpapers-40454-690098.png',
            positiveRate: 10, 
            negativeRate: 10,
        },{
            id: 3,
            title: 'Batman',
            description: 'Yo menos xD',
            img: 'https://i1.wp.com/www.canalfreak.net/wp-content/uploads/2018/07/batman-el-caballero-oscuro-de-la-noche.jpg?resize=1154%2C640',
            positiveRate: 10, 
            negativeRate: 10,
        },{
            id: 4,
            title: 'Spiderman',
            description: 'Petter Parker is back :D',
            img: 'https://www.mandatory.com/assets/uploads/2011/09/file_174882_0_spidey_retro_header-1280x720.jpg',
            positiveRate: 10, 
            negativeRate: 10,
        }];

        const renderCard = JsonMovieDataFake.map((item)=>{
            return(
                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} key={item?.id ?? 1}>
                    <MovieCard 
                        img={item.img} 
                        title={item.title} 
                        description={item.description}
                        positiveRate={item.positiveRate}
                        negativeRate={item.negativeRate} />
                </Col>
            )
        });

return(
    <Container>
        <Banner img={'https://cdn.wallpapersafari.com/13/60/2hrn9Z.jpg'} />
        <Notification />
         <Text
            text={'Super heroes anteriores'}
            fontSize={32}
            color={'#808080'}
            fontWeight={400}
        />
        <Row>{renderCard}</Row>
    </Container>
    );
};

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