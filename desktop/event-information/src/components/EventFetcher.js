const apiLink = "";

export default function EventFetcher(link) {

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