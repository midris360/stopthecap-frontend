import React from "react";
import { useAppState } from "../AppState.jsx";
import { Route, Link } from "react-router-dom";
import Form from "../components/Form.jsx";


const Dashboard = (props) => {
    const { state, dispatch } = useAppState();
    const { token, url, vinyls, username } = state;

    const getVinyls = async () => {
        const response = await fetch(url + "/vinyls/", {
            method: "get",
            headers: {
                Authorization: "bearer " + token
            },
        });
        const fetchedVinyls = await response.json();
        dispatch({ type: "getVinyls", payload: fetchedVinyls });
    };

    React.useEffect(() => {
        getVinyls();
    }, []);

    const loaded = () => {
        return (
            <div className="dashboard">
                <h1>{username}'s Albums</h1>
                <Link to="/dashboard/new">
                    <button>New Vinyl</button>
                </Link>
                <Route 
                    path="/dashboard/:action" 
                    render={(rp) => <Form {...rp} getVinyls={getVinyls} />}
                 />
        <ul>
            {state.vinyls.map((vinyl) => (
                <div className="vinyl" key={vinyl.id}>
                    <h2>{vinyl.name}</h2>
                    <h4>{vinyl.title}</h4>
                    <button onClick={() => {
                    dispatch({ type: "select", payload: vinyl });
                    props.history.push("/Dashboard/edit")
                    }}
                    >
                    Edit Vinyl
                    </button> 
                     <button onClick={() => {
                    fetch(url + "/vinyls/" + vinyl.id, {
                        method: "delete",
                        headers: {
                            Authorization: "bearer " + token,
                        },
                    }).then(() => getVinyls());
                    }}
                >
                    Delete Vinyl</button>
                </div>
            ))}
        </ul>
    </div>
   );

};

// const loaded = () => {
//     return (
// <div className="card sticky-action">

// <div className="dashboard">
//                 <h1>{username}'s Albums</h1>
//                 <Link to="/dashboard/new">
//                     <button>New Vinyl</button>
//                 </Link>
//                 <Route 
//                     path="/dashboard/:action" 
//                     render={(rp) => <Form {...rp} getVinyls={getVinyls} />}
//                  />

// <ul>
// {state.vinyls.map((vinyl) => (
//     <div className="card-action" key={vinyl.id}>
   
//                     <h2>{vinyl.name}</h2>
//                     <h4>{vinyl.title}</h4>
//                     <button onClick={() => {
//                     dispatch({ type: "select", payload: vinyl });
//                     props.history.push("/Dashboard/edit")
//                     }}
//                     >
//                     Edit Vinyl
//                     </button> 
//                      <button onClick={() => {
//                     fetch(url + "/vinyls/" + vinyl.id, {
//                         method: "delete",
//                         headers: {
//                             Authorization: "bearer " + token,
//                         },
//                     }).then(() => getVinyls());
//                     }}
//                 >
//                     Delete Vinyl</button>
//                 </div>
//             ))}
//         </ul>
//     </div>


//     <div className="card-reveal"></div>
//   </div>
          
//     );

// };

    return vinyls ? loaded() : <h1>Loading...</h1>;
};

export default Dashboard;