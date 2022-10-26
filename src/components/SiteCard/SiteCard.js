import React from 'react';
import { Link } from 'react-router-dom';
import './SiteCard.css'

const SiteCard = () => {
    const Submit=(id)=>{
        console.log('subbit')
    }
    return (
        <div>
            <div className="side-card">
                   <h1>Our Topic</h1>
                  <h3><Link   onClick={()=>Submit()}>Angular</Link></h3>
                   <h3><Link  onClick={()=>Submit()}>React</Link></h3>
                   <h3><Link  onClick={()=>Submit()}> Vue.js</Link></h3>
                   <h3><Link  onClick={()=>Submit()}>Ember.js</Link></h3>
                   <h3><Link  onClick={()=>Submit()}>Meteor</Link></h3>
                   <h3><Link  onClick={()=>Submit()}>Mithril</Link></h3>
                </div>
        </div>
    );
};

export default SiteCard;