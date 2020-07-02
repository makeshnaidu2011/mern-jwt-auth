import React from "react"
import { Route } from "react-router-dom"




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

        <h1>This is About page </h1></>
} function ContactUs() {
    return <>
        <h1>This is ContactUs </h1></>
} function Products() {
    return <>
        <h1>This is Products page </h1></>
} function Services() {
    return <>
        <h1>This is Services page </h1></>
}
function AdminPanel() {
    return <>
        <h1>This is Admin Panel </h1></>
} function UserConfig() {
    return <>
        <h1>This is UserConfig </h1></>
}


export default Paths;
export { About, ContactUs, Products, Services, AdminPanel, UserConfig }