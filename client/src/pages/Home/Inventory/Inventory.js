import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = (props) => {
    const { name, _id, price, img, author, description, publisher, publish, quantity } = props.product;
    const navigate = useNavigate();

    const handleStockUpdate = _id => {
        navigate(`/inventory/${_id}`)
    };

    return (
        <div className='inventory-info'>
            <div className='inventory-items vc-shadow'>
                <div className='vc-w-35 p-3'>
                    <img src={img} alt="" />
                </div>
                <div className='vc-w-65 p-3'>
                    <h2 className='vc-text2'>{name}</h2>
                    <p className='text-muted mb-0'>{description}</p>
                    <p className='vc-text1 author my-2'> <span></span> {author}</p>
                    <div>
                        <p className='fw-bold m-0'>Quantity: <span className='vc-text'>{quantity}</span></p>
                        <p className='fw-bold m-0'>Price: <span className='vc-text'>${price}</span></p>
                    </div>
                </div>
            </div>
            <div className="inventory-btn text-center">
                <button onClick={()=> handleStockUpdate(_id)}>Stock Update</button>
            </div>
        </div>
    );
};

export default Inventory;