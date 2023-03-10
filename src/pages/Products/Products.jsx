import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted = true) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    //Componente "Loading"
    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <i className="fa fa-spinner" aria-hidden="true"></i> Loading...
                </div>
            </>
        )
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((product) => product.category === cat);
        setFilter(updatedList);
    }

    //Componente Show Products
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark ms-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark ms-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark ms-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark ms-2" onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className='col-md-3 mb-4'>
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                        <p className="card-text lead fw-bold">R${product.price}</p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Details</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Produtos</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products
