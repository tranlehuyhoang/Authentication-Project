import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { usernameValidate, passwordValidate } from '../helpers/validate.js'
import { useEffect, useState } from 'react';
import { registerUser, verifyPassword } from '../helpers/helper.js';
import { useDispatch, useSelector } from 'react-redux'


const Password = () => {
    const { username } = useSelector(state => state.auth)
    const redux = useSelector((state) => state);
    console.log('redux', redux)
    console.log(username)
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validate: passwordValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            let loginPromise = verifyPassword({ username, password: values.password })
            toast.promise(loginPromise, {
                loading: 'Checking...',
                success: <b>Login Successfully...!</b>,
                error: <b>Password Not Match!</b>
            });

            loginPromise.then(res => {
                let { token } = res.data;
                localStorage.setItem('token', token);
                navigate('/profile')
            })

        }
    })

    return (

        <>
            <Toaster position='top-center' reverseOrder={false}></Toaster>



            <section className="contact" id="contact" style={{
                height: "100vh",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h2 className="heading">
                    <i className="fas fa-headset" /> Hello 2509robloX@!
                </h2>
                <div
                    className="container"
                    style={{
                        maxWidth: "100vw",
                        justifyContent: 'center',
                        display: 'flex'


                    }}
                >
                    <div
                        className="content"
                        style={{ display: "flex", width: "80%", alignItems: 'center', justifyContent: 'space-around' }}
                    >
                        <div className="image-box">
                            <img
                                draggable="false"
                                src="https://t4.ftcdn.net/jpg/03/49/49/79/360_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
                                alt=""
                            />
                        </div>
                        <form id="contact-form" onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <div className="field">
                                    <input {...formik.getFieldProps('password')} type="password" placeholder="Your Password" />
                                    <i className="fas fa-user" />
                                </div>
                            </div>
                            <div className="button-area">
                                <button type="submit">
                                    Login <i className="fa fa-paper-plane" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Password