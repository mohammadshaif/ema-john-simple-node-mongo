import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    
    const handleAddInventory= ()=>{
        
        //post
        const product = fakeData[0]
        console.log('before post',product);
        fetch('http://localhost:3000/addProduct', {
            method: 'POST',
            body: JSON.stringify(fakeData),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(data => console.log('post successful',data))
    }

    return (
        <div>
            <h1>Inventory coming soon...</h1>
            <button onClick={handleAddInventory} >Add Inventory</button>
        </div>
    );
};

export default Inventory;