import React from 'react'
import {AuthProviderContextDispatcher} from "../component/AuthProvider";

function useAuthActions() {
    return React.useContext(AuthProviderContextDispatcher)
}

export  default useAuthActions