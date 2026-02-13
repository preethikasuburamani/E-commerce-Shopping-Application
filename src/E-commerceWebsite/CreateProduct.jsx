import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./CreateProduct.css"


const CreateProduct = () => {

    const[newProduct,setNewProduct]= useState({

"title": "",
"price": null,
"description": "",
"category": "",
"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
})

    

//function for handleChanage
 // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value, 
    }));
  }


//function to submit the product
function HandleSubmit(){
    fetch("https://fakestoreapi.com/products",{method:"POST",
                                                  headers:{"content-Type":"application/json"},
                                                  body:JSON.stringify(newProduct)
        })
        .then(alert("product submited sucessfully"))
    
    
        setNewProduct(
            {
"title": "",
"price": null,
"description": "",
"category": "",
"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
            }
        )
}



  return (
    <div className="postingProduct">
        <h1>Post your products here</h1>
        <form className="newProduct">
            <label>Titile of the product</label>
            <input type="text" name="title" value={newProduct.title} onChange={handleChange} />

            <label>Price of the product</label>
            <input type='text' name='price' value={newProduct.price} onChange={handleChange}/>

            <label>Description of the product</label>
            <textarea name='description' value={newProduct.description} onChange={handleChange}/>

            <label>category</label>
            <input type='text' name='category' value={newProduct.category} onChange={handleChange}/>

            <label>Image of the product</label>
            <p>For now setted a default img link for all the product we are adding</p>
            
            <button onClick={HandleSubmit}>Submit</button>
        </form>


    </div>
  )
}

export default CreateProduct