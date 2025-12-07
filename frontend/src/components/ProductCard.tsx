import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";

import Product from "../models/Product";

import { useState } from "react";
import EditProductForm from "./EditProductForm";

interface ProductCardProps {
    product: Product | null;
    onEdit: (product: Product | null) => Promise<void>;
    onDelete: (product: Product | null) => Promise<void>;
}

function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
    const [editProductFormVisibility, setEditProductFormVisibility] =
        useState(false);

    const toggleEditProductFormVisibility = () => {
        setEditProductFormVisibility((prev) => !prev);
    };

    if (!product) return null;

    return (
        <>
            <EditProductForm
                product={product}
                updateProduct={onEdit}
                visibility={editProductFormVisibility}
                toggleVisibility={toggleEditProductFormVisibility}
            />
            <Card
                variant="outlined"
                sx={{
                    width: 300,
                    height: 450,
                    borderRadius: 4,
                    overflow: "hidden",
                    transition: "0.25s",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: 5,
                    },
                }}
            >
                {/* Image */}
                <CardMedia
                    // TODO
                    image={""}
                    title={product.getName()}
                    sx={{
                        height: 150,
                        width: "100%",
                        objectFit: "cover",
                        borderBottom: "1px solid rgba(0,0,0,0.12)",
                    }}
                />

                {/* Content */}
                <CardContent sx={{ flexGrow: 1, px: 2, pt: 1 }}>
                    <Stack spacing={0.5}>
                        <Typography
                            fontSize={20}
                            fontWeight={600}
                            sx={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            title={product.getName()}
                        >
                            {product.getName()}
                        </Typography>

                        <Typography
                            fontSize={14}
                            color="text.secondary"
                            sx={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            title={product.getCategory() || "Fara categorie"}
                        >
                            {product.getCategory() || "Fara categorie"}
                        </Typography>

                        <Typography
                            fontSize={14}
                            sx={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            title={product.getDescription() || "Fara descriere"}
                        >
                            {product.getDescription() || "Fara descriere"}
                        </Typography>

                        <Typography
                            fontSize={16}
                            fontWeight={700}
                            sx={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            title={`${product.getPrice()} ${product.getCurrency()}`}
                        >
                            {product.getPrice()} {product.getCurrency()}
                        </Typography>

                        <Typography
                            fontSize={14}
                            sx={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            title={`Cantitate: ${product.getQuantity()}`}
                        >
                            Cantitate: {product.getQuantity()}
                        </Typography>

                        <Typography
                            fontSize={14}
                            sx={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            title={`Greutate: ${product.getWeight()} ${product.getUnit()}`}
                        >
                            Greutate: {product.getWeight()} {product.getUnit()}
                        </Typography>
                    </Stack>
                </CardContent>

                {/* Buttons Section */}
                <Box sx={{ pb: 2, pt: 1 }}>
                    <Stack direction="row" justifyContent="space-evenly">
                        <Tooltip title="Editeaza">
                            <IconButton
                                size="large"
                                onClick={toggleEditProductFormVisibility}
                                sx={{
                                    borderRadius: 4,
                                    backgroundColor: "rgba(255, 255, 0, 0.15)",
                                    "&:hover": {
                                        backgroundColor:
                                            "rgba(255, 255, 0, 0.35)",
                                        "& svg": { color: "black" },
                                    },
                                    "&:focus": { outline: "none" },
                                }}
                            >
                                <EditIcon />
                                <Typography fontSize={12}>Editeaza</Typography>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Sterge" arrow>
                            <IconButton
                                size="large"
                                onClick={() => onDelete(product)}
                                sx={{
                                    borderRadius: 4,
                                    backgroundColor: "rgba(255,0,0,0.05)",
                                    "&:hover": {
                                        backgroundColor: "rgba(255,0,0,0.15)",
                                        "& svg": { color: "red" },
                                    },
                                    "&:focus": { outline: "none" },
                                }}
                            >
                                <DeleteIcon />
                                <Typography fontSize={12}>Sterge</Typography>
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Box>
            </Card>
        </>
    );
}

export default ProductCard;
