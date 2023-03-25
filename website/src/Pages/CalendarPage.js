import React from "react";
import AnimationRevealPage from "Treact/helpers/AnimationRevealPage";
import Header from "Treact/components/headers/light.js";
import Footer from "Treact/components/footers/Footer.js";

import {useState} from 'react';
import '../Style/CalendarFormat.css';
import Calendar from 'react-calendar'; 
import Times from "Components/time.js";

import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "Treact/components/misc/Headings.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const Heading1 = tw(SectionHeading)`mb-6 text-center text-primary-900 leading-snug xl:text-5xl`;
const Heading2 = tw(SectionHeading)`text-center text-primary-900 leading-snug xl:text-5xl`;
const Phrase = tw(SectionHeading)`mt-4 text-center text-gray-900 leading-snug xl:text-2xl`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

export default ({
    heading1 = "Schedule",
    heading2 = "Available Appointments"
}
) => {
    const [date, setDate] = useState(new Date())
    const [showTime, setShowTime] = useState(false);
    const CalendarContainer = styled.div`
        /* ~~~ container styles ~~~ */
        max-width: 600px;
        margin: auto;
        margin-top: 20px;
        padding: 10px;
        border-radius: 3px;
        `; //background-color: #d4f7d4;

    return (
        <AnimationRevealPage>
            <Header />
            <Container>
            <TwoColumn>
                <TextColumn>
                    <div>
                        <Heading1>{heading1}</Heading1>
                        <div>
                            <CalendarContainer>
                            <Calendar calendarType = 'US' onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
                            </CalendarContainer>
                        </div>
                    </div>
                </TextColumn> 
                <TextColumn>
                    <div>
                    <Heading2>{heading2}</Heading2>
                        <Phrase>{date.toDateString()}</Phrase>
                        <Times showTime={showTime} date={date}/>
                    </div>
                </TextColumn>
            </TwoColumn>
            </Container>
            <Footer />
        </AnimationRevealPage>
  );
};