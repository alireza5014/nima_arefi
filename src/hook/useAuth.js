import React from 'react'
import {AuthProviderContext} from "../component/AuthProvider";

function useAuth() {
    return React.useContext(AuthProviderContext)
}

export  default useAuth