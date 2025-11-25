import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

import ProductCard from "../components/ProductCard";

import Product from "../models/Product";

function Dashboard() {
    const products = [
        new Product("1", "Pui", "Food", "Pui", 50, "RON", 1, 10, "kg", ""),
        new Product("2", "Pui", "Food", "Pui", 50, "RON", 1, 10, "kg", ""),
        new Product("3", "Pui", "Food", "Pui", 50, "RON", 1, 10, "kg", ""),
        new Product("4", "Pui", "Food", "Pui", 50, "RON", 1, 10, "kg", ""),
        new Product("5", "Pui", "Food", "Pui", 50, "RON", 1, 10, "kg", ""),
        new Product("6", "Pui", "Food", "Pui", 50, "RON", 1, 10, "kg", ""),
        new Product("7", "Pui", "Food", "Pui", 50, "RON", 1, 10, "kg", ""),
        new Product("8", "Pui", "Food", "Pui", 50, "RON", 1, 10, "kg", ""),
    ];

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: (theme.vars ?? theme).palette.text.secondary,
        ...theme.applyStyles("dark", {
            backgroundColor: "#1A2027",
        }),
    }));

    return (
        <>
            <NavLink to={"/"}>Back</NavLink>
            <Typography>Dashboard</Typography>
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Grid key={product.getId()} size={2}>
                        <Item>
                            <Typography>{product.getName()}</Typography>
                            <Typography>{product.getQuantity()}</Typography>
                        </Item>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Dashboard;
