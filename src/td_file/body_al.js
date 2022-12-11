import React, { Component } from 'react';
import { deleteBlog } from '../url/const';

export function BodyAl({body}) {
    

    return (
        <>
        <div className='ans1'>
                        <div className='body_riv'>
                        <button onClick={()=>{
                            document.querySelector('.ans1').remove();
                        }
                        }>back</button>
                        <p>
                          ${body}
                        </p>
                      </div>
        </div>
        </>

    );
    
}
export default BodyAl