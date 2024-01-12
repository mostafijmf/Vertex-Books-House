import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddItem.css';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleAddNewItem = event =>{
        event.preventDefault();
        const email = user?.email;
        const name = event.target.name.value;
        const price = event.target.price.value;
        const img = event.target.img.value;
        const author = event.target.author.value;
        const publisher = event.target.publisher.value;
        const publish = event.target.publish.value;
        const description = event.target.description.value;
        const quantity = event.target.quantity.value;
        const addItem = {price, img, name, description, author, publisher, publish, quantity, email};

        fetch(`${process.env.REACT_APP_API}/items`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert('user add successfully');
            event.target.reset();
        })
    };
    return (
        <div className='vc-container'>
            <div className="row py-5">
                <div className="col-lg-3 col-md-2 col-sm-0"></div>
                <div className="col-lg-6 col-md-8 col-sm-12 restock shadow text-center">
                    <h2 className='vc-text2 vc-h1 mb-4'>Add Item</h2>
                    <form onSubmit={handleAddNewItem} className='restock-form'>
                        <input className='w-100' placeholder='Item Name' type="text" name="name" required/>
                        <input className='w-100' placeholder='Price' type="number" name="price" required/>
                        <input className='w-100' placeholder='Image URL' type="text" name="img" required/>
                        <input className='w-100' placeholder='Author Name' type="text" name="author" required/>
                        <input className='w-100' placeholder='Publisher Name' type="text" name="publisher" required/>
                        <input className='w-100' placeholder='Publish Date' type="text" name="publish" required/>
                        <input className='w-100' placeholder='Description' type="text" name="description" required/>
                        <input className='w-100' placeholder='Quantity' type="number" name="quantity" required/>
                        <div className="inventory-btn mt-5 mb-0">
                            <button type='submit' >Add New Item</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-3 col-sm-0 col-md-2"></div>
            </div>
        </div>
    );
};

export default AddItem;