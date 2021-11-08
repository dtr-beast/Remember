import React, {FormEvent, useState} from "react";
import {
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography,
    TextField,
    FormGroup,
    FormControlLabel,
    Checkbox
} from "@mui/material";

import GoogleLogo from "../assets/logos/google.svg"
import TwitterLogo from "../assets/logos/twitter.svg"
import FacebookLogo from "../assets/logos/facebook.svg"
import {useTextField} from "../hooks";
import {Link} from "react-router-dom";

// interface SignInFormProps {
//     submitUser: (user: User) => void
// }

async function asyncRequest(promise: Promise<any>) {
    try {
        const data = await promise
        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

export default function Register() {

    const username = useTextField('Username')
    const password = useTextField('Password', 'password')
    const name = useTextField('Name')
    const [privacyBox, setPrivacyBox] = useState(false)
    const [updateBox, setUpdateBox] = useState(false)

    async function getOnSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        username.reset()
        password.reset()

        // Cancel request if username field is empty
        if (username.value === '') {
            username.setError(true)
            username.setHelperText("Enter a username")
            return;
        }
        //
        // const [user, error] = await asyncRequest(loginService.login({
        //     username: username.value,
        //     password: password.value
        // }))

        // if (error) {
        //     if (error.message === 'invalidUsername') {
        //         username.setError(true)
        //         username.setHelperText("Couldn't find your account")
        //     } else if (error.message === 'invalidPassword') {
        //         console.log("Wrong Pass")
        //         password.setError(true)
        //         password.setHelperText("Wrong Password")
        //     }
        // } else {
        //     submitUser(user)
        // }
    }

    return <>
        <AppBar position="static" style={{backgroundColor: "#ADE8F4"}} elevation={0}>
            <Toolbar>
                <Typography variant="h6"
                            sx={{flexGrow: 1, color: "#00f", fontFamily: "Lemonada", fontSize: "2em"}}>
                    Remember
                </Typography>
                <Button style={{
                    textTransform: "none",
                    backgroundColor: "#0077B6",
                    borderRadius: 10,
                    marginLeft: 20,
                    marginRight: 40
                }}>
                    <Link to="/login" style={{textDecoration: "none"}}>
                        <Typography variant="h6" color="inherit" component="div"
                                    style={{fontVariant: "small-caps", fontWeight: "bold", color: "white"}}>
                            Sign In
                        </Typography>
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>

        <Box sx={{p: "3em", display: "flex"}}>
            <Box sx={{m: "auto"}}>
                <Typography variant="h1" sx={{fontSize: "3em"}}>
                    Get started free today
                </Typography>
                <form onSubmit={getOnSubmit}>
                    {/* TODO: Figure out how to control the width, giving Box to the first textfield is a workaround for now (prototyping only) */}
                    <Box><TextField {...name} fullWidth sx={{m: "1em"}}/></Box>
                    <TextField {...username} fullWidth sx={{m: "1em"}}/>
                    <TextField {...password} fullWidth sx={{m: "1em"}}/>

                    <FormGroup>
                        {/* TODO: Link the Privacy Policy and TOS */}
                        <FormControlLabel
                            control={<Checkbox checked={privacyBox} onChange={e => setPrivacyBox(e.target.checked)}/>}
                            label="I agree to Remember Terms and Privacy Policy."/>
                        <FormControlLabel
                            control={<Checkbox checked={updateBox} onChange={e => setUpdateBox(e.target.checked)}/>}
                            label="I agree to receive Remember news and updates."/>
                    </FormGroup>
                    {/* TODO: Customize the button and   */}
                    <Button id="login-button" type="submit" variant="contained" color="primary" fullWidth
                            sx={{m: "1em", fontSize: "1.5em", textTransform: "none"}}>Get Started</Button>

                </form>

                <Typography component="div" sx={{fontSize: "2em", textAlign: "center", mx: "1em"}}>
                    or sign up with
                </Typography>
                {/* TODO: Replace with normal buttons black and white icons */}
                <Box sx={{m: "auto", display: "flex", justifyContent: "center"}}>
                    <Button sx={{textTransform: "none", m: "1em", borderRadius: "10%"}}>
                        <img src={GoogleLogo} alt="Google Logo"/>
                    </Button>
                    <Button sx={{textTransform: "none", m: "1em"}}>
                        <img src={FacebookLogo} alt="Facebook Logo"/>
                    </Button>
                    <Button sx={{textTransform: "none", m: "1em"}}>
                        <img src={TwitterLogo} alt="Twitter Logo"/>
                    </Button>
                </Box>
            </Box>
        </Box>
    </>
}
