import {
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
import { NavLink } from "react-router-dom";

function Dashboard() {
    const data = [
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
        { id: 1, name: "Pui", quantity: 10 },
    ];

    return (
        <>
            <NavLink to={"/"}>Back</NavLink>
            <Typography>Dashboard</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Checkbox />
                            </TableCell>
                            <TableCell align="center">Nume</TableCell>
                            <TableCell align="center">Cantitate</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell align="center">
                                    {item.name}
                                </TableCell>
                                <TableCell align="center">
                                    {item.quantity}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Dashboard;
