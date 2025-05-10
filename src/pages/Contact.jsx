import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Allhero from "../components/hero/hero"
import Form from "../components/Form/Form"

function Contact() {
    return (
        <>
            <Header />
            <Allhero title='Contact us' />
            <Form />
            <Footer />
        </>
    )
}

export default Contact