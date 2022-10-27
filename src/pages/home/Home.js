import React from 'react';
import './Home.css'
import img from './preview.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            <section className="benar-section">
             <div className="">
                <div className="row">
                    <div className="col-xl-6 col-md-6 benar">
                       <div className="benar-details">
                       <h1>Develop your Skills Online with learnJS</h1>
                       <p>If you’re interested in learning to code, you’ve probably noticed that JavaScript (JS) is a hot topic. JavaScript (a scripting language used to build dynamic web content like animated features, interactive forms, scrolling video, etc.) is a pillar of web development, which means JavaScript developers are in high demand (Indeed lists over 28,000 JavaScript jobs as of this writing(opens in a new tab)) and JavaScript jobs are lucrative (Glassdoor lists average JavaScript developer pay at $72,500 as of this writing(opens in a new tab)).</p>
                       <Link to='/course'>
                       <button>Continew Course</button>
                       </Link>
                       </div>
                    </div>
                    <div className="col-xl-6  col-md-6">
                        <div className='benar-img'>
                        <img src={img} alt="" />
                        </div>
                     </div>
                </div>
            </div>
            </section>
        </div>
    );
};

export default Home;