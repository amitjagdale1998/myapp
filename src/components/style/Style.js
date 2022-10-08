import React from 'react';
import './Style.css';
import stylecss from './style.module.css'
function Style()
{
    return(
        <div>
        <h1 className='h1'>Externel file</h1>
        <h1 className='h2' style={{backgroundColor:"Highlight"}}>Inline css</h1>
        <h1 className={stylecss.h3}> Module CSS</h1>
        </div>
    )
}
export default Style;