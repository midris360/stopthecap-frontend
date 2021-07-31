import React, { useContext, useReducer } from "react"

///////////////////////
/// INITIAL STATE
//////////////////////

const initialState = {
<<<<<<< HEAD
    url: "https://stopthecap-backend.herokuapp.com",
=======
    url: "https://stopthecap.herokuapp.com",
>>>>>>> 36ed3d7ebe02bb0083487f705b659dfcfe28c3d6
    token: null,
    username: null,
    vinyls: null,
    new: {
        name: "",
        title: "",
    },
    edit: {
        id: 0,
        name: "",
        title: "",
    },
};

///////////////////
//  REDUCER
//////////////////
// action = {type: "", payload: ---}
const reducer = (state, action) => {
    let newState;
    switch(action.type) {
        case "auth":
            newState = { ...state, ...action.payload };
            return newState;
            break;
        case "logout":
            newState = {...state, token: null, username: null}
            window.localStorage.removeItem("auth");
            return newState;
            break
            case "getVinyls":
                newstate = {...state, vinyls: action.payload}
                return newState
                break
        case "select": 
            newState= {...state, edit: action.payload}
            return newState
            break;
        default:
            return state;
            break;
        }
};


///////////////////
/// AppContext
//////////////////
const AppContext = React.createContext(null)


////////////////////////
/// AppState Component
////////////////////////
export const AppState = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
    <AppContext.Provider value={{ state, dispatch }}>{props.children}</AppContext.Provider>
    )
};

/////////////////////////
/// useAppState hook
/////////////////////////

export const useAppState = () => {
    return React.useContext(AppContext)
}
