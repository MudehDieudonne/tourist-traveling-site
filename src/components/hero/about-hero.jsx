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
                <img className="monks" src="https://s3-alpha-sig.figma.com/img/4ff2/5fbb/d22801330eccf9aaeedf7388f729ecdf?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=szEUR6hNWkXzJIOVxDtJrT-TXVhNj5bWHAWhZyDfvjEjnPRhIwR750uREpQLgLKzhTGQ08U~F1sQt2oX3ZrgHXO9MgOn9CxEoyWSek0GvKkz0r7rl16qmn-4ZrUTlY3QdFfGb9WgNy0ToNd-DwtGVUnd6mDIZGLGtXza1hufCrG~9GinbDc7n2AesJyvlsQQwdduRwh-sT5y2kr92sIWVWyyf6QQEz1VUV8GpqBTLZp3pu5aV5f0L~0jLoLvrQRARY5qWM9QI6lAele9TXfXPfT9mryWXUUBScuw5yaxczQVnkpOLzLb6dWDBXWeCeZCFP47V41VwAPnkNYSTNZazw__" alt="monkey" />
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