import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useState, useEffect } from 'react';
import "./EventCalendar.css";
import EventFetcher, { compileTime } from "./EventFetcher.js";


export default function EventCalendar() {
    const localizer = momentLocalizer(moment);

    const [events, setEvents] = useState([]);

    useEffect(() => {
        EventFetcher()
            .then(data => {
                const formattedEvents = data.map(event => ({
                    title: event.eventName,
                    start: new Date(compileTime(event.date, event.startTime)),
                    end: new Date(compileTime(event.date, event.endTime)),
                    // You can add any other properties you'd like here (e.g., location)
                    location: event.eventLocationName,
                    link: event.eventLocationLink,
                    price: event.eventPrice,
                    age: event.age
                }));
                setEvents(formattedEvents);
            })
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    const calendarStyle = {
        height: '100vh',
        width: '100vw',
    }

    return (
        <div className={"calendarContainer"}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={calendarStyle}
            />
        </div>
    )
}