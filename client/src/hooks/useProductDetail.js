import { useEffect, useState } from "react";

const useProductDetail = id =>{
    const [product, setProduct] = useState({});
    useEffect(()=>{
        const url = `${process.env.REACT_APP_API}/inventory/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[product]);
    return [product, setProduct]
};

export default useProductDetail;