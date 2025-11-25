import { Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Product from "../models/Product";

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    return <Typography>Product</Typography>;
}

export default ProductCard;
