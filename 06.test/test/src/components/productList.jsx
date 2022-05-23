import React,{useState} from 'react';
import ProductDisplay from './productDisplay';

const ProductList = () => {

    const [items,setItems] = useState([
        { id : 1, name : '🍔', size: "Large", stock : 10},
        { id : 2, name : '🍟', size: "Small", stock : 10},
        { id : 3, name : '🍺', size: "500cc", stock : 10}
    ]);

    const [wish, setWish] =useState(0)

    //장바구니에 추가하면 선택한 아이템의 값을 하나 마이너스!
    const addWish = (payload)=> {
        if(payload.stock > 0) {
        const id = payload.id
        setItems(items.map(item => id === item.id?{...item, stock : item.stock-1}:item)) 
        setWish(wish+1)
        }
    }

    return (
        <ul>
            <h2>👜 장바구니  : {wish}</h2>
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