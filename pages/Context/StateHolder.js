import React, {useState} from 'react';
import Context from './Context'
const Stateholder = (props) =>{
    const [user, setuser] = useState(null)
    const [__projectID, set__ProjectID] = useState('')



    const states = {
        user, setuser,
        __projectID, set__ProjectID
    }

    return (
        <Context.Provider value={states}>
        {props.children}
        </Context.Provider>
    )
}
export default Stateholder