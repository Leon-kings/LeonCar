// import  { useEffect, useState } from 'react';
import Products from "../../components/Cart/components/Products";
const DataFetcher = () => {
    fetch("DumyData.json")
        .then(response => response.json())
        .then(data => showInfo(data));

    function showInfo(data) {
        console.log(data.products);
    }

    return (

        <div>
            {Products.map((product) => (

                <div className="container" key={1}>
                    <table className="table">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>IMAGE</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td><img src={product.thumbnail} alt={product.title} className='rounded-md h-53 w-60' /></td>
                            <td>{product.price}</td>
                            <td></td>
                        </tr>
                    </table>
                </div>


            ))}

        </div>
    )
}
export default DataFetcher;