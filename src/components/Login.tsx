import React, {FormEvent} from "react";
import {AppBar, Box, Button, Toolbar, Typography, TextField} from "@mui/material";
import GoogleLogo from "../assets/images/google.svg"
import TwitterLogo from "../assets/images/twitter.svg"
import FacebookLogo from "../assets/images/facebook.svg"
import {useTextField} from "../hooks";
//
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

export default function Login() {

    const username = useTextField('Username')
    const password = useTextField('Password', 'password')

    function getOnSubmit() {
        return async (event: FormEvent<HTMLFormElement>) => {
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
        };
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
                    <Typography variant="h6" color="inherit" component="div"
                                style={{fontVariant: "small-caps", fontWeight: "bold", color: "white"}}>
                        Sign Up
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>

        <Box sx={{p: "3em", display: "flex"}}>
            <Box sx={{m: "auto"}}>
                <Typography variant="h1" sx={{fontSize: "3em"}}>
                    Sign In
                </Typography>
                <Typography variant="h3" component="div" sx={{fontSize: "1em", m: "1em"}}>
                    Use your email to sign in:
                </Typography>
                <form onSubmit={getOnSubmit}>
                    <TextField {...username} fullWidth sx={{mx: "1em"}}/>
                    <TextField {...password} fullWidth sx={{m: "1em"}}/>
                    {/* TODO: Password Reset Link here */}
                    <a href="#" style={{margin: "1em"}}>Forgot Password? </a>
                    {/* TODO: Customize the button and   */}
                    <Button id="login-button" type="submit" variant="contained" color="primary" fullWidth
                            sx={{m: "1em", fontSize: "1.5em", textTransform: "none"}}>Sign In</Button>
                </form>
                <Typography variant="h3" component="div" sx={{fontSize: "2em", textAlign: "center", mx: "1em"}}>
                    Or
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
