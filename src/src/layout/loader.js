import React, { useState } from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";

/* Spinner while the page loads */
export const Loader = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#235FB3");

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-12 login-form-1">
                    <ScaleLoader color={color}
                        loading={loading}
                        height={35}
                        width={5}
                        radius={3}
                        margin={2} />
                </div>
            </div>
        </div >
    );
}