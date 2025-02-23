import React from "react"
import './about.css'

export function AboutHero() {
    return (
        <div className="about-hero">
            <div className="about-cont">
                <div className="about-hero-text">
                    We are dedicated to
                    providing the best travel experience.
                </div>
                <p className="about-smallee">Discover the lands of a Thousand hills</p>
            </div>
            <div className="about-img">
                <img className="monks" src="https://s3-alpha-sig.figma.com/img/4ff2/5fbb/d22801330eccf9aaeedf7388f729ecdf?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZTTtcA7umDxF2EKykhyQ2uyykn-mTE2DzNVFc5lMgwHCD8K2wK7oO3dzX-PIwC70gzpE-2qXuUO2D4HdJuaEAAOHJN8cXFknPUM0Mb6vNZOnrsBEaliVODTTrdsydZvu67~~~2VGTiQK4Avs9X4gVs-v2b250SjTzJh7XeIn70vmVcqUX5u0cvq~V3iGhf8HYpFt3oBE6zT0NoUz4rbdSGKDxKC4iXKJWhEG9Mjo0l8JSobSoGq49nsBaXezkz--3ajxBaiWgUM-20Kd4hk8Af6LGX0BIsieZJlrMTmhJu8HaUBJlzRlA0LQxT1Y7Sfp2HFWSgs3tQg--oqMHVfaHw__" alt="monkey" />
            </div>

            {/* <div className="search-container">
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
            </div> */}
        </div>
    )
}

export default AboutHero