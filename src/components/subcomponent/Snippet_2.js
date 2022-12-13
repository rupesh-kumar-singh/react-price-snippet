import React from 'react';

import './Snippet_2.css'

const Snippet_2 = () => {
    return (
        <div className='main-container'>
            <div className='snippet-table'>
                <h3 className='h3'>plus</h3>
                <div className='snippet-price'>
                    <h3>$9</h3>
                    <p>/month</p>
                </div>
                <div className='about-order-list'>
                    <ul className='ul-list'>
                        <li><span>&#x2713;</span><span>5 Users</span></li>
                        <li> <span>&#x2713;</span>50GB Storage </li>
                        <li><span>&#x2713;</span>Unlimited Public Projects</li>
                        <li><span>&#x2713;</span>Community Access</li>
                        <li><span>&#x2713;</span>Unlimited Private Project</li>
                        <li><span>&#x2713;</span>Dedicated Phone Support</li>
                        <li><span>&#x2713;</span>Free Subdomain</li>
                    </ul>
                    <ul className='ul-list unable-ser'>
                      
                        <li><span>&#x2716;</span>Monthly Status Reports</li>
                    </ul>
                </div>
                <div className='button'>
                    <a href='#' className='btn'>button</a>
                </div>
            </div>
        </div>
    );
};

export default Snippet_2;