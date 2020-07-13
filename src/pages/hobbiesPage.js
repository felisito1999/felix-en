import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hobbies from "../components/hobbies";
import { Link } from "gatsby";

const hobbiesPage = () => (
  <Layout>
    <SEO title="Pasatiempos" />
    <Hobbies />
    <Link className="btn btn-dark btn-block btn-lg mt-2 mb-2" to="/">Volver a la página principal</Link>
  </Layout>
)

export default hobbiesPage;
