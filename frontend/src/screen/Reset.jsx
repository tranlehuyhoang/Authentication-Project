import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import { usernameValidate, passwordValidate, resetPasswordValidation } from '../helpers/validate.js'
import { useEffect, useState } from 'react';
import { registerUser, resetPassword, verifyPassword } from '../helpers/helper.js';
import { useDispatch, useSelector } from 'react-redux'
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
import { FaUserAlt, FaLock } from "react-icons/fa";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const Reset = () => {
    const { username } = useSelector(state => state.auth)

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordconfirm_pwd, setShowPasswordconfirm_pwd] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);
    const handleShowClickconfirm_pwd = () => setShowPasswordconfirm_pwd(!showPasswordconfirm_pwd);

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            password: 'admin@123',
            confirm_pwd: 'admin@123'
        },
        validate: resetPasswordValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {

            let resetPromise = resetPassword({ username, password: values.password })

            toast.promise(resetPromise, {
                loading: 'Updating...',
                success: <b>Reset Successfully...!</b>,
                error: <b>Could not Reset!</b>
            });

            resetPromise.then(function () { navigate('/password') })

        }
    })



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
                    <Heading color="teal.400">Reset Password</Heading>
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
                                            color="gray.300"
                                            children={<CFaLock color="gray.300" />}
                                        />
                                        <Input
                                            {...formik.getFieldProps('password')}
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                                {showPassword ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
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
                                            {...formik.getFieldProps('confirm_pwd')}
                                            type={showPasswordconfirm_pwd ? "text" : "password"}
                                            placeholder="Password"
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={handleShowClickconfirm_pwd}>
                                                {showPasswordconfirm_pwd ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>

                                </FormControl>
                                <Button
                                    borderRadius={0}
                                    type="submit"
                                    variant="solid"
                                    colorScheme="teal"
                                    width="full"
                                >
                                    Reset
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </Stack>

            </Flex>
        </>
    )
}

export default Reset