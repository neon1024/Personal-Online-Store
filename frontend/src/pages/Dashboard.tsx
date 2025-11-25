import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";

import ProductCard from "../components/ProductCard";

import AddProductCard from "../components/AddProductCard";
import Product from "../models/Product";

function Dashboard() {
    const products = [
        new Product(
            "1",
            "Pui",
            "Food",
            "Pui",
            50,
            "RON",
            1,
            10,
            "kg",
            "../public/fat chicken.jpg"
        ),
        new Product(
            "2",
            "Pui",
            "Food",
            "Pui",
            50,
            "RON",
            1,
            10,
            "kg",
            "../public/fat chicken.jpg"
        ),
        new Product(
            "3",
            "Pui",
            "Food",
            "Pui",
            50,
            "RON",
            1,
            10,
            "kg",
            "../public/fat chicken.jpg"
        ),
        new Product(
            "4",
            "Pui",
            "Food",
            "Pui",
            50,
            "RON",
            1,
            10,
            "kg",
            "../public/fat chicken.jpg"
        ),
        new Product(
            "5",
            "Pui",
            "Food",
            "Pui",
            50,
            "RON",
            1,
            10,
            "kg",
            "../public/fat chicken.jpg"
        ),
        new Product(
            "6",
            "Pui",
            "Food",
            "Pui",
            50,
            "RON",
            1,
            10,
            "kg",
            "../public/fat chicken.jpg"
        ),
        new Product(
            "7",
            "Pui",
            "Food",
            "Pui",
            50,
            "RON",
            1,
            10,
            "kg",
            "../public/fat chicken.jpg"
        ),
        new Product(
            "8",
            "Pui",
            "Food",
            "Pui",
            50,
            "RON",
            1,
            10,
            "kg",
            "../public/fat chicken.jpg"
        ),
    ];

    return (
        <>
            <NavLink to={"/"}>Back</NavLink>
            <Typography>Dashboard</Typography>
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Grid key={product.getId()} size={3}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
                <AddProductCard />
            </Grid>
        </>
    );
}

export default Dashboard;
