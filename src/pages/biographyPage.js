import React from "react";
import Biography from "../components/biography"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const BiographyPage = () => (
    <Layout>
        <SEO title="Biografia" />
        <Biography/>
        <Link className="btn btn-dark btn-block btn-lg mt-2 mb-2" to="/">Volver a la página principal</Link>
    </Layout>
)
export default BiographyPage;