import React from "react"
import {Form, Field} from 'react-final-form'
import Styles from './Styles'
import "./../../App.css"


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    console.log(values)
}

const NewForm = () => {
    return (
        <div className={"FormContainer"}>
            <div className={"HowToCodeContainer"}>
                <div className={"HowToCodeText"}>
                    <div className={"LearnToCode"}>
                        Learn to code by watching others
                    </div>
                    See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
                    but understanding how developers think is invaluable.
                </div>
            </div>

            <div className={"FromEnterLogin"}>

                <div className={"TryItFree"}>
                    <span className={"WeightSpan"}>Try it free 7 days</span> then $20/mo. thereafter
                </div>

                <Styles>
                    <Form
                        onSubmit={onSubmit}
                        validate={values => {
                            const errors = {}
                            if (!values.firstname) {
                                errors.firstname = 'Required'
                            }
                            if (!values.lastname) {
                                errors.lastname = 'Required'
                            }
                            if (!values.email) {
                                errors.email = 'Required'
                            }
                            if (!values.password) {
                                errors.password = 'Required'
                            }
                            return errors
                        }}
                        render={({
                                     submitError,
                                     handleSubmit,
                                     form,
                                     submitting,
                                     pristine,
                                     values
                                 }) => (
                            <form onSubmit={handleSubmit}>
                                <Field name="firstname">
                                    {({input, meta}) => (
                                        <div>
                                            <input {...input} type="text" placeholder="First Name"/>
                                            {(meta.error || meta.submitError) && meta.touched && (
                                                <span>{meta.error || meta.submitError}</span>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <Field name="lastname">
                                    {({input, meta}) => (
                                        <div>
                                            <input {...input} type="text" placeholder="Last Name"/>
                                            {(meta.error || meta.submitError) && meta.touched && (
                                                <span>{meta.error || meta.submitError}</span>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <Field name="email">
                                    {({input, meta}) => (
                                        <div>
                                            <input {...input} type="text" placeholder="Email Address"/>
                                            {(meta.error || meta.submitError) && meta.touched && (
                                                <span>{meta.error || meta.submitError}</span>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <Field name="password">
                                    {({input, meta}) => (
                                        <div>
                                            <input {...input} type="password" placeholder="Password"/>
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                {submitError && <div className="error">{submitError}</div>}
                                <div className="buttons">
                                    <button type="submit" disabled={submitting || pristine}>
                                        CLAIM YOUR FREE TRIAL
                                    </button>
                                </div>
                                <div className={"AgreeingTerms"}>
                                    By clicking the button, you are agreeing to our <span
                                    className={"TermsAndServices"}>Terms and Services</span>
                                </div>
                            </form>
                        )}
                    />
                </Styles>
            </div>
        </div>
    )
}

export default NewForm