import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProductDetail from '../../../hooks/useProductDetail';
import './InventoryDetail.css';

const InventoryDetail = () => {
    const [restock, setRestock] = useState(0);
    const { id } = useParams();
    const [product] = useProductDetail(id);
    const { name, _id, price, img, author, description, publisher, publish, quantity } = product;

    const handleRestockBlur = event => {
        setRestock(event.target.value)
    };

    const handleRestock = quantity => {
        const number = parseInt(quantity) + parseInt(restock);
        const url = `${process.env.REACT_APP_API}/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ number })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

    const handleDelivered = quantity => {
        const number = quantity - 1;
        const url = `${process.env.REACT_APP_API}/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ number })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

    const navigate = useNavigate();
    const handleManageInventories = () =>{
        navigate('/manageInventory')
    };

    return (
        <div className='vc-container py-1'>
            <div className="row my-5">
                <div className="col-xl-0 col-lg-0"></div>
                <div className="col-xl-12 col-lg-12">
                    <div className="detail shadow p-5 d-flex justify-content-between">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-12">
                                <div className='detail-img text-center'>
                                    <div>
                                        <img src={img} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7  col-md-12">
                                <div className='detail-info'>
                                    <h2>{name}</h2>
                                    <p className='d-description'>{description}</p>
                                    <p className='vc-text1 author fw-bold m-0'> <span></span>{author}</p>
                                    <ul>
                                        <li><i class="fa-solid fa-angles-right me-2 vc-text1"></i>Publisher : <span>{publisher}</span></li>
                                        <li><i class="fa-solid fa-angles-right me-2 vc-text1"></i>Publish : <span>{publish}</span></li>
                                        <li><i class="fa-solid fa-angles-right me-2 vc-text1"></i>Quantity : <span>{quantity}</span></li>
                                        <li><i class="fa-solid fa-angles-right me-2 vc-text1"></i>Price : <span>{price}</span></li>
                                    </ul>
                                    <div className="inventory-btn mt-5 mb-0">
                                        <button onClick={() => handleDelivered(quantity)}>Delivered</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-0 col-lg-0"></div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-2 col-sm-0"></div>
                <div className="col-lg-6 col-md-8 col-sm-12 restock text-center">
                    <h2 className='vc-text2 vc-h1 mb-4'>Restock the items</h2>
                    <form className='restock-form'>
                        <input onBlur={handleRestockBlur} className='w-100' placeholder='Enter amount' type="number" name="number" />
                    </form>
                    <div className="inventory-btn mt-5 mb-0">
                        <button onClick={() => handleRestock(quantity)}>Restock</button>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-0 col-md-2"></div>
            </div>
            <div className='d-block text-center inventory-btn mt-5 pt-4'>
                <button onClick={()=> handleManageInventories()}>Manage Inventories</button>
            </div>
        </div>
    );
};

export default InventoryDetail;