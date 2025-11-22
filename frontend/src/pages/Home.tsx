import { Stack, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";

function Home() {
    return (
        <>
            <Typography>Home</Typography>
            <Stack>
                <NavLink to={"/account"}>Account</NavLink>
                <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </Stack>
        </>
    );
}

export default Home;
