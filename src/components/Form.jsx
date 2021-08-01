import React from "react";
import { useAppState } from "../AppState.jsx";

const Form = (props) => {
        const { state, dispatch } = useAppState();
        const { token } = state;
        const action = props.match.params.action;
        const [formData, setFormData] = React.useState(state[action]);


        const actions = {
            new: () => {
                return fetch(state.url + "/vinyls", {
                    method: "post",
                    headers: {
                    "Content-Type": "application/json",
                    Authorization: "bearer " + token,
                },
                body: JSON.stringify(formData),
            }).then((response) => response.json());
        },
        edit: () => {
            return fetch(state.url + "/vinyls/" + state.edit.id, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "bearer " + token,
                },
                body: JSON.stringify(formData),
            }).then((response) => response.json());
        },
    };


        const handleChange = (event) => { 
            setFormData({...formData, [event.target.name]: event.target.value });
        };
    
        const handleSubmit = (event) => {
            event.preventDefault();
            actions[action]().then((data) => {
               props.getVinyls();
               props.history.push("/Dashboard/");
            });
        };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
<<<<<<< HEAD
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="name" />
                <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="title" />
=======
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
>>>>>>> 50a49bdb4077b1179cae7d11dfff58bc96ccb879
                <input type="submit" value={action} />
            </form>
        </div>
        );
};

export default Form;