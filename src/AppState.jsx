import React, {useContext, useReducer} from "react"

///////////////////////
/// INITIAL STATE
//////////////////////

const initialState = {
    url: "http://stopthecap.herokuapp.com",
    token: null,
    username: null
};

///////////////////
//  REDUCER
//////////////////
// action = {type: "", payload: ---}
const reducer = (state, action) => {
        switch(action.type) {
            case "signup":
                fetch(state.url + "/users/", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(action.payload)
                })
                .then(response => response.json())
                .then(user => {
                    console.log(user)
                    console.log(state)
                    return {
                        ...state,
                        token: user.token,
                        username: user.username,
                        };
                });
                break
                case "login":
                    fetch(state.url + "/login/", {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(action.payload)
                    })
                    .then(response => response.json())
                    .then(user => {
                        return {
                            ...state,
                            token: user.token,
                            username: user.username
                        };
                    });
                    break
                default:
                    return state;
                    break
        }
};


///////////////////
/// AppContext
//////////////////
const AppContext =React.createContext(null)


////////////////////////
/// AppState Component
////////////////////////
export const AppState = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <AppContext.Provider value={{state, dispatch}}>{props.children}</AppContext.Provider>
};

/////////////////////////
/// useAppState hook
/////////////////////////

export const useAppState = () => {
    return React.useContext(AppContext)
}
