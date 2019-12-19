import React, { useState, useEffect, useReducer, useContext } from 'react';
import * as Reducer from '../store/hooks_state/hooks_reducer'
import * as ACTIONS from '../store/actions/actions'
import Context from '../utils/context'



const HooksContainer1 = () => {

    const context = useContext(Context)

    const [stateValue, setValue] = useState(0)
    const [useEffectValue, setUseEffectValue] = useState(null)

    const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState);

    useEffect(() => {
        setTimeout(() => setUseEffectValue("useEffect Worked"), 3000);
    }, [stateValue])

    const incrementValue = () => {
        setValue(stateValue + 1)
    }

    const decrementValue = () => {
        setValue(stateValue - 1)
    }

    const changeUseEffectValue = () => {
        setUseEffectValue("Some String");
    }

    const handleDispatchTrue = () => {
        dispatch(ACTIONS.SUCCESS)
    }

    const handleDispatchFalse = () => {
        dispatch(ACTIONS.FAILURE)
    }


    return (
        <div>
            React Hooks
            <br /><br />
            <button onClick={() => changeUseEffectValue()}>Change Use Effect</button>
            <br /><br />
            <button onClick={() => incrementValue()}>Inc Local State</button>
            <button onClick={() => decrementValue()}>Dec Local State</button>
            <br /><br />
            <button onClick={() => context.incGlobalValue()}>Inc Global State</button>
            <button onClick={() => context.decGlobalValue()}>Dec GlobalState</button>
            <br /><br />
            <button onClick={() => handleDispatchTrue()}>Dispatch Local True</button>
            <button onClick={() => handleDispatchFalse()}>Dispatch Local False</button>
            <br /><br />
            <button onClick={() => context.dispatchGlobalContextTrue()}>Dispatch Global True</button>
            <button onClick={() => context.dispatchGlobalContextFalse()}>Dispatch Global False</button>
            <br />
            <div>
                <p>{useEffectValue
                    ? <p>{useEffectValue}</p>
                    : <p>No value</p>
                }
                </p>

                <p>{context.useContextSubmit
                    ? <p>{context.useContextSubmit}</p>
                    : <p>No User Text</p>
                }</p>

                <p>Local State: {stateValue}</p>
                <p>Global State: {context.valueGlobalState}</p>
                <p>{state.stateprop1
                    ? <p>Local stateprop1 is true</p>
                    : <p>Local stateprop1 is false</p>
                }
                </p>
                <p>{context.reducerGlobalState
                    ? <p>Global stateprop2 is true</p>
                    : <p>Global stateprop2 is false</p>
                }
                </p>
            </div>
        </div>
    )
}

export default HooksContainer1;