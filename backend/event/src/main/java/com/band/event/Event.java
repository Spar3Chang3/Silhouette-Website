package com.band.event;

//Simply stores the time, location, and link to directions for an event
public class Event {

    private String time;
    private String price;
    private String location;
    private String directions;

    public Event() {}

    public Event(String time, String price, String location, String directions) {
        this.time = time;
        this.price = price;
        this.location = location;
        this.directions = directions;
    }

    public String getTime() {
        return time;
    }

    public String getPrice() {
        return price;
    }

    public String getLocation() {
        return location;
    }

    public String getDirections() {
        return directions;
    }
}
