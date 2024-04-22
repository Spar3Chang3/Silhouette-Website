export default function EventUpdatePage() {
    return (
        <>
            <div className={"eventInputContainer"}>
                <div className={"questionPanel"}>
                    <div className={"eventName"}>
                        <span>What's the name of this event?</span>
                        <input/>
                    </div>
                    <br/>
                    <div className={"time"}>
                        <span>What time will the event start?</span>
                        <input className={"hour"}/>
                        <span>:</span>
                        <input className={"minute"}/>
                    </div>
                    <br/>
                    <div className={"date"}>
                        <span>What is the event date?</span>
                        <input className={"month"}>MM</input>
                        <span>/</span>
                        <input className={"day"}>DD</input>
                        <span>/</span>
                        <input className={"year"}>YYYY</input>
                    </div>
                    <br/>
                    <div className={"entryPrice"}>
                        <span>What is the price of entry?</span>
                        <span>...leave blank if free...</span>

                    </div>
                    <br/>
                    <div className={"eventLocationName"}>
                        <span>What is the name of the venue?</span>
                        <input/>
                    </div>
                    <br/>
                    <div className={"eventLocationLink"}>
                        <span>Please paste the Google Maps link of location below:</span>
                        <input/>
                    </div>
                    <br/>
                    <div className={"eventAge"}>
                        <button>21+</button>
                        <button>18+</button>
                        <button>Open to All</button>
                    </div>
                </div>
            </div>
        </>
    )
}