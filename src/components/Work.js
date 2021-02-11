import Row from "../../node_modules/react-bootstrap/Row";

const Work = ({ images, title, stack, time }) => {
    return (
        <div className="work">
            <Row>
                {images.map((image, index) => 
                    <img src={ image } alt="" key={index}></img>    
                )}
            </Row>
            <div className="work-description mt-3">
                <h3>{title}</h3>
                <p>{stack.join(", ")}</p>
                <p>{time}</p>
            </div>
        </div>
    )
}

export default Work;