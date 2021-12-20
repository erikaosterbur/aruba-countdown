import Carousel from 'react-bootstrap/Carousel'
import Flamingo from '../images/flamingo.jpg';
import Turtle from '../images/turtle.jpg';
import Beach from '../images/beach.jpg';

function Images() {
    return(
        <>
        <div className="d-flex justify-content-center">
            <Carousel className="m-4" style={{width: "50%"}}>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={Flamingo}
                    alt="Flamingo"
                    style={{width: "100%"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={Turtle}                    
                    alt="Turtle"
                    style={{width: "100%"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={Beach}                    
                    alt="Beach"
                    style={{width: "100%"}}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
        </>
    )
}

export default Images;