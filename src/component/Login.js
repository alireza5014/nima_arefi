import React from 'react'
import {Formik, Form} from 'formik'
import {Redirect} from 'react-router-dom'
import useAuthActions from "../hook/useAuthActions";
import history from "../hook/history";


function Login() {


    const setLogin = useAuthActions();


    return (

        <Formik
            initialValues={{email: "", password: ""}}
            onSubmit={
                (values, actions) => {

                    if (values.email === "admin@gmail.com" && values.password === "admin") {

                        setLogin(true)
                        alert('Login successfully')

                    } else {
                        actions.setFieldError("USEr OR PAss InCORRECT")
                    }
                    actions.setSubmitting(false)
                }
            }
            render={(props) => (
                <Form>
                    <input
                        className=''
                        type='email'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        // value={props.value.email}
                        name='email'
                    />

                    <input
                        className=''
                        type='password'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        // value={props.value.email}
                        name='password'
                    />

                    <button
                        className=''
                        type='submit'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        // value={props.value.email}
                        name='password'

                    >Login
                    </button>
                </Form>
            )}
        />
    )
}

export default Login;