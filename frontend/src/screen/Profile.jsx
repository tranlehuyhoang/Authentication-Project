import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import convertToBase64 from '../helpers/convert.js';
import { usernameValidate, passwordValidate, registerValidation, profileValidation } from '../helpers/validate'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../helpers/helper.js';
const Profile = () => {
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

            <section
                className="tf__banner banner"
                style={{ background: "url( profile.profile ?profile.profile  :images/bg/banner.jpg)" }}

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
                                            <div className="name flex w-3/4 gap-10">
                                                <input {...formik.getFieldProps('firstName')} type="text" placeholder='FirstName' />
                                                <input {...formik.getFieldProps('lastName')} type="text" placeholder='LastName' />
                                            </div>

                                            <div className="name flex w-3/4 gap-10">
                                                <input {...formik.getFieldProps('mobile')} type="text" placeholder='Mobile No.' />
                                                <input {...formik.getFieldProps('email')} type="text" placeholder='Email*' />
                                            </div>


                                            <input {...formik.getFieldProps('address')} type="text" placeholder='Address' />

                                            <button type="submit" className="common_btn">
                                                Update
                                            </button>
                                        </form>
                                        <button type="submit" className="common_btn">
                                            Logout
                                        </button>

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

export default Profile

