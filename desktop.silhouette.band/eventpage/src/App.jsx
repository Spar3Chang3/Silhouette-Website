import './App.css';
import FetchEvents from './components/EventFetcher.js';
import { useState, useEffect } from 'react';

export default function App() {

    const [ eventArray, setEventArray ] = useState([]);
    const [ selectedEvent, setSelectedEvent ] = useState(null);

    useEffect(() => {
        FetchEvents().then(data => {
            setEventArray(data);
        });
    }, []);

    function Event(index) {
        const dateToDisplay = new Date(compileDate(eventArray[index].date, eventArray[index].endTime));
        return (
            <button className={"event"}
                onClick={() => DisplayEvent(index)}>
                {dateToDisplay.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}
            </button>
        )
    }


    function compileTime(startTime, endTime) {
        return `${startTime.toLocaleTimeString([],
            {hour: '2-digit', minute: '2-digit', hour12: true})} - ${endTime.toLocaleTimeString([],
            {hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'America/Chicago'})}`;
    }

    function compileDate(date, time) {
        return `${date}T${time}`;
    }

    function DisplayEvent(index) {
        const start = new Date(compileDate(eventArray[index].date, eventArray[index].startTime));
        const end = new Date(compileDate(eventArray[index].date, eventArray[index].endTime));
        setSelectedEvent(
            <div className={"description"}>
                <h2>{eventArray[index].eventName}</h2>
                <br/>
                <div className={"descriptionInfo"}>
                    <div className={"info"}>
                        <b>Location: </b>
                        <a
                            href={eventArray[index].eventLocationLink} className={"tab"} target={"_blank"}
                        >{eventArray[index].eventLocationName} &#8599;</a>
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
                        <span>{eventArray[index].entryPrice}</span>
                    </div>
                    <div className={"info"}>
                        <b>Age Limit: </b>
                        <span>{eventArray[index].age}</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className={"promptText"}>
                <h2>Select an Event: </h2>
                <h2>Description: </h2>
            </div>
            <div className={"eventCalendar"}>
                <div className={"eventContainer"}>
                    {eventArray.map((event, index) => (Event(index)))}
                </div>
                <div className={"descriptionContainer"}>
                    {selectedEvent}
                </div>
            </div>
        </>
    );
}