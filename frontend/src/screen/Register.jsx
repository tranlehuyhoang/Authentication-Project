import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import convertToBase64 from '../helpers/convert.js';
import { usernameValidate, passwordValidate, registerValidation } from '../helpers/validate'
import { useEffect, useState } from 'react';
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
            console.log(values)
        }
    })
    const onUpload = async e => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
    }
    return (

        <>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className="preloader">
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
                </svg>
                <h5 className="preloader-text">Loading</h5>
            </div>
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
                                            <input {...formik.getFieldProps('email')} type="text" placeholder='Email*' />
                                            <input {...formik.getFieldProps('username')} type="text" placeholder='Username*' />
                                            <input {...formik.getFieldProps('password')} type="text" placeholder='Password*' />

                                            <button type="submit" className="common_btn">
                                                Register
                                            </button>
                                        </form>
                                        <div className="text-center py-4">
                                            <span className='text-gray-500'>Already Register? <Link className='text-red-500' to="/">Login Now</Link></span>
                                        </div>
                                    </div>
                                </p>

                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4">
                            <div className="tf__banner_img">
                                <div className="img">
                                    <label htmlFor="avatar" style={{ display: 'initial' }}>
                                        <img
                                            src={file || 'https://t4.ftcdn.net/jpg/03/49/49/79/360_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg'}

                                            alt="ZYAN"
                                            className="img-fluid w-100 hexagon-image"
                                        />
                                    </label>
                                    <input onChange={onUpload} type="file" style={{ display: 'none' }} id="avatar" />
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

export default Register

