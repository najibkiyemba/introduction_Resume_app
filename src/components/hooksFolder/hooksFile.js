//import {useEffect, useState, useReducer} from 'react';
//import  expirationId  from './utilityLogic/utilityLogic';


//custom hook for handling form logic and all updates

/*export default function useReducerHook() {
    //reducer function to be used in useReducer hook
    //const [allData, dispatcher] = useReducer(ReducerFunction, staticData);

    
}*/

export default function ReducerFunction(state, action) {
    switch(action.type) {
        case 'addNewComment': {
            return [
                ...state,
                action.nextObject
            ]
        }
        case 'deleteComment': {
            return state.filter(comment => comment.id !== action.indxComet);
        }
        case 'commentSelected': {
            return state.map(cmt => {
                if(cmt.id === action.selected.id) {
                    return action.selected;
                }else {
                    return cmt;
                }
            })
            
        }
        case 'changeOnEdit': {
            return state.map(btn => {
                if(btn.id === action.selectedBtn.id) {
                    return action.selectedBtn;
                }else {
                    return btn
                }
            })
        }
        default: {
            throw Error(`Unkown action performed ${action.type}`);
        }
    }
}
