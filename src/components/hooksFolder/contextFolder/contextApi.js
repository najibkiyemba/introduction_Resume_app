import React from 'react';
//import { useHooksHandler } from '../hooksFile';

export const contextProvider = React.createContext();

export const UseContextApi = ({children}) => {
    /*const [newObject, newArray, handleNewObjects, handleSubmitObject, handleDeleteObject, handleSelect] = useHooksHandler();*/
    //const headText = "LEAVE COMMENTS ABOUT ME :)";
    return (
        <>
            <contextProvider.Provider>
                {
                    children
                }
            </contextProvider.Provider>
        </>
    )
}

