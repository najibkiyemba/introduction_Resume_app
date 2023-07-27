import React from "react";
import {FcBusinesswoman} from 'react-icons/fc';
import {FcBusinessman} from 'react-icons/fc';
import "./commentList.css";


export default function CommentList({allData, changeOnEdit, handleDelete}) {
    //testinng Errors
    
    function handleDeleteError(delet) {
        handleDelete(delet.id)
        /*if(!delet.onDelete) {
            throw new Error("You can't delete comment")
        }else {
            handleDelete(delet.id)
        }*/
    }
    return (
        <>
            {
                allData && allData.map((profile) => (
                <div className="otherComments" key={profile.id}>
                    {
                    }
                    <h3>Profile
                        {profile.gender === 'male' ? <FcBusinessman className="commentImage"/> : <FcBusinesswoman className="commentImage"/> }
                        
                        <button
                            onClick={() => handleDeleteError(profile)}
                            className='saveButton'> Delete Comment
                        </button>
                        {/*button channges profile's value*/profile.edit ? (
                            <button
                                className="saveButton"
                                onClick={() => changeOnEdit(profile.edit = false)}>
                                Save Comment</button>) : 
                            (<button 
                                className="saveButton"
                                onClick={() => changeOnEdit(profile.edit = true)}>
                                Edit Comment</button>)}
                       
                    </h3>
                    <DataProfile singObjec={profile} changeOnEdit={changeOnEdit}/>
                </div>
                )) 
            }
        </>
    )
}

function DataProfile({singObjec, changeOnEdit}) {
    let dataDisplayer;
    if(singObjec.edit) {
        dataDisplayer = (
            <>
                <div className="profileDiv">
                    <label className="profileLabel">
                        Name<br/> <input 
                            onChange={e => changeOnEdit(singObjec.name = e.target.value)}
                            value={singObjec.name} 
                            type="text" />
                    </label><br/>

                    <label className="profileLabel">
                        Professional<br/> <input 
                        value={singObjec.professional}
                        onChange={e => changeOnEdit(singObjec.professional = e.target.value)}
                        type="text"/><br/>
                    </label><br/>
                    <label className="profileLabel">
                        Gender <br/>
                        <select 
                            onChange={e => changeOnEdit(singObjec.gender = e.target.value)} 
                            value={singObjec.gender}>
                            <option>Choose gender</option>
                            <option>male</option>
                            <option>female</option>
                        </select>
                    </label><br/>

                    <label className="profileLabel">
                        Post Date: <br/> <input 
                            onChange={e => changeOnEdit(singObjec.date = e.target.value)}
                            value={singObjec.date} type="date"/>
                    </label><br/>

                    <label className="profileLabel">
                        Message <br/><textarea 
                            rows='4'
                            cols="55"
                            type="text"
                            value={singObjec.message}
                            onChange={e => changeOnEdit(singObjec.message = e.target.value)}/>
                    </label>
                </div>
            </>
        )
    }else (
        dataDisplayer = (
            <>
                <div className="profileSection">
                    <p>
                        <b>Name:</b> {singObjec.name}
                    </p>
                    <p>
                        <b>Professional:</b> {singObjec.professional} 
                    </p>
                    <p>
                        <b>Post Date:</b> {singObjec.date}
                    </p>
                    <p>
                        <b>Message:</b> {singObjec.message}
                    </p>
                </div>
            </>
        )
    )
    return dataDisplayer;
}

