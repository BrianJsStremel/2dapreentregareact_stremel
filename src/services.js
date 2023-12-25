const products = [
    { id: "1", name: "Sérum Facial L'Oréal Paris Retinol Revitalift Noche x 30 ml", price: 17500, category: "Bellesa", images: "/img/1.webp" },
    { id: "2", name: "Sérum Rellenador L'Oreal París Revitalift Ácido Hialurónico x 30 ml", price: 14800, category: "Bellesa",images:"/img/2.webp"},
    { id: "3", name: "Hidratante Facial en Gel Neutrogena Hydro Boost x 50 g", price: 14590, category: "Bellesa",images:"/img/3.webp" },
    { id: "4", name: "Máscara de Pestañas Maybelline Sensational Sky High Waterproof Very Black x 7,2 ml", price: 18100, category: "Bellesa",images:"/img/4.webp" },
    { id: "5", name: "Máscara de Pestañas Maybelline Lash Sensational Sky High Cosmic", price: 20100, category: "Bellesa",images:"/img/5.webp" },
    { id: "6", name: "Protector Solar Eucerin Oil Control Sun Gel Fps 50 x 50 ml Jordan 1 Low OG", price: 21700, category: "Bellesa",images:"/img/6.webp" },
    //Other Products
    { id: "7", name: "Leche Infantil Polvo Nutrilon Profutura 3 1+ Año x 800 g Saint-Germain", price: 13570, category: "Bebés",images:"/img/7.webp" },
    { id: "8", name: "Pañales Huggies Flexi Comfort Disney Talle RN x 34 Unidades Her itage", price: 6700, category: "Bebés",images:"/img//8.webp" },
    { id: "9", name: "Jordan Toallitas Húmedas Huggies Disney x 48 un - Variante sujeta a disponibilidad ", price: 6050, category: "Bebés",images:"/img/9.webp" },
];

// getProduct
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // buscamos el producto por id
            const product = products.find((p) => p.id === id);

            // si existe el producto
            if (product) {
                resolve(product);
            } else {
                reject("No existe el producto");
            }
        }, 1000);
    });
};

//getProducts () -> va a devolver todos los productos
//getProducts("Bellesa") -> va a devolver todos los productos de categoria Bellesa
//getProducts("Bebés") -> devuelve todos los productos con la categoria Bebés

export const getProducts = (category) => {

    return new Promise((resolve) => {
        setTimeout(() => {

            const productsFiltered = category
                ? products.filter((product) => product.category === category)
                : products;

            resolve(productsFiltered);
        }, 1000);
    });
};

