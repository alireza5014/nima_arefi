import React from 'react';
export  const  AuthProviderContext=React.createContext()
export  const  AuthProviderContextDispatcher=React.createContext()
const initialState=()=>JSON.stringify(localStorage.getItem("_token")||false)

function AuthProvider({children}) {

    const [state, setState] = React.useState(initialState);


        const data=JSON.parse(state)
        localStorage.setItem('_token',data)

    return (
        <AuthProviderContext.Provider value={JSON.parse(localStorage.getItem('_token'))}>
        <AuthProviderContextDispatcher.Provider value={setState}>
            {children}
        </AuthProviderContextDispatcher.Provider>
    </AuthProviderContext.Provider>


)
}

export default AuthProvider;