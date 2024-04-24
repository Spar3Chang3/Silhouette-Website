import './EventCalendar.css';

export default function EventCalendar() {

    const lastDayStyle = {
        visibility: 'hidden',
        pointerEvents: 'none'
    }

    const lastMonthStyle = {
        opacity: '50%'
    }

    const nextMonthStyle = {
        opacity: '50%'
    }

    return (
        <>
            <div className={"eventCalendarContainer"}>
                <div className={"calendarToolbar"}>
                    <span>April, 2024</span>
                </div>
                <div className={"dayContainer"}>
                    <div className={"day"} style={lastMonthStyle}>30</div>
                    <div className={"day"} style={lastMonthStyle}>31</div>
                    <div className={"day"}>1</div>
                    <div className={"day"}>2</div>
                    <div className={"day"}>3</div>
                    <div className={"day"}>4</div>
                    <div className={"day"}>5</div>
                    <div className={"day"}>6</div>
                    <div className={"day"}>7</div>
                    <div className={"day"}>8</div>
                    <div className={"day"}>9</div>
                    <div className={"day"}>10</div>
                    <div className={"day"}>11</div>
                    <div className={"day"}>12</div>
                    <div className={"day"}>13</div>
                    <div className={"day"}>14</div>
                    <div className={"day"}>15</div>
                    <div className={"day"}>16</div>
                    <div className={"day"}>17</div>
                    <div className={"day"}>18</div>
                    <div className={"day"}>19</div>
                    <div className={"day"}>20</div>
                    <div className={"day"}>21</div>
                    <div className={"day"}>22</div>
                    <div className={"day"}>23</div>
                    <div className={"day"}>24</div>
                    <div className={"day"}>25</div>
                    <div className={"day"}>26</div>
                    <div className={"day"}>27</div>
                    <div className={"day"}>28</div>
                    <div className={"day"}>29</div>
                    <div className={"day"}>30</div>
                    <div className={"day"}>31</div>
                    <div className={"day"} style={nextMonthStyle}>1</div>
                    <div className={"day"} style={nextMonthStyle}>2</div>
                </div>
            </div>
        </>
    )
}