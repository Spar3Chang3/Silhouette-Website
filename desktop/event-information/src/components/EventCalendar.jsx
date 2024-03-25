import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useState } from 'react';
import "./EventCalendar.css";

export default function EventCalendar() {
    const localizer = momentLocalizer(moment);
    const [ events, setEvents ] = useState([
        {
            start: new Date(),
            end: new Date(moment().add(1, 'days')),
            title: 'test',
        },
    ])

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