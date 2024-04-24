import './EventCalendar.css';
import {useState, useEffect} from "react";
import * as ef from './EventFetcher.js';
import EventFetcher from "./EventFetcher.js";

export default function EventCalendar() {

    const [selectedEvent, setSelectedEvent] = useState(null);
    const [formattedEvents, setFormattedEvents] = useState([])


    useEffect(() => {
        EventFetcher().then(data => {
            const eventList = data.map(event => ({
                eventName: event.eventName,
                eventLocation: event.eventLocationLink,
                eventLocationLink: event.eventLocationLink,
                startTime: event.startTime,
                endTime: event.endTime,
                date: event.date,
                entryPrice: event.entryPrice,
                age: event.age
            }));
            setFormattedEvents(eventList);
        })
    }, []);

    console.log(formattedEvents);



    return (
        <>
            <div className={"eventCalendarContainer"}>
                <div className={"dayContainer"}>
                    {Event(1)}
                </div>
                <div className={"descriptionContainer"}>
                    <DisplayEvent/>
                </div>
            </div>
        </>
    )


    function Event(formattedEventsIndex) {
        return (
            <button className={"day"}
                    onClick={() => setSelectedEvent(formattedEvents[formattedEventsIndex])}
            >{formattedEvents[formattedEventsIndex].date}</button>
        )
    }

    function DisplayEvent() {
        return (
            <div className={"description"}>
                <h2>{selectedEvent.eventName}</h2>
                <span>Location: <a href={selectedEvent.eventLocationLink}>{selectedEvent.eventLocationName}</a></span>
                <span>Start Time: {selectedEvent.startTime}</span>
                <span>End Time: {selectedEvent.endTime}</span>
                <span>Entry Price: {selectedEvent.entryPrice}</span>
                <span>Required Age: {selectedEvent.age}</span>
            </div>
        )
    }
}