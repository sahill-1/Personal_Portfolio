import { Container, Row, Col } from "react-bootstrap"
import {ArrowRightCIrcle} from "react-bootstrap-icons"
export const  Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio!</span>
                        <h1>{`Hi, I'm Sahil.`}<span className="wrap">Frontend Developer</span></h1>
                        <p>Hi, mt name is  Sahil Vishwakarma and I am currentlly working as a Frontend Developer at Business World Trade.</p>
                        <button onClick={() => console.log("Connect")}>Let's Connect <ArrowRightCIrcle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src="" alt="Header-img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}