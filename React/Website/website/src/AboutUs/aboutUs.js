import React, { Component } from 'react'
import jane from './jane.jpg'
import mike from './mike.jpg'
import john from './john.jpg'
import './index.css'

// const useStyles = makeStyles((theme) => ({

//   }));
class AboutUs extends Component {
    render() {
        return (
            <div>
                <div class='about-section'>
                    <h1>Who we are and</h1>
                    <p>what our  mission is with this glorious company for the ages.</p>
                </div>

                {/* <h2 style="text-align:center">Our Team</h2> */}
                <div class='row'>
                    <div class='column'>
                        <div class='card'>
                            <img src={jane} class='img-class' alt='Jane' />
                            <div class='container'>
                                <h2>Jane Doe</h2>
                                <p class='title'>CEO & Founder</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>jane@symphasis.com</p>
                                <p>
                                    <button class='button'>Contact</button>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class='column'>
                        <div class='card'>
                            <img src={mike} class='img-class' alt='Mike' />
                            <div class='container'>
                                <h2>Mike Ross</h2>
                                <p class='title'>Art Director</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>mike@symphasis.com</p>
                                <p>
                                    <button class='button'>Contact</button>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class='column'>
                        <div class='card'>
                            <img src={john} class='img-class' alt='John' />
                            <div class='container'>
                                <h2>John Doe</h2>
                                <p class='title'>Designer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>john@symphasis.com</p>
                                <p>
                                    <button class='button'>Contact</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs
