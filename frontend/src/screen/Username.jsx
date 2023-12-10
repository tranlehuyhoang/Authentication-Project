import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import { usernameValidate } from '../helpers/validate'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { logout, setUsername } from '../slices/authSlice';
import { FaUserAlt, FaLock } from "react-icons/fa";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement
} from "@chakra-ui/react";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const Username = () => {
    useEffect(() => {
        dispatch(logout());

    }, []);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const redux = useSelector((state) => state);
    console.log('redux', redux)

    const formik = useFormik({
        initialValues: {
            username: 'example123'
        },
        validate: usernameValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            dispatch(setUsername(values.username));
            navigate('/password')

        }
    })

    useEffect(() => {

        console.log('redux', redux)
    }, []);
    return (

        <>
            <Toaster position='top-center' reverseOrder={false}></Toaster>





            <Flex
                flexDirection="column"
                width="100wh"
                height="100vh"
                backgroundColor="gray.200"
                justifyContent="center"
                alignItems="center"
            >
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Avatar bg="teal.500" />
                    <Heading color="teal.400">Welcome</Heading>
                    <Box minW={{ base: "90%", md: "468px" }}>
                        <form onSubmit={formik.handleSubmit}>
                            <Stack
                                spacing={4}
                                p="1rem"
                                backgroundColor="whiteAlpha.900"
                                boxShadow="md"
                            >
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement

                                            pointerEvents="none"
                                            children={<CFaUserAlt color="gray.300" />}
                                        />
                                        <Input type="text" {...formik.getFieldProps('username')} placeholder="email address" />
                                    </InputGroup>
                                </FormControl>

                                <Button
                                    borderRadius={0}
                                    type="submit"
                                    variant="solid"
                                    colorScheme="teal"
                                    width="full"
                                >
                                    Login
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
                <Box>
                    New to us?{" "}
                    <Link color="teal.500" to={'/register'}>
                        Sign Up
                    </Link>
                </Box>
            </Flex>




        </>
    )
}

export default Username