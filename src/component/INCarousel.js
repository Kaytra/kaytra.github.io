import Carousel from 'react-bootstrap/Carousel';
import INimg1 from '../helper/INimg1';
import INimg2 from '../helper/INimg2';
import INimg3 from '../helper/INimg3';

function INCarousel() {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <INimg1/>
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <INimg2/>
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <INimg3/>
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default INCarousel;