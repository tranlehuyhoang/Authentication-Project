import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { usernameValidate } from '../../helpers/validate'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setUsername } from '../../slices/authSlice';
const Username = () => {
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
            navigate('/')

        }
    })

    useEffect(() => {

        console.log('redux', redux)
    }, []);
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
                                            <input className="" {...formik.getFieldProps('username')} type="text" placeholder="Your Name" />

                                            <button type="submit" className="common_btn">
                                                Register Now
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

export default Username