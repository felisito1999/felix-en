import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "react-bootstrap/Jumbotron";

const IndexPage = () => (
  <Layout>
    <SEO title="Pagina principal" />
    <Jumbotron className="bg-dark" style={{marginTop:66}}>

      <h1 className="text-light text-center mb-5">Bienvenido a Felix Engineering</h1>
      <h3 className="text-center text-light">Te invito a que me conozcas más dirigiéndote a los siguientes apartados:</h3>
      <div className="list-group mt-5">
        <Link className="list-group-item list-group-item-action list-group-item-dark" to="biographyPage">Biografía</Link>
        <Link className="list-group-item list-group-item-action list-group-item-dark" to="hobbiesPage">Pasatiempos</Link>
        <Link className="list-group-item list-group-item-action list-group-item-dark" to="abilitiesPage">Habilidades</Link>
      </div>

    </Jumbotron>
  </Layout>
)

export default IndexPage
