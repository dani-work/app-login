import React, { useState, useEffect } from 'react';
import { of } from "await-of";
import { Loader } from '../../layout/loader';
import { checkToken } from '../../helpers/fetch';
import { deleteSession, getSessionToken } from "../../helpers/utils";


/* Check if the Auth Token we have is correct and not fake/expired*/
export const AuthInit = (props) => {
    const [showSplashScreen, setShowSplashScreen] = useState(true);
    const authToken = getSessionToken();

    useEffect(() => {

        const requestUser = async () => {
            let [res, err] = await of(checkToken(authToken));
            if (err || res.status !== 200) {
                deleteSession();
            }
            setShowSplashScreen(false);
        };

        if (!!authToken?.trim()) {
            requestUser();
        }else{
            setShowSplashScreen(false);
        }
    }, [authToken]);

    return showSplashScreen ? <Loader /> : <>{props.children}</>;
}