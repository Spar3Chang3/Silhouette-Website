package com.band.event;

public class EventContainer {
    private Event event;

    public EventContainer() {

    }

    public EventContainer(Event event) {
        this.event = event;
    }

    public void addEvent(Event event) {
        this.event = event;
    }
}
