import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import convertToBase64 from '../helpers/convert.js';
import { usernameValidate, passwordValidate, registerValidation, profileValidation } from '../helpers/validate.js'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../helpers/helper.js';
const Profile = () => {
    const redux = useSelector((state) => state);
    const [profile, setProfile] = useState();
    const { username } = useSelector(state => state.auth)
    const token = localStorage.getItem('token');
    useEffect(() => {
        console.log(redux)
        const fetchData = async () => {
            let profile = await getUser({ token });
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
            <section className="contact" id="contact" style={{ height: "100vh" }}>
                <h2 className="heading">
                    <i className="fas fa-headset" /> Hello {profile?.username}!
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
                                    <input type="text" {...formik.getFieldProps('firstName')} placeholder='firstName' />
                                    <i className="fas fa-user" />
                                </div>
                                <div className="field">
                                    <input type="text" {...formik.getFieldProps('lastName')} placeholder='lastName' />
                                    <i className="fas fa-user" />
                                </div>
                                <div className="field">
                                    <input type="mobile" {...formik.getFieldProps('mobile')} placeholder='mobile' />
                                    <i className="fas fa-user" />
                                </div>
                                <div className="field">
                                    <input type="email" {...formik.getFieldProps('email')} placeholder='email' />
                                    <i className="fas fa-user" />
                                </div>
                                <div className="field">
                                    <input type="text" {...formik.getFieldProps('address')} placeholder='address' />
                                    <i className="fas fa-user" />
                                </div>
                            </div>
                            <div className="button-area">
                                <button type="submit">
                                    Update <i className="fa fa-paper-plane" />
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

export default Profile

