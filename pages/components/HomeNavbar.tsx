import {Button, Typography, Toolbar, AppBar, Box} from "@mui/material";
import React from "react";

import Link from 'next/link'

export default function HomeNavbar() {

    return <Box sx={{flexGrow: 1}}>
        <AppBar position="static" elevation={0} color="transparent">
            <Toolbar>
                <Typography variant="h6" component="div"
                            sx={{flexGrow: 1, color: "#00f", fontFamily: "Lemonada", fontSize: "30px"}}>
                    Remember
                </Typography>
                <Link href="/login" passHref>
                    <Button style={{textTransform: "none", textDecoration: "none"}}>
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
                    <Link href="/signup" passHref>
                        <Typography variant="h6" color="inherit" component="div"
                                    style={{
                                        textDecoration: "none",
                                        fontVariant: "small-caps",
                                        fontWeight: "bold",
                                        color: "white"
                                    }}>
                            Sign Up
                        </Typography>
                    </Link>

                </Button>
            </Toolbar>
        </AppBar>
    </Box>;
}
