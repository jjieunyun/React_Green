import React from 'react';

const ProductDisplay = (props) => {
    const handleIncreament =()=> {
        props.addWish(props.item)
        console.log(props.item)
        
    }

    return (
        <>
            <h3>{props.item.name}</h3>
            <p>{props.item.color}</p>
            <p>{props.item.stock}</p> 
            <button
                onClick={handleIncreament}
            >Add</button>
            <hr/>
        </>
    );
};

export default ProductDisplay;