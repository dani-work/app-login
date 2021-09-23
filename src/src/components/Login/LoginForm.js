import React, { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { of } from "await-of";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as Literals from '../../constants/literals';
import { loginPost } from '../../helpers/fetch';
import { saveSession } from '../../helpers/utils';


/* Form */
export function LoginForm(props) {

    const [loading, setLoading] = useState(false);
    const LoginSchema = Yup.object().shape({
      email: Yup.string()
        .email(Literals.emailWrongFormat)
        .min(3, Literals.minCharacters.replace("{x}", "3"))
        .max(50, Literals.maxCharacters.replace("{x}", "50"))
        .required(Literals.requiredField),
      password: Yup.string()
        .min(3, Literals.minCharacters.replace("{x}", "3"))
        .max(50, Literals.maxCharacters.replace("{x}", "50"))
        .required(Literals.requiredField),
    });

    const initialValues = {
        email: "",
        password: "",
      };

      const enableLoading = () => {
        setLoading(true);
      };
    
      const disableLoading = () => {
        setLoading(false);
      };
    

    const formik = useFormik({
        initialValues,
        validationSchema: LoginSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
          
          enableLoading();
          let [res, err] = await of(loginPost(values.email, values.password))

          if (err || (res && res.status !== 200)) {
            setStatus(Literals.failValidation);
            disableLoading();
            setSubmitting(false);
          }else{
            let { data: {data: token}}  = res;
            disableLoading();
            setSubmitting(false);
            saveSession(token);
          }
        }
        });


    return (
        <div className="form-center">
            <form onSubmit={formik.handleSubmit}>
                {formik.status && (
                    <div className="mb-10 alert alert-danger alert-dismissible fade show">
                        <div className="alert-text font-weight-bold">{formik.status}</div>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                )}

                <div className="form-group">
                    <TextField 
                    id="email" 
                    label="Email" 
                    variant="standard" 
                    className="form-control"
                    {...formik.getFieldProps("email")} />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.email}</div>
                        </div>
                    ) : null}
                </div>
                <div className="form-group">
                    <TextField 
                    id="password" 
                    label="Password" 
                    variant="standard"
                    type="password"
                    className="form-control" 
                    {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.password}</div>
                        </div>
                    ) : null}
                </div>
                <br/>
                <div className="form-group">
                    <Button variant="contained"
                        style={{ backgroundColor: '#214A80', color: '#FFFFFF' }}
                        type="submit"
                        disabled={formik.isSubmitting}
                        className="btnSubmit">                        
                        <span>Log In</span> {loading && <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>}
                    </Button>
                </div>
            </form>
        </div>
    );
}

