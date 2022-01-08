import React from 'react'

export default function Form() {
    function func(event){
        //event.preventDefault();
        alert("hello");
    }
    return (
        <div>
            <form onSubmit={func}>
                <input type="submit" />
            </form>
        </div>
    )
}
