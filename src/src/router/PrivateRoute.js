import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

/* Check authorization to load private routes or redirect to Login */
export const PrivateRoute = ({
    isAuthorized,
    component: ComponentInvoked,
    ...rest
}) => {
    return (
        <Route {...rest}
            render={(props) => (
                (isAuthorized)
                    ? <ComponentInvoked {...props} />
                    : <Redirect to="/login" />
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthorized: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}