import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { usernameValidate, passwordValidate } from '../helpers/validate.js'
import { useEffect, useState } from 'react';
import { generateOTP, registerUser, verifyOTP, verifyPassword } from '../helpers/helper.js';
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
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
    PinInputField,
    PinInput,
    HStack,
    Center,
    Text
} from "@chakra-ui/react";

const Recovery = () => {
    const token = localStorage.getItem('token');
    const { username } = useSelector(state => state.auth)
    console.log(username)


    const [OTP, setOTP] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        generateOTP(username).then((OTP) => {
            console.log(OTP)
            if (OTP) return toast.success('OTP has been send to your email!');
            return toast.error('Problem while generating OTP!')
        })
    }, [username]);

    async function onSubmit(e) {
        e.preventDefault();
        console.log(OTP)
        setOTP('')
        try {
            let { status } = await verifyOTP({ username, code: OTP })
            if (status === 201) {
                toast.success('Verify Successfully!')
                return navigate('/reset')
            }
        } catch (error) {
            return toast.error('Wront OTP! Check email again!')
        }
    }

    // handler of resend OTP
    function resendOTP() {

        let sentPromise = generateOTP(token);

        toast.promise(sentPromise,
            {
                loading: 'Sending...',
                success: <b>OTP has been send to your email!</b>,
                error: <b>Could not Send it!</b>,
            }
        );

        sentPromise.then((OTP) => {
            console.log(OTP)
        });

    }

    const redux = useSelector((state) => state);
    console.log('redux', redux)


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
                    <Heading color="teal.400">Enter OPT</Heading>
                    <Box minW={{ base: "90%", md: "468px" }}>
                        <form onSubmit={onSubmit}>
                            <Stack
                                spacing={4}
                                p="1rem"
                                backgroundColor="whiteAlpha.900"
                                boxShadow="md"
                            >

                                <FormControl>
                                    <Center>
                                        <HStack content='center'>
                                            <PinInput placeholder='🥳' value={OTP} onChange={setOTP}>
                                                <PinInputField />
                                                <PinInputField />
                                                <PinInputField />
                                                <PinInputField />
                                                <PinInputField />
                                                <PinInputField />
                                            </PinInput>
                                        </HStack>
                                    </Center>
                                    <FormHelperText textAlign="right" >

                                        <Text  >
                                            Cant not get Opt?{' '}
                                            <Link color='teal.500' onClick={resendOTP}>
                                                Resend
                                            </Link>
                                        </Text>
                                    </FormHelperText>
                                </FormControl>
                                <Button
                                    borderRadius={0}
                                    type="submit"
                                    variant="solid"
                                    colorScheme="teal"
                                    width="full"
                                >
                                    Recover
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </Stack>

            </Flex>

        </>
    )
}

export default Recovery
