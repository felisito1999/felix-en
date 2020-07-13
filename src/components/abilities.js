import React from 'react';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Abilities = () => (

    <Jumbotron className="bg-dark mt-5">
        <div className="border border-secondary rounded-lg bg-secondary">
            <h1 className="text-center text-light p-5">Habilidades</h1>
        </div>
        <div className="text-light jumbotron bg-secondary mt-5">
            <h2 className="text-center" >Áreas de conocimiento</h2>
            <Card className="mt-5" bg="dark" variant="dark">
                <Card.Header className="text-center"><h5>Aplicaciones web</h5></Card.Header>
                <Card.Body>
                    <Card.Text className="text-justify">
                        Félix como un ingeniero de software junior, tiene conocimientos básicos e intermedios en algunas áreas del de desarrollo de aplicaciones web. 
                        <br/> <br/> Tiene conocimientos básicos en las siguientes áreas del desarrollo front-end:
                        <ul className="mt-3">
                            <li>React js</li>
                            <li>Desarrollo de api REST</li>
                            <li>Desarrollo con php, utilizando frameworks como Laravel</li>
                            <li>Programación en python</li>
                        </ul>
                        <br/>
                        Tiene conocimientos intermedios en ASP.NET MVC 5.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mt-5" bg="dark" variant="dark">
                <Card.Header className="text-center"><h5>Aplicaciones de escritorio</h5></Card.Header>
                <Card.Body>
                    <Card.Text className="text-justify">
                        Tiene conocimientos intermedios en las siguientes áreas de desarrollo:
                        <ul className="mt-3">
                            <li>Desarrollo de aplicaciones en Windows Forms</li>
                        </ul>
                        Conocimientos básicos:
                        <ul>
                            <br/>
                            <li>Programación python</li>
                            <li>Programación C++</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </Jumbotron>
)

export default Abilities;