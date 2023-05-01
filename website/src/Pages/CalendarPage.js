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
import Time from "Components/time.js";

const FormContainer = tw.div`w-full flex-1 mt-8`;
const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
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
const CalendarContainer = styled.div`
        /* ~~~ container styles ~~~ */
        max-width: 600px;
        margin: auto;
        margin-top: 20px;
        padding: 10px;
        border-radius: 3px;
        `; //background-color: #d4f7d4;

const SubmitButton = styled.button`
        ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
        .icon {
          ${tw`w-6 h-6 -ml-2`}
        }
        .text {
          ${tw`ml-3`}
        }
      `;

export default () => {
    async function createAppointment(){
        var data = {
          customer: parent,
          childName: child,
          date: day,
          time: time,
          service: service,
          location: location
        }
        try{
          let response = await fetch('/calendar', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });
          const result = response.json();
          alert("Appointment scheduled successfully!");
        } catch (error){
          alert("Problem creating appointment. Error: ", error);
        }
    }

    async function handleSubmit(e){
        e.preventDefault();
        
        if(parent === ""){
          alert("Please enter a parent name.");
        }else if(child === ""){
          alert("Please enter a child name.");
        }else if(Time === ""){
          alert("Please enter a time.");
        }else if(day == ""){
          alert("Please enter a time..");
        }else if(service === ""){
          alert("Please enter the appointment service.");
        }else if(location === ""){
          alert("Please enter a location.");
        }
        createAppointment();
      }

    const [date, setDate] = useState(new Date())
    const [showTime, setShowTime] = useState(false);
    const [parent, setParent] = useState('');
    const [child, setChild] = useState('');
    const [time, setTime] = useState('');
    const [day, setDay] = useState('');
    const [service, setService] = useState('');
    const [location, setLocation] = useState('');

    return (
        <AnimationRevealPage>
            <Header />
            <Container>
            <TwoColumn>
                <TextColumn>
                    <div>
                        <Heading1>Schedule</Heading1>
                        <div>
                            <CalendarContainer>
                                <Calendar calendarType = 'US' onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
                            </CalendarContainer>
                        </div>
                    </div>
                </TextColumn> 
                <TextColumn>
                    <div>
                        <Heading2>Available Appointments</Heading2>
                        <Phrase>{date.toDateString()}</Phrase>
                        <Times showTime={showTime} date={date}/>
                        {showTime ? <FormContainer>
                            <Phrase>Confirm Booking:</Phrase>
                            <Form onSubmit={handleSubmit}>
                                <Input type="parent" placeholder="Parent Name" value={parent} onChange={e => setParent(e.target.value)}/>
                                <Input type="child" placeholder="Child Name" value={child} onChange={e => setChild(e.target.value)}/>
                                <Input type="day" placeholder="Confirm Day (mm/dd)" value={day} onChange={e => setDay(e.target.value)}/>
                                <Input type="t" placeholder="Confirm Time (00:00)" value={time} onChange={e => setTime(e.target.value)}/>
                                <Input type="service" placeholder="Enter desired service for appointment" value={service} onChange={e => setService(e.target.value)}/>
                                <Input type="location" placeholder="Enter desired location for appointment" value={location} onChange={e => setLocation(e.target.value)}/>
                                <SubmitButton type="submit">Submit</SubmitButton>
                            </Form>
                        </FormContainer> : null}
                    </div>
                </TextColumn>
            </TwoColumn>
            <div>
            
            </div>
            </Container>
            <Footer />
        </AnimationRevealPage>
  );
};