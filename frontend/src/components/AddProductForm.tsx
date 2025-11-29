import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";

import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";

import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";

import ImageUploading, { type ImageListType } from "react-images-uploading";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

import Box from "@mui/material/Box";

import { useState } from "react";

interface AddProductFormProps {
    visibility: boolean;
    toggleVisibility: () => void;
}

function AddProductForm({ visibility, toggleVisibility }: AddProductFormProps) {
    const currencies = [
        {
            value: "RON",
            label: "RON",
        },
        {
            value: "EUR",
            label: "EUR",
        },
    ];

    const units = [
        {
            value: "g",
            label: "g",
        },
        {
            value: "Kg",
            label: "Kg",
        },
        {
            value: "ml",
            label: "ml",
        },
        {
            value: "L",
            label: "L",
        },
    ];

    const MAX_NUMBER_OF_IMAGES_TO_UPLOAD_PER_PRODUCT = 8;

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("0");
    const [currency, setCurrency] = useState("RON");
    const [quantity, setQuantity] = useState("0");
    const [weight, setWeight] = useState("0");
    const [unit, setUnit] = useState("Kg");
    const [imageUrl, setImageUrl] = useState("");

    // TODO
    async function handleAddProduct() {
        alert("ok");
    }

    const [images, setImages] = useState([]);

    // TODO
    const handleImageUpload = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        // TODO save only the URLs
        setImages(imageList as never[]);
    };

    return (
        <>
            <Dialog open={visibility} onClose={() => toggleVisibility()}>
                <DialogTitle>Adaugare Produs</DialogTitle>
                <DialogContent>
                    <form
                        onSubmit={() => handleAddProduct()}
                        id="add-product-form"
                    >
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            label="Nume"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                (
                                    e.target as HTMLInputElement
                                ).setCustomValidity(""); // reset
                            }}
                            onInvalid={(e) => {
                                (
                                    e.target as HTMLInputElement
                                ).setCustomValidity(
                                    "Produsul trebuie sa aiba un nume"
                                );
                            }}
                        />
                        <TextField
                            id="category"
                            label="Categorie"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            type="text"
                            variant="standard"
                            margin="dense"
                            fullWidth
                        />
                        <TextField
                            id="description"
                            label="Descriere"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            variant="standard"
                            margin="dense"
                            fullWidth
                        />
                        <Stack direction={"row"} spacing={2} display={"flex"}>
                            <TextField
                                sx={{ flex: 4 }}
                                id="price"
                                label="Pret"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                type="text"
                                variant="standard"
                                margin="dense"
                                fullWidth
                            />
                            <Select
                                sx={{ flex: 1, textAlign: "center" }}
                                labelId="select-currency"
                                id="currency"
                                label="Moneda"
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                variant="standard"
                            >
                                {currencies.map((currency) => (
                                    <MenuItem value={currency.value}>
                                        {currency.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Stack>
                        <TextField
                            id="quantity"
                            label="Cantitate"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            type="text"
                            variant="standard"
                            margin="dense"
                            fullWidth
                        />
                        <Stack direction={"row"} spacing={2} display={"flex"}>
                            <TextField
                                sx={{ flex: 4 }}
                                id="weight"
                                label="Greutate"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                type="text"
                                variant="standard"
                                margin="dense"
                                fullWidth
                            />
                            <Select
                                sx={{ flex: 1, textAlign: "center" }}
                                labelId="select-unit"
                                id="unit"
                                label="Unitate"
                                value={unit}
                                onChange={(e) => setUnit(e.target.value)}
                                variant="standard"
                            >
                                {units.map((unit) => (
                                    <MenuItem value={unit.value}>
                                        {unit.label}
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
                                                        transform:
                                                            "scale(1.04)",
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
                                                        transform:
                                                            "scale(1.04)",
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
                                                        borderRadius: 4,
                                                        overflow: "hidden",
                                                        borderWidth: 1,
                                                        borderStyle: "solid",
                                                    }}
                                                >
                                                    <img
                                                        src={image.dataURL}
                                                        alt={`Imagine ${
                                                            index + 1
                                                        }`}
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
                                                            position:
                                                                "absolute",
                                                            top: 8,
                                                            right: 8,
                                                            backgroundColor:
                                                                "rgba(0,0,0,0.55)",
                                                            color: "white",
                                                            borderRadius: 4,

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
                <DialogActions
                    sx={{
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}
                >
                    <Button
                        size="large"
                        variant="outlined"
                        sx={{ textAlign: "center" }}
                        onClick={() => toggleVisibility()}
                    >
                        Anuleaza
                    </Button>
                    <Button
                        size="large"
                        variant="contained"
                        sx={{ textAlign: "center" }}
                        type="submit"
                        form="add-product-form"
                    >
                        Adauga
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AddProductForm;
