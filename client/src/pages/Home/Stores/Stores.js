import React, { useEffect, useState } from 'react';
import './Stores.css';

const Stores = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/photos`)
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, []);
    return (
        <div className='vc-container py-5'>
            <h1 className='pt-5 text-center'>Our Stores</h1>
            <div className="row m-0">
                {
                    photos.map(photo => <div className='col-lg-4 col-md-6 col-sm-6 g-5' key={photo._id}>
                        <div className="store text-center shadow">
                            <img src={photo.photo} alt="" />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Stores;