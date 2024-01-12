import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    console.log(myItems)
    useEffect(() => {  
        const email = user?.email;
        const url = `${process.env.REACT_APP_API}/items?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data));
    }, [user]);

    const handleRemoveItems = _id => {
        const confirm = window.confirm('Are you sure?')
        if (confirm) {
            const url = `${process.env.REACT_APP_API}/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = myItems.filter(myItem => myItem._id !== _id);
                        setMyItems(remaining);
                    }
                });
        };
    };

    return (
        <div>
            <section className='vc-container pt-5'>
                <h1 className='mb-5 vc-text2 vc-h1 text-center'>My Items</h1>
                <div className="inventory">
                    {
                        myItems.map(myItem => <div key={myItem._id} className='inventory-info'>
                            <div className='inventory-items vc-shadow'>
                                <div className='vc-w-35 p-3'>
                                    <img src={myItem.img} alt="" />
                                </div>
                                <div className='vc-w-65 p-3'>
                                    <h2 className='vc-text2'>{myItem.name}</h2>
                                    <p className='text-muted mb-0'>{myItem.description}</p>
                                    <p className='vc-text1 author my-2'> <span></span> {myItem.author}</p>
                                    <div>
                                        <p className='fw-bold m-0'>Quantity: <span className='vc-text'>{myItem.quantity}</span></p>
                                        <p className='fw-bold m-0'>Price: <span className='vc-text'>${myItem.price}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="inventory-btn text-center">
                                <button onClick={() => handleRemoveItems(myItem._id)}>Remove Items</button>
                            </div>
                        </div>)
                    }
                </div>
            </section>
        </div>
    );
};

export default MyItems;