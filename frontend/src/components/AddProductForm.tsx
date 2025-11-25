import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";

import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";

import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";

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

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("0");
    const [currency, setCurrency] = useState("RON");
    const [quantity, setQuantity] = useState("0");
    const [weight, setWeight] = useState("0");
    const [unit, setUnit] = useState("Kg");
    const [imageUrl, setImageUrl] = useState("");

    async function handleAddProduct() {
        alert("ok");
    }

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
