import React, { useState } from 'react';
import {connect} from 'react-redux';
import { AddProduct } from './action';
import { RemoveProduct } from './action';

const Card = ({products, AddProduct, RemoveProduct}) => {
    const [item, setItem] = useState("");

    const submitHandler = async(e) =>{
        e.preventDefault();
        if(item !== ""){
            await AddProduct({name: item});
            setItem("");
        }
        setItem("");
    }
    return (
        <center>
            <div className='card' style={{"width": "18rem"}}>
                <div className='card-body'>
                    <form onSubmit={submitHandler}>
                        <input type="text" placeholder='Add Products' value={item} onChange={(e) => setItem(e.target.value)} /><br />
                        <button type="submit" className="btn btn-success">
                            Add Product 
                        </button> 
                    </form>
                    <br />
                    {products.map(product => {
                        return(
                            <div className='item'>
                                {product.name}
                                <span onClick={()=> RemoveProduct(product.name)} className="badge square-pill bg-danger" style={{"float": "right","padding":"6px 10px 6px 10px"}}>X</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </center>
    );
}
const mapStateToProps = (state) => ({
        products: state
})
export default connect(mapStateToProps, {AddProduct, RemoveProduct})(Card);