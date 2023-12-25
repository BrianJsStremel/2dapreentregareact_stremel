import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services";
import ItemList from "./itemList";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryId } = useParams();


    useEffect(() => {
        setIsLoading(true);
        console.log("Category ID:", categoryId);
    
        getProducts(categoryId).then((response) => {
            console.log("Products:", response);
            setItems(response);
            setIsLoading(false);
        });
    }, [categoryId]);

    return <ItemList items={items} isLoading={isLoading} />;
};

export default ItemListContainer;