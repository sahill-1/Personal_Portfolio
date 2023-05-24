import { Container, Row, Col, Nav, Tab} from "react-bootstrap"

export const Projects = () => {
    const projects = [
        {
            title: "ABC",
            description: "design and development",
            imgUrl : "projectImg1",
        },
        {
            title: "DEF",
            description: "design and development",
            imgUrl : "projectImg1",
        },
        {
            title: "GHI",
            description: "design and development",
            imgUrl : "projectImg1",
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
                        <Tab.Conatiner id="projects-tabs" defaultActiveKey="first">
                        <Nav variants="Pills" defaultActiveKey="/home">
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
                                                <p>{project.title}</p>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                        </Tab.Content>

                        </Tab.Conatiner>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}