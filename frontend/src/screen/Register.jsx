import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import convertToBase64 from '../helpers/convert.js';
import { usernameValidate, passwordValidate, registerValidation } from '../helpers/validate.js'
import { useEffect, useState } from 'react';
import { registerUser } from '../helpers/helper.js';
const Register = () => {
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



            <section className="contact" id="contact" style={{ height: "100vh" }}>
                <h2 className="heading">
                    <i className="fas fa-headset" /> Hello !
                </h2>
                <div
                    className="container"
                    style={{ maxWidth: "100vw", display: "flex", justifyContent: "center" }}
                >
                    <div className="content" style={{ display: "flex", width: "80%" }}>
                        <div className="image-box">
                            <label htmlFor="avatar" style={{ display: 'initial' }}>

                                <img
                                    draggable="false"
                                    src={file || 'https://t4.ftcdn.net/jpg/03/49/49/79/360_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg'}
                                    alt=""
                                />
                            </label>
                            <input onChange={onUpload} type="file" style={{ display: 'none' }} id="avatar" />
                        </div>
                        <form id="contact-form" onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <div className="field">
                                    <input  {...formik.getFieldProps('email')} type="text" placeholder='Email*' />
                                    <i className="fas fa-user" />
                                </div>
                                <div className="field">
                                    <input  {...formik.getFieldProps('username')} type="text" placeholder='Username*' />
                                    <i className="fas fa-user" />
                                </div>
                                <div className="field">
                                    <input  {...formik.getFieldProps('password')} type="text" placeholder='Password*' />
                                    <i className="fas fa-user" />
                                </div>

                            </div>
                            <div className="button-area">
                                <button type="submit">
                                    Register <i className="fa fa-paper-plane" />
                                </button>
                            </div>
                            <div
                                className="button-area"
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: "flex",
                                    height: 50,
                                    width: "100%"
                                }}
                            >
                                <p>
                                    Already Register? <a href="/register">Login Now</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Register

