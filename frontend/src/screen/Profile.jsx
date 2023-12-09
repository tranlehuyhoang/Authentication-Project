import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import convertToBase64 from '../helpers/convert.js';
import { usernameValidate, passwordValidate, registerValidation, profileValidation } from '../helpers/validate.js'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUser, updateUser } from '../helpers/helper.js';
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
    InputRightElement,
    Image
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const Profile = () => {


    const [showPassword, setShowPassword] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);

    const redux = useSelector((state) => state);
    const [profile, setProfile] = useState();
    const { username } = useSelector(state => state.auth)

    useEffect(() => {
        console.log(redux)
        const fetchData = async () => {
            let profile = await getUser({ username });
            setProfile(profile.data)
            console.log(profile);
            setFile(profile.data.profile)
        };
        fetchData();
    }, []);
    const [file, setFile] = useState()
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            firstName: profile?.firstName || '',
            lastName: profile?.lastName || '',
            email: profile?.email || '',
            mobile: profile?.mobile || '',
            address: profile?.address || ''
        },
        enableReinitialize: true,
        validate: profileValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            values = await Object.assign(values, { profile: file || '' })
            console.log('values', values)
            let updatePromise = updateUser(values);

            toast.promise(updatePromise, {
                loading: 'Updating...',
                success: <b>Update Successfully...!</b>,
                error: <b>Could not Update!</b>
            });

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
                                <Stack direction='row' spacing={8}>
                                    <Box>
                                        <FormControl>
                                            <InputGroup>
                                                <InputLeftElement
                                                    pointerEvents="none"
                                                    children={<CFaUserAlt color="gray.300" />}
                                                />
                                                <Input type="text" placeholder="firstName"
                                                    {...formik.getFieldProps('firstName')}
                                                />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl>
                                            <InputGroup>
                                                <InputLeftElement
                                                    pointerEvents="none"
                                                    children={<CFaUserAlt color="gray.300" />}
                                                />
                                                <Input type="text" placeholder="lastName"
                                                    {...formik.getFieldProps('lastName')}
                                                />
                                            </InputGroup>
                                        </FormControl>
                                    </Box>
                                    <label htmlFor="avatar" style={{ display: 'initial' }}>

                                        <Image style={{ height: '150px', width: '150px' }} src={file || 'https://via.placeholder.com/150'} alt='Dan Abramov' />
                                    </label>
                                    <input onChange={onUpload} type="file" style={{ display: 'none' }} id="avatar" />

                                </Stack>
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<CFaUserAlt color="gray.300" />}
                                        />
                                        <Input type="number" placeholder="mobile"

                                            {...formik.getFieldProps('mobile')}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<CFaUserAlt color="gray.300" />}
                                        />
                                        <Input type="text" placeholder="email"

                                            {...formik.getFieldProps('email')}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<CFaUserAlt color="gray.300" />}
                                        />
                                        <Input type="text" placeholder="address"

                                            {...formik.getFieldProps('address')} />
                                    </InputGroup>
                                </FormControl>

                                <FormControl>

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
                                    Update
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

export default Profile

