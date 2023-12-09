import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { usernameValidate } from '../helpers/validate'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setUsername } from '../slices/authSlice';
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
            navigate('/password')

        }
    })

    useEffect(() => {

        console.log('redux', redux)
    }, []);
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
                    <i className="fas fa-headset" /> Hello Agian!
                </h2>
                <div
                    className="container"
                    style={{
                        maxWidth: "100vw",


                    }}
                >
                    <div
                        className="content"
                        style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
                    >
                        <form id="contact-form" onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <div className="field">
                                    <input type="text" {...formik.getFieldProps('username')} placeholder="Username" required="" />
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

export default Username