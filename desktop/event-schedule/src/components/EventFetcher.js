const eventScheduleLink = "https://events.silhouette.band/event-schedule";

export default function EventFetcher() {
    return (
        fetch(eventScheduleLink)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response;
            })
            .then(data => {
                return data.json();
            })
            .catch(error => {
                console.error('error');
            })
    )
}

export function compileTime(date, time) {
    return `${date}T${time}`;
}

export function addEvent(startHour, startMinute, endHour, endMinute, MM, DD, YYYY, eventName, eventLocationName, eventLocationLink, eventPrice, age) {
    const startTime = `${startHour}:${startMinute}`;
    const endTime = `${endHour}:${endMinute}`;
    const date = `${YYYY}-${MM}-${DD}`;
    const newEvent = {
        eventName,
        eventLocationName,
        eventLocationLink,
        startTime,
        endTime,
        date,
        eventPrice,
        age
    }
}

EventFetcher()
    .then((data) => {
        console.log(data);
    });
