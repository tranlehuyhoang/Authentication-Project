import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { usernameValidate, passwordValidate } from '../helpers/validate'
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

            <section
                className="tf__banner banner"
                style={{ background: "url(images/bg/banner.jpg)" }}
            >
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-8">
                            <div className="tf__banner_text">

                                <p>
                                    <div className="tf__design_form">
                                        <h2 className="has-animation">Hello Again!</h2>
                                        <p className="">
                                            Explore More by connecting with us.

                                        </p>
                                        <form onSubmit={formik.handleSubmit}>
                                            <input className="" {...formik.getFieldProps('password')} type="password" placeholder="Your Password" />

                                            <button type="submit" className="common_btn">
                                                Sign in
                                            </button>
                                        </form>
                                    </div>
                                </p>

                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4">
                            <div className="tf__banner_img">
                                <div className="img">
                                    <label htmlFor="avatar" style={{ display: 'initial' }}>
                                        <img

                                            src="https://t4.ftcdn.net/jpg/03/49/49/79/360_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
                                            alt="ZYAN"
                                            className="img-fluid w-100 hexagon-image"
                                        />
                                    </label>
                                    <input type="file" style={{ display: 'none' }} id="avatar" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/*================================
    FOOTER END
  =================================*/}
            {/*================================
    SCROLL BUTTON START
      =================================*/}
            <div className="progress active c-pointer">
                <svg
                    className="progress-svg"
                    width="100%"
                    height="100%"
                    viewBox="-1 -1 102 102"
                >
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>

            <div id="magic-cursor">
                <div id="ball" />
            </div>


        </>
    )
}

export default Password