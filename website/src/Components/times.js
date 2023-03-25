import React from 'react'
import {useState} from 'react';

import tw from "twin.macro";
import { SectionHeading } from "Treact/components/misc/Headings.js";
import styled from "styled-components";
const Phrase1 = tw(SectionHeading)`mt-2 text-center text-gray-700 leading-snug xl:text-xl`;
const Phrase2 = tw(SectionHeading)`mt-8 text-center text-gray-700 leading-snug xl:text-xl`;
const Button = styled.button`
        background-color: white;
        color: black;
        padding: 3px 10px;
        border-width: 2px;
        border-color: black;
        border-radius: 10px;
    `;

const time = ['08:00','09:00','10:00','11:00','12:00']
//set times available here; consider out how to set/apply to individual days

function Times(props) {
    const [event, setEvent] = useState(null)
    const [info, setInfo] = useState(false)

    function displayInfo(e) {
        setInfo(true);
        setEvent(e.target.innerText);
    }

    return (
        <div className="appointments">
            <Phrase1>Available Times:</Phrase1>

            {time.map(appointments => { return (
                <Phrase1>
                    <Button onClick={(e)=> displayInfo(e)}> {appointments} </Button>
                </Phrase1>
            )})}
            <Phrase2>
                {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
                {/*Work in here to connect backend data; when clicking a button for each time, print the selected date */}
            </Phrase2>
        </div>
    )
}

export default Times;