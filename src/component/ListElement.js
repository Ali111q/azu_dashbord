import React, { Component } from 'react';

function ListElement({onCLick, name}) {






    return (
   <>
   <button onClick={onCLick} > {name} </button>
   </>
    );
  }


export default ListElement;
