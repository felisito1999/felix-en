import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function Biography(){

    return(
        <Jumbotron className = "bg-dark mt-5">
            <div className = "bg-secondary border rounded-lg border-secondary p-5">
                <h1 className="text-light text-center">Biografía</h1>
            </div>
            <Row className="m-5">
                <Col>
                </Col>
                <Col>
                    <Image className="border border-white"roundedCircle fluid src="https://scontent.fsti4-1.fna.fbcdn.net/v/t1.0-9/23316477_1629276433759258_8595993654846241168_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeHIX1QMKoOqQDgXyjiNgM2wqCcnE_Ytu2OoJycT9i27Y1cHmdq5t4XBZl4tcJduCAorev_Ckfsgt2ME4nQ0aabS&_nc_ohc=VXrYnwvys-AAX9bKpX0&_nc_ht=scontent.fsti4-1.fna&oh=44d3878ae951f0b2a79486e7f6afdb0e&oe=5F2DBEF1" alt="Imagen de Felix"></Image>
                    <h5 className="text-light text-center mt-4">Félix Junior Pérez Peguero</h5>
                    <p className="text-light text-center"><strong>Ingeniero de software</strong></p>
                </Col>
                <Col>
                </Col>
            </Row>
            <Container className="border border-secondary rounded bg-secondary p-5">
                <p className="text-light text-justify">El ingeniero de software Félix Junior Pérez Peguero nació en la ciudad de San Pedro de Macorís el día 1 de septiembre del año 1999. Vivió sus primeros años en el Barrio Pedro Justo Carrión y luego se mudó al Barrio Hazim, tiempos en los que asistió al colegio Jardín Infantil Mi Hogar Feliz, en donde cursó toda su educación Inicial, primaria y secundaria.</p>
                <br/>
                <p className="text-light text-justify">En su juventud Félix practicó algunas disciplinas, como el baseball y el basketball. Las enseñanzas adquiridas en los campos de práctica de estas disciplinas permitieron el desarrollo de la personalidad y la forma de ver la vida de Félix, debido a que los instructores consideraban a sus alumnos como parte de su familia.</p>
                <br/>
                <p className="text-light text-justify">En el año 2017 se graduó del colegio e inició a cursar la carrera de ingeniería de software en la Universidad Central del Este, de donde se graduó con los maás altos honores. </p>
            </Container>
        </Jumbotron>
    )
}

export default Biography;