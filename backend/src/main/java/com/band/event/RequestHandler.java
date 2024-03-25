package com.band.event;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;

@RestController
@RequestMapping("/api/silhouette/events")
public class RequestHandler {


    @GetMapping
    @ResponseStatus(code = HttpStatus.ACCEPTED)
    public HashMap<String, Event> getEvents() {
        return EventHandler.getMap();
    }

    @PostMapping
    public String addEvent(@RequestParam String date, String time, String price, String location, String directions) {
        var event = new Event(time, price, location, directions);
        return EventHandler.addEvent(date, event);
    }
}
