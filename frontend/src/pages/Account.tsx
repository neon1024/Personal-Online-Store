import { Typography } from "@mui/material";

import { NavLink } from "react-router-dom";

function Account() {
    return (
        <>
            <NavLink to={"/"}>Back</NavLink>

            <Typography>Account</Typography>
        </>
    );
}

export default Account;
