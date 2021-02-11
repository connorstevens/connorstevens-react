import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

const Footer = () => {
    return (
        <Container fluid className="footer">
            <Container>
                <Row>
                    <Col md={4}>
                        <h4>Connor Stevens</h4>
                        <small>© 2021, All Rights Reserved</small>
                    </Col>
                    <Col md={4}>
                        <h5>Businesses</h5>
                        <a href="https://soletech.io" alt="">Sole Tech</a>
                        <br></br>
                        <a href="https://eqpt.io">Equipt Tools</a>
                    </Col>
                    <Col md={4}>
                        <h5>Contact</h5>
                        <a href="mailto:conmail1224@gmail.com">Email</a>
                        <br></br>
                        <a href="https://twitter.com/cnrstvns">Twitter</a>
                        <br></br>
                        <a href="https://dsc.bio/connor">Discord</a>
                        <br></br>
                        <a href="https://linkedin.com/in/connorstevens26">LinkedIn</a>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer;