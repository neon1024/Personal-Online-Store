import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import ImageUploading, { type ImageListType } from "react-images-uploading";

import { useEffect, useState } from "react";
import Product from "../models/Product";

interface EditProductFormProps {
    product: Product | null;
    updateProduct: (product: Product | null) => Promise<void>;
    visibility: boolean;
    toggleVisibility: () => void;
}

function EditProductForm({
    product,
    updateProduct,
    visibility,
    toggleVisibility,
}: EditProductFormProps) {
    const currencies = ["RON", "EUR"];
    const units = ["g", "Kg", "ml", "L"];
    const MAX_NUMBER_OF_IMAGES_TO_UPLOAD_PER_PRODUCT = 8;

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState<number | string>(0);
    const [currency, setCurrency] = useState("RON");
    const [quantity, setQuantity] = useState<number | string>(0);
    const [weight, setWeight] = useState<number | string>(0);
    const [unit, setUnit] = useState("Kg");
    const [images, setImages] = useState<{ dataURL: string }[]>([]);

    useEffect(() => {
        if (product) {
            setName(product.getName());
            setCategory(product.getCategory());
            setDescription(product.getDescription());
            setPrice(product.getPrice());
            setCurrency(product.getCurrency());
            setQuantity(product.getQuantity());
            setWeight(product.getWeight());
            setUnit(product.getUnit());
            setImages(
                product.getImageUrl()
                    ? [{ dataURL: product.getImageUrl() }]
                    : []
            );
        }
    }, [product]);

    const handleImageUpload = (imageList: ImageListType) => {
        setImages(imageList as { dataURL: string }[]);
    };

    // TODO validate numbers
    const handleUpdateProduct = async () => {
        if (!product) return;

        const updatedProduct = new Product(
            product.getId(),
            name,
            category,
            description,
            Number(price),
            currency,
            Number(quantity),
            Number(weight),
            unit,
            product.getImageUrl()
        );

        await updateProduct(updatedProduct);

        toggleVisibility();
    };

    return (
        <Dialog
            open={visibility}
            onClose={toggleVisibility}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle>Editare Produs</DialogTitle>
            <DialogContent>
                <form
                    id="edit-product-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleUpdateProduct();
                    }}
                >
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        label="Nume"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        margin="dense"
                        label="Categorie"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />

                    <TextField
                        margin="dense"
                        label="Descriere"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <Stack direction="row" spacing={2} mt={2}>
                        <TextField
                            label="Pret"
                            type="number"
                            variant="standard"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            sx={{ flex: 4 }}
                        />
                        <Select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            sx={{ flex: 1, textAlign: "center" }}
                            variant="standard"
                        >
                            {currencies.map((c) => (
                                <MenuItem key={c} value={c}>
                                    {c}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>

                    <TextField
                        label="Cantitate"
                        type="number"
                        variant="standard"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        fullWidth
                        margin="dense"
                        sx={{ mt: 2 }}
                    />

                    <Stack direction="row" spacing={2} mt={2}>
                        <TextField
                            label="Greutate"
                            type="number"
                            variant="standard"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            sx={{ flex: 4 }}
                        />
                        <Select
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            sx={{ flex: 1, textAlign: "center" }}
                            variant="standard"
                        >
                            {units.map((u) => (
                                <MenuItem key={u} value={u}>
                                    {u}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>

                    {/* TODO drag to order */}
                    <Box sx={{ paddingTop: 2 }}>
                        <ImageUploading
                            multiple
                            value={images}
                            onChange={handleImageUpload}
                            maxNumber={
                                MAX_NUMBER_OF_IMAGES_TO_UPLOAD_PER_PRODUCT
                            }
                            onError={() => alert("Maxim 8 poze")}
                        >
                            {({
                                imageList,
                                onImageUpload,
                                onImageRemoveAll,
                                // onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps,
                            }) => (
                                <Grid container spacing={2}>
                                    <Box
                                        sx={{
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "space-evenly",
                                            flexWrap: "wrap",
                                            pt: 2,
                                            pb: 2,
                                        }}
                                    >
                                        {/* Upload */}
                                        <Button
                                            onClick={onImageUpload}
                                            variant="contained"
                                            {...dragProps}
                                            sx={{
                                                px: 3,
                                                py: 1.2,
                                                borderRadius: 4,
                                                fontSize: 15,
                                                textTransform: "none",
                                                boxShadow: 2,
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1.2,
                                                transition: "0.18s",
                                                ...(isDragging && {
                                                    color: "dodgerblue",
                                                }),

                                                "&:hover": {
                                                    boxShadow: 6,
                                                    transform: "scale(1.04)",
                                                },
                                            }}
                                        >
                                            <AddPhotoAlternateIcon fontSize="large" />
                                            <Typography fontSize={16}>
                                                Adauga poza
                                            </Typography>
                                        </Button>

                                        {/* Remove All */}
                                        <Button
                                            onClick={onImageRemoveAll}
                                            variant="outlined"
                                            sx={{
                                                px: 3,
                                                py: 1.2,
                                                borderRadius: 4,
                                                fontSize: 15,
                                                textTransform: "none",
                                                borderWidth: 1.5,
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1.2,
                                                transition: "0.18s",

                                                "&:hover": {
                                                    boxShadow: 6,
                                                    transform: "scale(1.04)",
                                                    borderColor: "crimson",
                                                    "& svg": {
                                                        color: "crimson",
                                                    },
                                                },
                                            }}
                                        >
                                            <DeleteSweepIcon fontSize="large" />
                                            <Typography fontSize={16}>
                                                Elimina toate pozele
                                            </Typography>
                                        </Button>
                                    </Box>

                                    {imageList.map((image, index) => (
                                        <Grid key={index} size={3}>
                                            <Box
                                                sx={{
                                                    position: "relative",
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: 2,
                                                    overflow: "hidden",
                                                    borderWidth: 1,
                                                    borderStyle: "solid",
                                                }}
                                            >
                                                <img
                                                    src={image.dataURL}
                                                    alt={`Imagine ${index + 1}`}
                                                    title={`Imagine ${
                                                        index + 1
                                                    }`}
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                        display: "block",
                                                    }}
                                                />

                                                <IconButton
                                                    onClick={() =>
                                                        onImageRemove(index)
                                                    }
                                                    sx={{
                                                        position: "absolute",
                                                        top: 8,
                                                        right: 8,
                                                        backgroundColor:
                                                            "rgba(0,0,0,0.55)",
                                                        color: "white",
                                                        borderRadius: 2,

                                                        transition:
                                                            "box-shadow 180ms ease, background-color 180ms ease",

                                                        "&:hover": {
                                                            backgroundColor:
                                                                "rgba(0,0,0,0.75)",
                                                            boxShadow:
                                                                "0 8px 24px rgba(255, 0, 0, 0.55)",
                                                            "& svg": {
                                                                color: "red",
                                                            },
                                                        },
                                                    }}
                                                >
                                                    <DeleteIcon fontSize="small" />
                                                </IconButton>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            )}
                        </ImageUploading>
                    </Box>
                </form>
            </DialogContent>

            <DialogActions sx={{ justifyContent: "space-evenly" }}>
                <Button variant="outlined" onClick={toggleVisibility}>
                    Anuleaza
                </Button>
                <Button
                    type="submit"
                    form="edit-product-form"
                    variant="contained"
                >
                    Salveaza
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditProductForm;
