import React, { useContext, useReducer } from "react"


///////////////////////
/// INITIAL STATE
//////////////////////

const initialState = {
    url: "https://stopthecap-backend.herokuapp.com",
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
            newState = { ...state, token: null, username: null };
            window.localStorage.removeItem("auth");
            return newState;
            break;
        case "getVinyls":
            newState = {...state, vinyls: action.payload };
                return newState;
                break;
        case "select": 
            newState = { ...state, edit: action.payload };
            return newState;
            break;
        default:
            return state;
            break;
        }
};


///////////////////
/// AppContext
//////////////////
const AppContext = React.createContext(null);


////////////////////////
/// AppState Component
////////////////////////
export const AppState = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

return (
    <AppContext.Provider value={{ state, dispatch }}>
        {props.children}
    </AppContext.Provider>
    );
};

/////////////////////////
/// useAppState hook
/////////////////////////

export const useAppState = () => {
    return React.useContext(AppContext); // I removed React before. before useContext..., not sure if it matters or changes anything.
};
