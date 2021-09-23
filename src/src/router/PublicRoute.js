import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

/* If Login is ok, redirect to Home */
export const PublicRoute = ({
    isAuthorized,
    component: ComponentInvoked,
    ...rest
}) => {
    
    return (
        <Route {...rest}
            render={(props) => (
                (!isAuthorized)
                    ? <ComponentInvoked {...props} />
                    : <Redirect to="/" />
            )}
        />
    )
}

PublicRoute.propTypes = {
    isAuthorized: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}