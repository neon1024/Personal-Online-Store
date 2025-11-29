import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";

import ProductCard from "../components/ProductCard";

import AddProductCard from "../components/AddProductCard";
import Product from "../models/Product";

import { useState } from "react";

import { useEffect } from "react";

function Dashboard() {
    const [products, setProducts] = useState<Product[]>([]);

    async function getProducts() {
        const response = await fetch(`http://localhost:8080/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        const products = data.map(
            (item: any) =>
                new Product(
                    item["id"],
                    item["name"],
                    item["category"],
                    item["description"],
                    item["price"],
                    item["currency"],
                    item["quantity"],
                    item["weight"],
                    item["unit"],
                    item["imageUrl"]
                )
        );

        setProducts(products);
    }

    useEffect(() => {
        getProducts();
    }, []);

    async function onDeleteProduct(product: Product | null) {
        if (!product) return;

        // Remove from UI immediately
        setProducts((prev) =>
            prev.filter((p) => p.getId() !== product.getId())
        );

        // Then delete on backend
        const response = await fetch(
            `http://localhost:8080/products/${product.getId()}`,
            { method: "DELETE" }
        );

        const data = await response.json();

        if (!data) {
            console.log("Delete failed");
            // Optionally refetch or restore state
            await getProducts();
        }
    }

    async function onEditProduct(product: Product | null) {
        // TODO

        await getProducts();
    }

    return (
        <>
            <NavLink to={"/"}>Back</NavLink>
            <Typography>Dashboard</Typography>
            <Grid container spacing={2} wrap="wrap" justifyContent="flex-start">
                {products?.map((product) => (
                    <Grid key={product.getId()} sx={{ width: 300 }}>
                        <ProductCard
                            product={product}
                            onEdit={() => onEditProduct(product)}
                            onDelete={() => onDeleteProduct(product)}
                        />
                    </Grid>
                ))}
                <Grid sx={{ width: 300 }}>
                    <AddProductCard />
                </Grid>
            </Grid>
        </>
    );
}

export default Dashboard;
