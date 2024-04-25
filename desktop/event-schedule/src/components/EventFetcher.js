const eventScheduleLink = "https://events.silhouette.band/event-schedule";

export default async function EventFetcher() {
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