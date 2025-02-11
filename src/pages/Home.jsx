import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { Card, CardRnd } from "../components/Card/Card"

const Home = () => {
    return (
        <main>
            <Header />
            <div className="hero">
                <h1 className="hero-text">
                    Expirience the Beuty <br /> of Rwanda with Us
                </h1>
                <small>Discover the Land of a Thousand Hills</small>
            </div>
            <div className="search-container">
                <input className="search" type="text" placeholder="search activities Destination" />
                <label htmlFor="gender">Gender
                    <select name="gender" id="gender">
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="others">others</option>
                    </select>
                </label>
                <label htmlFor="date">Date
                    <select name="date" id="date">
                        <option value="12-13 Aprile 2023">12-13 Aprile 2023</option>
                        <option value="12-14 Aprile 2024">12-14 Aprile 2024</option>
                        <option value="12-15 Aprile 2025">12-15 Aprile 2025</option>
                    </select>
                </label>
                <label htmlFor="pakage">Pakage
                    <select name="pakage" id="pakage">
                        <option value="ALl">All</option>
                    </select>
                </label>
                <button className="book-now">Book Now</button>
            </div>

            <div className="choose-package">
                <h3>Choose your Package</h3>
                <h2>Select your Best Traveling Package for <br />your Journey</h2>
            </div>

            <div className="contaner-cards">
                <Card
                    title={'Jirrafe'}
                    img={'https://plus.unsplash.com/premium_photo-1661863525569-805d25d85f96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amlyYWZmZXxlbnwwfHwwfHx8MA%3D%3D'}
                    description={'Derasic Park lorem '}
                />
                <Card
                    title={'Lion'}
                    img={'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlvbnxlbnwwfHwwfHx8MA%3D%3D'}
                    description={'Derasic Park lorem '}
                />
                <Card
                    title={'WaterFall'}
                    img={'https://media.istockphoto.com/id/577303888/photo/salto-80m-waterfall-in-chapada-dos-veadeiros-goias-brazil.webp?a=1&b=1&s=612x612&w=0&k=20&c=XdJPHaOcde7TzjCTx2zFXsTWCwfAOF7WeHPddw-vJ_A='}
                    description={'Derasic Park lorem '}
                />
                <Card
                    title={'Lion'}
                    img={'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlvbnxlbnwwfHwwfHx8MA%3D%3D'}
                    description={'Derasic Park lorem '}
                />
                <Card
                    title={'WaterFall'}
                    img={'https://media.istockphoto.com/id/577303888/photo/salto-80m-waterfall-in-chapada-dos-veadeiros-goias-brazil.webp?a=1&b=1&s=612x612&w=0&k=20&c=XdJPHaOcde7TzjCTx2zFXsTWCwfAOF7WeHPddw-vJ_A='}
                    description={'Derasic Park lorem '}
                />
                <Card
                    title={'Jirrafe'}
                    img={'https://plus.unsplash.com/premium_photo-1661863525569-805d25d85f96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amlyYWZmZXxlbnwwfHwwfHx8MA%3D%3D'}
                    description={'Derasic Park lorem '}
                />
            </div>

            <div className="choose-package">
                <h3>Popular Destinations</h3>
                <h2>Select your Best Popular <br />Destination</h2>
            </div>

            <div className="slider">
                <CardRnd
                    title={'Jirrafe'}
                    img={'https://plus.unsplash.com/premium_photo-1724701624533-dea17ce5e61e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0aXZlJTIwYWZyaWNhbiUyMGhvbWV8ZW58MHx8MHx8fDA%3D'}
                    description={'Lorem Ispum beatch Hous '}
                />

                <CardRnd
                    title={'Jirrafe'}
                    img={'https://media.istockphoto.com/id/1149453484/photo/lanscape-with-mataya-village-of-sara-tribe-people-guera-chad.webp?a=1&b=1&s=612x612&w=0&k=20&c=HtCoSw-PBqR8CQnaKdbxDKT1Tffb2SmbJDM3KB4rbCI='}
                    description={'Lorem Ispum beatch Hous '}
                />

                <CardRnd
                    title={'Jirrafe'}
                    img={'https://media.istockphoto.com/id/1962441295/photo/young-tuareg-with-camels-on-western-sahara-desert-in-africa.webp?a=1&b=1&s=612x612&w=0&k=20&c=0Tj5qDy7UoQ9uTynv7XobP2b-dUY5WLfA26DXlCgLD0='}
                    description={'Lorem Ispum beatch Hous '}
                />

                <CardRnd
                    title={'Jirrafe'}
                    img={'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdGl2ZSUyMGFmcmljYW4lMjBob21lfGVufDB8fDB8fHww'}
                    description={'Lorem Ispum beatch Hous '}
                />

                <CardRnd
                    title={'Jirrafe'}
                    img={'https://images.unsplash.com/photo-1510739628590-0c601822e0a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0aXZlJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D'}
                    description={'Lorem Ispum beatch Hous '}
                />
            </div>

            <div className="choose-package">
                <h3>Popular Destinations</h3>
                <h2>Select your Best Popular <br />Destination</h2>
            </div>
            <Footer />
        </main>
    )
}

export default Home