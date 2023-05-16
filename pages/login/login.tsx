import axios from "axios";
import { Box, VStack, FormControl, Input, Button } from "native-base";
import React, { useState } from "react";

export default function LoginScreen() : JSX.Element{


    const API_URL = "https://gslwn81z5i.execute-api.us-east-2.amazonaws.com/goose/technical-challenge/login" 

    const handleLogin = () =>{
        axios.post(API_URL,{email:email,password:password})
            .then((res) =>{
                
            })
            .catch()
    }
    const [invalidLogin, setInvalidLogin] = useState(false)
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('')
    return(
        <VStack>
            <Box flex={1}>
                <FormControl.Label>Enter your email</FormControl.Label>
                <Input onChangeText={(email) => setEmail(email)} isInvalid={invalidLogin} variant='underlined'></Input>
                <FormControl.Label>Password </FormControl.Label>
                <Input onChangeText={(password) => setPassword(password)} isInvalid={invalidLogin} variant='underlined' secureTextEntry={true}></Input>
                <Button onPress={handleLogin}  style={{position:'absolute', bottom: 0, width: '100%'}}>Login</Button>
            </Box>
        </VStack>
    )
} 