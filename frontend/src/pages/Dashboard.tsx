import {
    Box,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

function Dashboard() {
    const data = [
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
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
                {data.map((item) => (
                    <Grid key={item.id} size={2}>
                        <Item>
                            <Typography>{item.name}</Typography>
                            <Typography>{item.quantity}</Typography>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Dashboard;
