import products from "./products";

const categories = [
    {
        id: 1,
        title: "Tất cả",
        recipes: products,
    },
    {
        id: 2,
        title: "Shounen",
        recipes: [...products.slice(4, 8)],
    },
    {
        id: 3,
        title: "Ecchi",
        recipes: [...products.slice(3, 7)],
    },
    {
        id: 4,
        title: "Comedy",
        recipes: [...products.slice(2, 6)],
    },
];

export default categories;