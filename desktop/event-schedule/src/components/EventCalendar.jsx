import './EventCalendar.css';
import { useState, useEffect } from "react";
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
            <div className={"promptText"}>
                <h2>Select an Event: </h2>
                <h2>Description: </h2>
            </div>
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
        const date = new Date(compileDate(formattedEvents[formattedEventsIndex].date, formattedEvents[formattedEventsIndex].endTime));
        return (
            <button className={"day"}
                    onClick={() => DisplayEvent(formattedEventsIndex)}
            >{date.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</button>
        )
    }

    function DisplayEvent(formattedEventsIndex) {
        const start = new Date(compileDate(formattedEvents[formattedEventsIndex].date, formattedEvents[formattedEventsIndex].startTime));
        const end = new Date(compileDate(formattedEvents[formattedEventsIndex].date, formattedEvents[formattedEventsIndex].endTime));
        setSelectedEvent(
            <div className={"description"}>
                <h2>{formattedEvents[formattedEventsIndex].eventName}</h2>
                <br/>
                <div className={"descriptionInfo"}>
                    <div className={"info"}>
                        <b>Location: </b>
                        <a
                            href={formattedEvents[formattedEventsIndex].eventLocationLink} className={"tab"} target={"_blank"}
                        >{formattedEvents[formattedEventsIndex].eventLocationName} &#8599;</a>
                    </div>
                    <div className={"info"}>
                        <b>Date: </b>
                        <span>{start.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</span>
                    </div>
                    <div className={"info"}>
                        <b>Time: </b>
                        <span>{compileTime(start, end)}</span>
                    </div>
                    <div className={"info"}>
                        <b>Price: </b>
                        <span>{formattedEvents[formattedEventsIndex].entryPrice}</span>
                    </div>
                    <div className={"info"}>
                        <b>Age Limit: </b>
                        <span>{formattedEvents[formattedEventsIndex].age}</span>
                    </div>
                </div>
            </div>
        );
    }

    function compileTime(startTime, endTime) {
        return `${startTime.toLocaleTimeString([], 
            {hour: '2-digit', minute: '2-digit', hour12: true})} - ${endTime.toLocaleTimeString([], 
            {hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'America/Chicago'})}`;
    }

    function compileDate(date, time) {
        return `${date}T${time}`;
    }
}