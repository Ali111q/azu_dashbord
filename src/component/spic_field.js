import React, { Component } from 'react';

export function Spic_field ({id}) {

 
    
    return (
      <>
     <tr> <td> <span class="flex"><input id={`input_num${id}`}  className='input' onChange={(val)=>{}}/></span> </td> </tr>
     </>
    );
  
}

export default Spic_field;
