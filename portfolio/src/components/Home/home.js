import './home.css'
import React from 'react'

const Home = () => {

    console.log("Home page rendered");

    return (
        <section id="home" className="home">
            <div className='container'>
                <div>
                    <h1>Hello, I'm Kevin</h1>
                    <h2>Hoping to insert a worthy title here someday :)</h2>
                </div>
            </div>
        </section>
    )
};
 
export default Home;