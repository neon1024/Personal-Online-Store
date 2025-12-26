import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";

import ProductCard from "../components/ProductCard";

import AddProductCard from "../components/AddProductCard";
import Product from "../models/Product";

import { useState } from "react";

import { useEffect } from "react";

import Image from "../models/Image";

function Dashboard() {
    const [products, setProducts] = useState<Product[]>([]);

    // TODO make controllers

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
                    item["unit"]
                )
        );

        setProducts(products);
    }

    useEffect(() => {
        getProducts();
    }, []);

    async function postProduct(product: Product): Promise<string> {
        // optimistically update products
        setProducts((prev) => [...prev, product]);

        const response = await fetch("http://localhost:8080/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });

        const data = await response.json();

        console.log(data);

        await getProducts();

        return data.id;
    }

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

    // TODO
    async function updateProduct(product: Product | null) {
        if (!product) return;

        console.log(product);

        // optimistically update UI
        setProducts((prev) =>
            prev.map((p) => (p.getId() === product.getId() ? product : p))
        );

        // update on backend
        const response = await fetch(
            `http://localhost:8080/products/${product.getId()}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            }
        );

        const data = await response.json();

        console.log(data);

        await getProducts();
    }

    async function postImages(
        images: { file: File; dataURL: string }[],
        productId: string
    ) {
        if (images.length === 0) return;

        const formData = new FormData();
        images.forEach((img) => formData.append("images", img.file));

        const response = await fetch(
            `http://localhost:8080/images/${productId}`,
            {
                method: "POST",
                body: formData, // Content-Type is automatically set to multipart/form-data
            }
        );

        if (!response.ok) {
            throw new Error("Failed to upload images");
        }

        const data = await response.json();

        console.log(data);
    }

    async function getImagesByProductId(productId: string) {
        const response = await fetch(
            `http://localhost:8080/images/${productId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response) {
            throw new Error("Failed retrieving the images");
        }

        const data = await response.json();

        const images: Image[] = data.map(
            (item: any) =>
                new Image(
                    item.id,
                    productId,
                    item.publicId,
                    item.url,
                    item.position
                )
        );

        return images;
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
                            onEdit={updateProduct}
                            onDelete={onDeleteProduct}
                            onGetImages={getImagesByProductId}
                        />
                    </Grid>
                ))}
                <Grid sx={{ width: 300 }}>
                    <AddProductCard
                        addProduct={postProduct}
                        uploadImages={postImages}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default Dashboard;
