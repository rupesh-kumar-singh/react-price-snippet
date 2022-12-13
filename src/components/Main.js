import React from 'react';

import './Main.css'
import Snippet_1 from './subcomponent/Snippet_1'; 
import Snippet_2 from './subcomponent/Snippet_2';
import Snippet_3 from './subcomponent/Snippet_3';
const Main = () => {
    return (
        <div>
        <div className='container'>
        <div>
         <Snippet_1/>
        </div>
        <div>

         <Snippet_2/>
         </div>
        <div> 

         <Snippet_3/>
         </div>
             </div>
        </div>
    );
};

export default Main;