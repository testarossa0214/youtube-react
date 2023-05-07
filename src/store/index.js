import React, { createContext, useReducer } from 'react'

const initialState = {
    popular: [],
    selected: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_POPULAR':
            return { ...state, popular: action.payload.popular }
        case 'SET_SELECTED':
            return { ...state, selected: action.payload.selected }
        default:
            return state
    }
}

const Store = createContext({
    grobalState: initialState,
    setGrobalState: () => null
})

// export const StoreProvider = ({ children }) => {
//     const [grobalState, setGrobalState] = useReducer(reducer, initialState)
//   return (
//     <Store.Provider value={{ grobalState, setGrobalState }}>
//         {children}
//     </Store.Provider>
//   )
// }

const StoreProvider = ({ children }) => {
    const [globalState, setGlobalState] = useReducer(reducer, initialState);
    return (
        <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>
    );
};

export { Store, StoreProvider };
