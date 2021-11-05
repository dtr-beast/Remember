import {Button, Typography, Toolbar, AppBar, Box} from "@mui/material";
import {Link} from "react-router-dom"
import React from "react";

export default function Navbar() {
    return <Box sx={{flexGrow: 1}}>
        <AppBar position="static" style={{backgroundColor: "#ADE8F4"}} elevation={0}>
            <Toolbar>
                <Typography variant="h6" component="div"
                            sx={{flexGrow: 1, color: "#00f", fontFamily: "Lemonada", fontSize: "30px"}}>
                    Remember
                </Typography>
                <Link to="/login" style={{textDecoration: "none"}}>
                    <Button style={{textTransform: "none"}}>
                        <Typography variant="h6" color="inherit" component="div"
                                    style={{fontVariant: "small-caps", fontWeight: "bold"}}>
                            Login
                        </Typography>
                    </Button>
                </Link>
                <Button style={{
                    textTransform: "none",
                    backgroundColor: "#0077B6",
                    borderRadius: 10,
                    marginLeft: 20,
                    marginRight: 40
                }}>
                    <Typography variant="h6" color="inherit" component="div"
                                style={{fontVariant: "small-caps", fontWeight: "bold", color: "white"}}>
                        Sign Up
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    </Box>;
}