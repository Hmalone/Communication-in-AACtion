import React from 'react'
import {useState} from 'react';

const time = ['08:00','09:00','10:00','11:00','12:00']

function Times(props) {
    const [event, setEvent] = useState(null)
    const [info, setInfo] = useState(false)

    function displayInfo(e) {
        setInfo(true);
        setEvent(e.target.innerText);
    }

    return (
        <div className="appointments">
            Available Times:

            {time.map(appointments => { return (
                <div>
                    <button onClick={(e)=> displayInfo(e)}> {appointments} </button>
                </div>
            )})}
            <div>
                {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
            </div>
        </div>
    )
}

export default Times;