import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import AboutHero from "../components/hero/about-hero"
import './About.css'

const About = () => {
    return (
        <>
            <body>
                <Header />
                
                <AboutHero />
                <div className="about-details">
                    <div className="welcome">
                        <h1>
                            Welcome to Africa Wizzy Safari
                        </h1>
                        <hr />
                    </div>

                        <div className="welcome-details">
                            <img className="welcome-img" src="https://s3-alpha-sig.figma.com/img/8c88/8b29/002577f7500b2ab4a99aaa7d8e6be7f0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IoinLC4VMehkQyNkk1rlvIpZthMknHvHEm4YY4Hmnb6ts95Dc3bZ2p5eVTu8TkeAopcKedpMR2ZsIPvRczjJS~qVItGDmeY4I5x~92jkSZlsrc1x0~0Mu~vkz6Hr5GVocr2FFSM6bOVMjvKubujWb6W4QEVML~qI4ObZaREkE33~pUQJEKsz5eUXV-ItHrBF842FSF~PGiCk7Zx6dYsO68hEnBMn~fQL9t1gXbflo4xxPBapFSx385cMr5C6Ij0a7POz1-hg~9owmzvvI8yWj1j62uaSetAXeQQQEwTug3z5GHjkJJyvRRdI0jhmBPIBS2F4l8fbl1Mq5b88zeHVTg__" alt="zoo-img" />
                            <p className="welcome-text"> 
                            Welcome to Africa Wizzy Safari, a leading tourism company based in Rwanda. We have been in business for over 5 years and are committed to providing top-quality tours and services to our clients. Our mission is to showcase the beauty and culture of Rwanda to visitors from around the world, and to contribute to the sustainable development of the country through responsible tourism practices.
                            </p>

                            <p className="welcome-text"> 
                            At Africa Wizzy safari, we offer a wide range of tours and activities, including cultural and historical tours, wildlife safaris, mountain gorilla trekking, and more. Our experienced and knowledgeable guides will ensure that you have a safe and enjoyable experience while exploring the stunning landscapes and rich culture of Rwanda.
                            </p>
                            <img className="welcome-img" src="https://s3-alpha-sig.figma.com/img/7600/56f9/b94a31ecc9af090ab219a5e6a933a894?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=S2VSJEiC63XRAJ35~O8ZLeJfjQhtvVOrrFCKJt-ekRe1Zpdk5MC4wMEpx-TajT2~M7E2U7F1dt~ezNlJ4arhcD-2UlP6g6I2fVg085lmjT9GFwN3jbrCHkRl8j7P06cyGFJQI4Ve9efmfldJwsVmx1x7J6KVYJIMs7Z-5xI1t6UpVZhpsn8v-HDotlQZDHC33Xx0KAvW~T7pgEfJTFou3tSLQSJ7vmm2Nyl06T7zZ2JjhHoyEa6gvfKdqhTd0G84OUF9S2nSD8lw2so3s8oSQEtcyDel9iAgOMoeM1mNjL7jO1p1UvBhqGlYez9StL1SimL0RnC1bzzysHNs2PEjfg__" alt="zoo-img" />

                            <img className="welcome-img" src="https://s3-alpha-sig.figma.com/img/fd63/971c/9ce5d2804ffd9f32ac67720292bd35a8?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ubs6thSr~c7xSCG-f7na2nf6AnKJ4KDbpfzcKHcJHWWkl2-CqEH2RIe7shRGhfK~n0Wo5vVgk1LAMBGS9sEq-oTsVghM0GhCIb4tXJJUe9c2hIsplFWopfmBRWBL7mtXOlkCZK5zLkD-NeJxuCDpZmL2SFK1Lip6B90TOy5qwu8Rxd-ip4i8HZavr6zOg2lVhRliGHuVDgrJugLstunf-Ek5idhr4oqkwLkfusIbElyOK9OAcuxPs3mdYaI4EjmlTJ~VgzIb9Dw93~FwK-cKF-o6vU3Zg72howSXpZB-j1RlJ5T8HSVPhzcVRbT9Dd4BEKsYUynqAwGFZbEoCu4B1A__" alt="zoo-img" />
                            <p className="welcome-text"> 
                            Welcome to Africa Wizzy Safari, a leading tourism company based in Rwanda. We have been in business for over 5 years and are committed to providing top-quality tours and services to our clients. Our mission is to showcase the beauty and culture of Rwanda to visitors from around the world, and to contribute to the sustainable development of the country through responsible tourism practices.
                            </p>
                        </div>
                    
                </div>
            <Footer />
            </body>
        </>
    )
}

export default About