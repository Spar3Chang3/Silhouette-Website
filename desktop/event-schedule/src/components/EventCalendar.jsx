import './EventCalendar.css';
import {useState, useEffect} from "react";

export default function EventCalendar() {

    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <>
            <div className={"eventCalendarContainer"}>
                <div className={"dayContainer"}>
                    <Event eventName={"Test"}/>
                </div>
                <div className={"descriptionContainer"}>
                    <DisplayEvent/>
                </div>
            </div>
        </>
    )


    function Event(eventName, eventLocation, eventLocationLink, startTime, endTime, date, entryPrice, age) {
        return (
            <button className={"day"}
                    onClick={setSelectedEvent("hi!")}
            >{date}</button>
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