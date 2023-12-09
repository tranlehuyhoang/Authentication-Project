import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import convertToBase64 from '../helpers/convert.js';
import { usernameValidate, passwordValidate, registerValidation } from '../helpers/validate.js'
import { useEffect, useState } from 'react';
import { registerUser } from '../helpers/helper.js';
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
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
    Image,
    Center
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);
    const [file, setFile] = useState()
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: 'doyol56239@cnogs.com',
            username: 'example123',
            password: 'admin@123'
        },
        validate: registerValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            values = await Object.assign(values, { profile: file || '' })
            console.log(values)
            let registerPromise = registerUser(values)
            toast.promise(registerPromise, {
                loading: 'Creating...',
                success: <b>Register Successfully...!</b>,
                error: <b>Could not Register.</b>
            });

            registerPromise.then(function () { navigate('/') });

        }
    })
    const onUpload = async e => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
    }
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
                    <Heading color="teal.400">Welcome</Heading>
                    <Box minW={{ base: "90%", md: "468px" }}>
                        <form onSubmit={formik.handleSubmit}>
                            <Stack
                                spacing={4}
                                p="1rem"
                                backgroundColor="whiteAlpha.900"
                                boxShadow="md"
                            >
                                <Center >

                                    <label htmlFor="avatar" style={{ display: 'initial' }}>

                                        <Image style={{ height: '150px', width: '150px' }} src={file || 'https://via.placeholder.com/150'} alt='Dan Abramov' />
                                    </label>
                                    <input onChange={onUpload} type="file" style={{ display: 'none' }} id="avatar" />

                                </Center>

                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<CFaUserAlt color="gray.300" />}
                                        />
                                        <Input type="email" placeholder="Email"

                                            {...formik.getFieldProps('email')} />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<CFaUserAlt color="gray.300" />}
                                        />
                                        <Input type="text" placeholder="username"

                                            {...formik.getFieldProps('username')} />
                                    </InputGroup>
                                </FormControl>



                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            color="gray.300"
                                            children={<CFaLock color="gray.300" />}
                                        />
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            {...formik.getFieldProps('password')}
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                                {showPassword ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormHelperText textAlign="right">
                                        <Link>forgot password?</Link>
                                    </FormHelperText>
                                </FormControl>


                                <Button
                                    borderRadius={0}
                                    type="submit"
                                    variant="solid"
                                    colorScheme="teal"
                                    width="full"
                                >
                                    Register
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
                <Box>
                    Already have an account?{" "}
                    <Link href='/'>Login</Link>
                </Box>
            </Flex>
        </>
    )
}

export default Register

