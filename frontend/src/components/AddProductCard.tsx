import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import AddProductForm from "./AddProductForm";

import Product from "../models/Product";

interface AddProductCardProps {
    addProduct: (product: Product) => Promise<string>;
    uploadImages: (
        images: { file: File; dataURL: string }[],
        productId: string
    ) => Promise<void>;
}

function AddProductCard({ addProduct, uploadImages }: AddProductCardProps) {
    const [addProductFormVisibility, setAddProductFormVisibility] =
        useState(false);
    const toggleAddProductFormVisibility = () => {
        setAddProductFormVisibility((prev) => !prev);
    };
    const handleAddProduct = () => {
        toggleAddProductFormVisibility();
    };
    return (
        <>
            <AddProductForm
                addProduct={addProduct}
                uploadImages={uploadImages}
                visibility={addProductFormVisibility}
                toggleVisibility={toggleAddProductFormVisibility}
            />
            <Card
                variant="outlined"
                sx={{
                    width: 300,
                    height: 450,
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transition: "box-shadow 300ms ease-in-out",
                    "&:hover": {
                        boxShadow: "0px 0px 16px 4px rgba(97, 219, 251, 1)",
                        "& svg": { color: "rgba(97, 219, 251, 1)" },
                    },
                }}
            >
                <CardActionArea
                    sx={{ height: "100%" }}
                    onClick={() => handleAddProduct()}
                >
                    <CardContent sx={{ height: "100%" }}>
                        <Box
                            sx={{
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <AddIcon sx={{ fontSize: 32 }} />
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}
export default AddProductCard;
