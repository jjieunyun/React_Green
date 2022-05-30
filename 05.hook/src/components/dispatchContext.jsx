import React, { useReducer } from 'react';

const DispatchContext = () => {
    function reducer(state, action ) {
        switch(action.type) {
            case 'id_plus' : 
                return {id : state.id +1}
            case 'text_change' :
                return {text : action.payload}
        }
    }

    const [state, dispatch] = useReducer(reducer, [{id : 1, text : 'reducer text'}])

    const DispatchContext = React.createContext(dispatch)
    return (
        <div>
            
        </div>
    );
};

export default DispatchContext;