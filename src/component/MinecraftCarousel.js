import Carousel from 'react-bootstrap/Carousel';
import MCimg1 from '../helper/MCimg1';

function INCarousel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <MCimg1/>
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <MCimg1/>
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <MCimg1/>
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default INCarousel;