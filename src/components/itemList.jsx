import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <h2>Cargando Espere...</h2>;
    }

    return (
        <div className="row">
            {items.map((item) => (
                <div key={item.id} className="col-md-4 mb-4">
                    <div className="card">
                    <img src={item.images} className="card-img-top" alt={item.name} />
                        <div className="card-body">
                            <h3 className="card-title">{item.name}</h3>
                            <p className="card-text">${item.price}</p>
                            <p className="card-text">{item.category}</p>
                            <Link to={`/item/${item.id}`} className="btn btn-primary">
                                Ver Detalles
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

ItemList.propTypes = {
    items: propTypes.array.isRequired,
    isLoading: propTypes.bool,
};

export default ItemList;

