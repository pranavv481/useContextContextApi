import React, { useContext } from 'react'
import { shopContext } from "../Contexts/ShopContext";
const ShowProducts = () => {
    const myData = useContext(shopContext);
    const {products} = myData
    return (
        <div>
            <h1>Show Products</h1>
            {products.map(data => (

                <div key={data.id}>
                    <h3>{data.name}</h3>
                    <h3>{data.price}</h3>
                </div>
            ))}
        </div>
    )

}

export default ShowProducts
