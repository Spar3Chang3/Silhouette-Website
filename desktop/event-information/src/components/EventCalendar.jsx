import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useState, useEffect } from 'react';
import "./EventCalendar.css";
import EventFetcher, { compileTime } from "./EventFetcher.js";
import Modal from 'react-modal';


export default function EventCalendar() {
    const localizer = momentLocalizer(moment);

    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);


    const handleClose = () => setShowModal(false);

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

    const modalStyle = {
        height: '50%',
        width: '50%',
        color: 'black',
        fontSize: 'xxx-large'
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
                    setShowModal(true);
                }}
            />
            <div className={"modalContainer"}>
                <Modal
                    isOpen={showModal}
                    onRequestClose={handleClose}
                    ariaHideApp={false} // Important for accessibility
                    style={modalStyle}
                    contentLabel={"View Event"}
                >
                    <button onClick={handleClose}>Close</button>
                    <h2>{selectedEvent?.title}</h2>
                    <p><b>Location:</b> <a href={selectedEvent?.link}>{selectedEvent?.location}</a></p>
                </Modal>
            </div>
        </div>
    )
}