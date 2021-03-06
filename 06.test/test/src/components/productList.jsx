import React,{useState} from 'react';
import ProductDisplay from './productDisplay';

const ProductList = () => {

    const [items,setItems] = useState([
        { id : 1, name : 'π', size: "Large", stock : 10},
        { id : 2, name : 'π', size: "Small", stock : 10},
        { id : 3, name : 'πΊ', size: "500cc", stock : 10}
    ]);

    const [wish, setWish] =useState(0)

    //μ₯λ°κ΅¬λμ μΆκ°νλ©΄ μ νν μμ΄νμ κ°μ νλ λ§μ΄λμ€!
    const addWish = (payload)=> {
        if(payload.stock > 0) {
        const id = payload.id
        setItems(items.map(item => id === item.id?{...item, stock : item.stock-1}:item)) 
        setWish(wish+1)
        }
    }

    return (
        <ul>
            <h2>π μ₯λ°κ΅¬λ  : {wish}</h2>
            {items.map((item)=>{
                return <ProductDisplay 
                    key={item.id} 
                    item={item}
                    addWish={addWish}
                />
            })}
        </ul>
    );
};

export default ProductList;