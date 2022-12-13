import React from 'react';

import './Snippet_3.css'
const Snippet_3 = () => {
    return (
        <div className='main-container'>
            <div className='snippet-table'>
                <h3 className='h3'>pro</h3>
                <div className='snippet-price'>
                    <h3>$49</h3>
                    <p>/month</p>
                </div>
                <div className='about-order-list'>
                    <ul className='ul-list'>
                        <li><span>&#x2713;</span><span>Unlimited users</span></li>
                        <li> <span>&#x2713;</span>150GB Storage </li>
                        <li><span>&#x2713;</span>Unlimited Public Projects</li>
                        <li><span>&#x2713;</span>Community Access</li>
                        <li><span>&#x2713;</span>Unlimited Private Project</li>
                        <li><span>&#x2713;</span>Dedicated Phone Support</li>
                        <li><span>&#x2713;</span><span>Unlimited</span> Free Subdomain</li>
                        <li><span>&#x2713;</span>Monthly Status Reports</li>
                    </ul>
                    <ul className='ul-list unable-ser'>
                       
                    </ul>
                </div>
                <div className='button'>
                    <a href='#' className='btn'>button</a>
                </div>
            </div>
        </div>
    );
};

export default Snippet_3;