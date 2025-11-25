import { Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Product from "../models/Product";

interface ProductCardProps {
    product: Product | null;
}

function ProductCard({ product }: ProductCardProps) {
    return (
        <>
            <Card variant="outlined" sx={{ width: 300, height: 400 }}>
                <CardContent>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={product?.getImageUrl()}
                        title={product?.getName()}
                    />
                    <Typography>Nume: {product?.getName()}</Typography>
                    <Typography>Categorie: {product?.getCategory()}</Typography>
                    <Typography>
                        Descriere: {product?.getDescription()}
                    </Typography>
                    <Typography>
                        Pret:{" "}
                        {product?.getPrice() + " " + product?.getCurrency()}
                    </Typography>
                    <Typography>Cantitate: {product?.getQuantity()}</Typography>
                    <Typography>
                        Greutate:{" "}
                        {product?.getWeight() + "" + product?.getUnit()}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default ProductCard;
