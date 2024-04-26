import './App.css';
import { useState, useEffect } from 'react';
import FetchEvents from './components/EventFetcher.js';

export default function App() {

    const [ eventArray, setEventArray ] = useState([]);


    useEffect(() => {
        FetchEvents().then(data => {
            setEventArray(data);
        });
    }, []);

    function Event(index) {
        const start = new Date(compileDate(eventArray[index].date, eventArray[index].startTime));
        const end = new Date(compileDate(eventArray[index].date, eventArray[index].endTime));

        let height = '50vh';
        let opacity = 1;

        const toggleDropdown = () => {
            height === '15vh' ? height = '50vh' : height = '15vh';
            opacity === 0 ? opacity = 1 : opacity = 0;
            console.log(height);
        }

        return (
            <div className={"event"} style={{height: height}}>
                <div className={"closedView"}>
                    <button className={"dropdownButton"}
                            onClick={() => toggleDropdown()}
                    >{start.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</button>
                </div>
                <br/>
                <div className={"description"} style={{opacity: opacity}}>
                    <div className={"descriptionInfo"}>
                        <div className={"info"}>
                            <b>Location: </b>
                            <a
                                href={eventArray[index].eventLocationLink} className={"tab"} target={"_blank"}
                            >{eventArray[index].eventLocationName} &#8599;</a>
                        </div>
                        <div className={"info"}>
                            <b>Date: </b>
                            <span>{start.toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })}</span>
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
            </div>
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

    return (
        <>
            <div className={"eventDropdown"}>
                {eventArray.map((event, index) => Event(index))}
            </div>
        </>
    );
}