

// add item to cart
export const addItem = (product)=>{
        
    // axios.post("http://localhost:5000/saveCart",product)
    //     .then(res=>{
    //         console.log(res.data); 
            
    //       })
     
    return {
        type: "ADDITEM",
        payload: product
    }
}

// dedete item to cart
export const deleteItem = (id)=>{

    return {
        type: "DELITEM",
        payload: id
    }
}

// remove item 
export const removeItem = (item)=>{

    return {
        type: "REMOVE_ONE",
        payload: item
    }
}