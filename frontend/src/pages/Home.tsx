import { Typography } from "@mui/material";

import { NavLink } from "react-router-dom";

function Home() {
    return (
        <>
            <Typography>Home</Typography>

            <NavLink to={"/account"}>Account</NavLink>
        </>
    );
}

export default Home;
