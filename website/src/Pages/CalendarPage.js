import React from "react";
import AnimationRevealPage from "Treact/helpers/AnimationRevealPage";
import Header from "Treact/components/headers/light.js";
import Footer from "Treact/components/footers/Footer.js";

import {useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'; 
import Times from "Components/time.js";

import tw from "twin.macro";
import styled from "styled-components";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

export default () => {
    const [date, setDate] = useState(new Date())
    const [showTime, setShowTime] = useState(false);

    return (
        <AnimationRevealPage>
            <Header />
            <Container>
            <TwoColumn>
                <TextColumn>
                    <div>
                        <h1>Schedule</h1>
                        <div>
                            <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
                        </div>
                    </div>
                </TextColumn>
                <TextColumn>
                    <div>
                        <h1>Available Appointments</h1>
                        <div>
                            Selected date: {date.toDateString()}
                        </div>
                        <Times showTime={showTime} date={date}/>
                    </div>
                </TextColumn>
            </TwoColumn>
            </Container>
            <Footer />
        </AnimationRevealPage>
  );
};