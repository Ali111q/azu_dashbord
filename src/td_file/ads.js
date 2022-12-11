import React, { Component } from 'react';

export function Ads({title,body,img,firstIconTitle,firstIconBody,secondIconTitle,secondIconBody,numbers}) {
    

    return (
        <>


  

<tr>
          <td> <span className='flex'>ADS title</span> </td>
          <td> <span className='flex'>{title}</span></td>
        </tr>
        <tr>
        <td> <span className='flex'>ADS body</span> </td>
          <td> <span className='flex'>{body}</span> </td>
        </tr>
        <tr>
        <td> <span className='flex'>ADS img</span> </td>
        <td> <span className='flex'><img src={img}></img></span> </td>
        </tr>
        <tr>
        <td> <span className='flex'>first icon img</span> </td>
          <td> <span className='flex'>{firstIconTitle}</span> </td>
        </tr>
        <tr>
        <td> <span className='flex'>first icon title</span> </td>
          <td> <span className='flex'>{firstIconBody}</span> </td>
        </tr>
        <tr>
        <td> <span className='flex'>second icon img</span> </td>
          <td> <span className='flex'>{secondIconTitle}</span> </td>
        </tr>
        <tr>
        <td> <span className='flex'>second icon title</span> </td>
          <td> <span className='flex'>{secondIconBody}</span> </td>
        </tr>
        {numbers.map((e,index)=>{return <>
         <tr> <td> <span className='flex'>num title {index +1}</span> </td>
         <td> <span className='flex'>{e.title}</span></td> </tr>

        <tr> <td> <span className='flex'>num value {index +1}</span> </td>
         <td> <span className='flex'>{e.number}</span></td> </tr>

         <tr> <td> <span className='flex'>num title {index +1}</span> </td>
         <td> <span className='flex'>{e.title}</span></td> </tr>

        <tr> <td> <span className='flex'>num value {index +1}</span> </td>
         <td> <span className='flex'>{e.number}</span></td> </tr>
                                            </> 
                })}



        </>

    );
    
}
export default Ads