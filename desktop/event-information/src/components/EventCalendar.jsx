import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useState, useEffect } from 'react';
import "./EventCalendar.css";
import EventFetcher, { compileTime } from "../../../event-schedule/src/components/EventFetcher.js";
import Modal from 'react-modal';
import EventDescription from "./EventDescription.jsx";


export default function EventCalendar() {
    const localizer = momentLocalizer(moment);

    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showDescription, setShowDescription] = useState(false);


    const handleClose = () => setShowModal(false);

    useEffect(() => {
        EventFetcher()
            .then(data => {
                setEvents(data.map(event => ({
                    title: event.eventName,
                    start: new Date(compileTime(event.date, event.startTime)),
                    end: new Date(compileTime(event.date, event.endTime)),
                    location: event.eventLocationName,
                    link: event.eventLocationLink,
                    price: event.eventPrice,
                    age: event.age
                })));
            })
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    const calendarStyle = {
        height: '100vh',
        width: '100vw',
    }


    const descriptionStyle = {
        visibility: `${(showDescription) ? 'visible' : 'hidden'}`
    }


    return (
        <div className={"calendarContainer"}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={calendarStyle}
                onSelectEvent={(ev) => {
                    setSelectedEvent(ev);
                    setShowDescription(true);
                }}
            />

            <div className={"description"} style={descriptionStyle}>
                <EventDescription event={selectedEvent}/>
            </div>
        </div>
    )
}