import { Container, Row, Col, Nav, Tab} from "react-bootstrap"
import  {ProjectCard}  from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projectImg1 from "../assets/img/project-img1.png";
import projectImg2 from "../assets/img/project-img2.png"
import projectImg3 from "../assets/img/project-img3.png"

export const Projects = () => {
    const projects = [
        {
            title: "ABC",
            description: "design and development",
            imgUrl : projectImg1,
        },
        {
            title: "DEF",
            description: "design and development",
            imgUrl : projectImg2,
        },
        {
            title: "GHI",
            description: "design and development",
            imgUrl : projectImg3,
        },
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            Lorem ipsum is basically a sample textand oruinting the typescript.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variants="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item> 
                                <Nav.Link eventKey="third" >Tab Third</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard 
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                        </Tab.Content>

                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    )
}