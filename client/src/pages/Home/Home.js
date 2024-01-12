import React from 'react';
import './Home.css';
import banner from './../../images/banner.jpg';
import useProducts from '../../hooks/useProducts';
import Inventory from './Inventory/Inventory';
import { useNavigate } from 'react-router-dom';
import Stores from './Stores/Stores';
import Contact from './Contact/Contact';
import Spinner from '../Shared/Spinner/Spinner';

const Home = () => {
    const [products, setProducts] = useProducts([]);
    console.log(products);

    const products6 = products.slice(0,6);

    const navigate = useNavigate();

    const handleManageInventories = () => {
        navigate('/manageInventory')
    };

    return (
        <div>
            <section className="banner text-center">
                <div className="banner-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-0 col-sm-1"></div>
                            <div className="col-md-12 col-sm-10">
                                <p className='fs-1'>Get great deals every day at <span className='d-block vc-text1'>The Vertex Books House.</span></p>
                            </div>
                            <div className="col-md-0 col-sm-1"></div>
                        </div>
                    </div>
                </div>
                <img className='w-100 h-100' src={banner} alt="" />
            </section>
            <section className='vc-container pt-5'>
                <h1 className='mb-5 vc-text2 vc-h1 text-center'>Inventory Items</h1>
                { !products ? <Spinner></Spinner> : ''}
                <div className="inventory">
                    {
                        products6.map(product => <Inventory key={product._id} product={product}></Inventory>)
                    }
                </div>
                <div className='d-block text-center inventory-btn mt-5 pt-4'>
                    <button onClick={()=> handleManageInventories()}>Manage Inventories</button>
                </div>
            </section>
            <Stores></Stores>
            <Contact></Contact>
        </div>
    );
};

export default Home;