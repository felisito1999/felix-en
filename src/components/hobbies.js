import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


const Hobbies = () => (

    <Jumbotron className="bg-dark mt-5">
        <div className = "bg-secondary border rounded-lg border-secondary p-5">
            <h1 className="text-center text-light">Pasatiempos </h1>
        </div>

        <Row className="mt-5">
            <Col xs={12} className="text-center p-1">
                <Card bg="secondary">
                    <Card.Header>
                        <h5 className="text-light m-0">Basketball</h5>
                    </Card.Header>
                    <Card.Img alt="Imagen jugador profesional del basketball LeBron James" variant="top" src="https://p4.wallpaperbetter.com/wallpaper/798/286/564/basketball-lebron-james-american-nba-wallpaper-preview.jpg"/>
                    <Card.Body>
                        <Card.Text>
                            <p className="text-justify text-light">Es uno de los hobbies principales de Félix, ya sea viendo un partido o jugándolo entrea amigos.</p>
                            <br/>
                            <p className="text-justify text-light">El basketball tiene siempre un espacio en el tiempo de Félix.</p>
                            <br/>
                            <p className="text-justify text-light">El jugador favorito de Félix es LeBron James</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12}  className="text-center p-1">
                <Card bg="secondary">
                    <Card.Header>
                        <h5 className="text-light m-0">Baseball</h5>
                    </Card.Header>
                    <Card.Img alt="Imagen Félix jugando baseball" variant="top" src="https://scontent.fsti4-1.fna.fbcdn.net/v/t1.0-9/582360_520291417991104_1028858125_n.jpg?_nc_cat=108&_nc_sid=cdbe9c&_nc_eui2=AeG5kNXl5ChzF4TwnoWE4thoTlaEEaxek9lOVoQRrF6T2VtLKYbdQatp0FD8UQK_Ome-EE_87n5T07vlI73Jwe_H&_nc_ohc=U45IE1s_1V0AX_-PsFa&_nc_ht=scontent.fsti4-1.fna&oh=fff44c4389d3871358befd54f601b5ad&oe=5F2F61CB"/>
                    <Card.Body>
                        <Card.Text>
                            <p className="text-justify text-light">Fue el primer deporte practicado por Félix, siempre que puede está al tanto de las estadísticas.</p>
                            <br/>
                            <p className="text-justify text-light">El jugador favorito de Félix es Alex Rodríguez.</p>
                            <br/>
                            <br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12}  className="text-center p-1">
                <Card bg="secondary">
                    <Card.Header>
                        <h5 className="text-light m-0">Anime/Manga</h5>
                    </Card.Header>
                    <Card.Img alt="Imagen anime/manga Bleach" variant="top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7369ba09-6adc-439b-bfa5-fa9296ad4ac0/ddekfci-2cd8e8ea-0d42-47d1-8f39-772339c7485d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzM2OWJhMDktNmFkYy00MzliLWJmYTUtZmE5Mjk2YWQ0YWMwXC9kZGVrZmNpLTJjZDhlOGVhLTBkNDItNDdkMS04ZjM5LTc3MjMzOWM3NDg1ZC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.inP_mLMGdfPkrP5qeCjnb-ZlAnK29OWr-wIQ3VksTy0"/>
                    <Card.Body>
                        <Card.Text>
                            <p className="text-justify text-light">En general, el manga y el anime son unos de los hobbies principales de Félix, debido a que cuando tiene tiempo libre pasa mucho tiempo.</p>
                            <br/>
                            <p className="text-justify text-light">El anime/manga favorito de Félix es Bleach de Tite Kubo.</p>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Jumbotron>
)

export default Hobbies;