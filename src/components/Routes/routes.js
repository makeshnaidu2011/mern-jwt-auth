import React from "react"
import { Route } from "react-router-dom"
import Menu from "../auth/Menu"



function Paths() {




    return (
        <>

            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route path="/ContactUs" component={ContactUs} />
            <Route path="/Products" component={Products} />
            <Route path="/Services" component={Services} />

        </>

    )
}





function Home() {
    return null
}
function About() {
    return <>
        <Menu />
        <h1>This is About page </h1></>
} function ContactUs() {
    return <><Menu />
        <h1>This is ContactUs </h1></>
} function Products() {
    return <><Menu />
        <h1>This is Products page </h1></>
} function Services() {
    return <><Menu />
        <h1>This is Services page </h1></>
}
export default Paths;