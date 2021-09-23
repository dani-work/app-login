import React from 'react'
import { useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import { deleteSession } from '../../helpers/utils';
import { logout } from '../../redux/actions/auth';

export const Logout = () => {

    const dispatch = useDispatch();
    dispatch( logout() )
    deleteSession();

    return (
        <div>
            <Redirect to="/login" />;
        </div>
    )
}
