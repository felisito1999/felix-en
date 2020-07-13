import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Abilities from "../components/abilities";
import { Link } from "gatsby"

const AbilitiesPage = () => (
    <Layout>
        <SEO title="Habilidades"/>
        <Abilities />
        <Link className="btn btn-dark btn-block btn-lg mt-2 mb-2" to="/">Volver a la página principal</Link>
    </Layout>    
)

export default AbilitiesPage;