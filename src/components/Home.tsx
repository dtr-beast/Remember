import HomeNavbar from "./HomeNavbar";
import React from "react";
import {Box, Typography} from "@mui/material";

export default function Home() {
    return (
        <>
            <HomeNavbar/>
            <h1 style={{fontSize: 80, margin: 100, textAlign: "center"}}>
                Create mind maps <br/>
                and access them from anywhere</h1>
            <Box sx={{display: "flex", maxWidth: "940px", alignItems: "center", justifyContent: "center", mx: "3em"}}>
                <Typography
                    sx={{fontSize: "1em", alignItems: "flex-start", flexDirection: "column", width: "50%", m: "1em"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis delectus dicta laudantium quos
                    ratione tempore velit? Cum dolore natus nobis quis quo, reiciendis reprehenderit. A accusantium,
                    aliquid aspernatur dolores earum error eum fugit illum inventore ipsam ipsum iure labore natus
                </Typography>
                <img src={require("../assets/images/MinimalistStoryMindMapWhiteBG.webp").default} alt="Mind Map Pic"
                     style={{margin: "1em", width: "75%"}}/>
            </Box>
        </>
    )
}
