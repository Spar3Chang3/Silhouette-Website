import './EventCalendar.css';
import {useState, useEffect} from "react";
import * as ef from './EventFetcher.js';
import EventFetcher from "./EventFetcher.js";

export default function EventCalendar() {

    const [selectedEvent, setSelectedEvent] = useState(null);
    const [formattedEvents, setFormattedEvents] = useState([])

    useEffect(() => {
        EventFetcher()
            .then(data => {
                setFormattedEvents(data);
            })
    }, []);



    return (
        <>
            <div className={"eventCalendarContainer"}>
                <div className={"dayContainer"}>
                    {formattedEvents.map((event, index) => (Event(index)))}
                </div>
                <div className={"descriptionContainer"}>
                    {selectedEvent}
                </div>
            </div>
        </>
    )


    function Event(formattedEventsIndex) {
        return (
            <button className={"day"}
                    onClick={() => DisplayEvent(formattedEventsIndex)}
            >{formattedEvents[formattedEventsIndex].eventName}</button>
        )
    }

    function DisplayEvent(formattedEventsIndex) {
        const start = new Date(compileTime(formattedEvents[formattedEventsIndex].date, formattedEvents[formattedEventsIndex].startTime));
        const end = new Date(compileTime(formattedEvents[formattedEventsIndex].date, formattedEvents[formattedEventsIndex].endTime));
        setSelectedEvent(
            <div className={"description"}>
                <h2>{formattedEvents[formattedEventsIndex].eventName}</h2>
                <div className={"descriptionInfo"}>
                    <span>Location: <a
                        href={formattedEvents[formattedEventsIndex].eventLocationLink}>{formattedEvents[formattedEventsIndex].eventLocationName}</a></span>
                    <span>Date: {start.getDate()}</span>
                    <span>Start: {start.getHours()}</span>
                    <span>End: {end.getTime().toString()}</span>
                    <span>Price: {formattedEvents[formattedEventsIndex].entryPrice}</span>
                    <span>Age Limit: {formattedEvents[formattedEventsIndex].age}</span>
                </div>
            </div>
        );
    }

    function compileTime(date, time) {
        return `${date}T${time}`;
    }
}