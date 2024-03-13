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

    return (
        <div className={"calendarContainer"}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    )
}