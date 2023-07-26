import React, { useReducer} from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import "./formLogic.css";
import { staticData } from '../hooksFolder/staticData/staticData';
import CommentList from './commentList';
import ReducerFunction from '../hooksFolder/hooksFile';

            
const formData = {
    name: '',
    professional: '',
    gender: '',
    date: '',
    message: '',
    id: Date.now(),
    edit: false,
    onDelete: true
}

function reducerForm(state, action) {
    switch(action.type) {
        case 'changeName': {
            return {
                ...state,
                name: action.nextName
            }
        }
        case 'changeProfessional': {
            return {
                ...state,
                professional: action.nextProfessional
            }
        }
        case 'changeGender': {
            return {
                ...state,
                gender: action.nextGender
            }
        }
        case 'changeDate': {
            return {
                ...state,
                date: action.nextDate
            }
        }
        case 'changeComment' : {
            return {
                ...state,
                message: action.nextComment
            }

        }
        case 'resetForm': {
            return {
                name: '',
                professional: '',
                gender: '',
                date: '',
                message: '',
                id: Date.now(),
                edit: false,
                onDelete: true
            }
            
        }
        default: {
            throw Error("What? That action is unkown "+action.type);
        }
    }
}

function ErrorsFallback({error, resetErrorBoundary}) {
    return (
      <div>
        <h2>An error was found!</h2>
        <p>Error: {error.message}</p>
        <button onClick={resetErrorBoundary}>Reset</button>
      </div>
    )
  }

export const FormLogic = () => {
    //useReducer to handle and control form
    const [allData, dispatcherFuc] = useReducer(ReducerFunction, staticData);
    const [stateForm, dispatchForm] = useReducer(reducerForm, formData);


    function handleProfileSubmit(e) {
        e.preventDefault();
        dispatcherFuc({
            type: 'addNewComment',
            nextObject: stateForm
        })
        dispatchForm({
            type: 'resetForm'
        })
    }

    function changeOnEdit(realObj) {
        dispatcherFuc({
            type: 'changeOnEdit',
            selectedBtn: realObj 
        });
    }

    function handleDelete(comment) {
        dispatcherFuc({
            type: 'deleteComment',
            indxComet: comment
        })
    }

    /*const { handleSubmitTwo, deleteComment, comments, headText} = props;
    let commentInterview;
    let buttonText;
    let placehold;
    if(headText.length === 26) {
        commentInterview = 'Comment Message';
        buttonText = 'Comment Now';
        placehold = 'Comment message here...';
    }else {
        commentInterview = 'Interview Message';
        buttonText = 'Schedule Now';
        placehold = 'Schedule interview here...'
    }*/

    return (
        <>
             <form 
                name='formDataTwo' 
                id='formData' 
                action="" 
                onSubmit={(e) => handleProfileSubmit(e)}>
                        <div className="group-one">
                            <h2 className='educationHead' >Form</h2>
                        </div>
                        <div id='commentDiv'>
                            <label name='name'>Name<br/>
                                <input
                                    onChange={(e) => dispatchForm({
                                    type: 'changeName',
                                    nextName: e.target.value})}
                                    value={stateForm.name}
                                    required 
                                    placeholder="Name" 
                                    type='text'/>
                            </label>
                        </div>
                        <div >
                            <label name='name'>Professional<br/>
                                <input
                                    onChange={(e) => dispatchForm({
                                    type: 'changeProfessional',
                                    nextProfessional: e.target.value})}
                                    value={stateForm.professional}
                                    required 
                                    placeholder="Professional" 
                                    type='text'/>
                            </label>
                        </div>
                        <div>
                            <label className='gender' >Gender<br/>
                                <select 
                                    id='genderOptions' 
                                    value={stateForm.gender} 
                                    onChange={e => dispatchForm({
                                    type: 'changeGender',
                                    nextGender: e.target.value})}>
                                    <option defaultValue >Choose Gender(optional)</option>
                                    <option>male</option>
                                    <option>female</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label name='date'>Post Date<br/>
                                <input
                                    onChange={e => dispatchForm({
                                        type: 'changeDate',
                                        nextDate: e.target.value
                                    })}
                                    value={stateForm.date}
                                    required 
                                    type='date'/>
                            </label>
                        </div>
                        <div>
                            <label name='message'>Interview<br/>
                                <textarea 
                                    onChange={e => dispatchForm({
                                        type: 'changeComment',
                                        nextComment: e.target.value
                                    })}
                                    value={stateForm.message}
                                    required 
                                    className="textarea1" 
                                    rows='5' 
                                    placeholder='leave a commennt' 
                                    type='text'></textarea>
                            </label>
                        </div>
                            <div className='buttonDiv'>
                                <button id='button' type="submit" >
                                    send
                                </button>
                            </div>
                    </form>
                    
                    <div className="group-one">
                        <h2 className='educationHead'>READ WHAT RECRUITERS AND FRIENDS COMMENT ABOUT ME :)</h2>
                        <ErrorBoundary
                            FallbackComponent={ErrorsFallback}>
                            <CommentList 
                                handleDelete={handleDelete}
                                changeOnEdit={changeOnEdit} 
                                allData={allData} />
                        </ErrorBoundary>
                    </div>
        </>
    )
}

/*FormLogic.defaultProps = {
    handleChange: () => 1 + 1,
    handleSubmitTwo: () => 2 + 3,
    comments: 'c',
    newComment: 'd',
    deleteComment: 'e',
    handleSubmitOne: 'd',
    headText: 'SCHEDULE INTERVIEW AND HIRE ME :)'
}*/

