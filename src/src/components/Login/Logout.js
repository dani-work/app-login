import React from 'react'
import { Redirect } from "react-router-dom";
import { deleteSession } from '../../helpers/utils';
export const Logout = () => {

    deleteSession();

    return (
        <div>
            <Redirect to="/login" />;
        </div>
    )
}
