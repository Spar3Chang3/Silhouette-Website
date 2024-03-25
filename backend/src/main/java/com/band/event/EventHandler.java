package com.band.event;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import com.google.gson.*;

import java.util.HashMap;


public class EventHandler {
    private static final String jsonPath = "./event-list.json";
    private static HashMap<String, Event> eventMap = new HashMap<>();

    private static JsonElement jElement;
    private static JsonObject jObject;
    private static Gson gson;
    private static FileReader fr;

    static {
        try {
            gson = new GsonBuilder().setPrettyPrinting().create();
            fr = new FileReader(jsonPath);
            jElement = JsonParser.parseReader(fr);
            jObject = jElement.getAsJsonObject();
        } catch (IOException e) {
            System.err.println(e);
        }

        eventMap = gson.fromJson(jElement, HashMap.class);

        try {
            fr.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

    public static String addEvent(String date, Event event) {
        if (eventMap.containsKey(date)) {
            return date + " already has an event!";
        } else {
            eventMap.put(date, event);
            try {
                write(date, event);
            } catch (IOException e) {
                return e.toString();
            }
        }
        return date + " has been added!";
    }

    public static JsonObject getEventObject() {
        return jObject;
    }

    public static JsonElement getEventElement() {
        return jElement;
    }

    public static HashMap<String, Event> getMap() {
        return eventMap;
    }

    private static void write(String date, Event event) throws IOException {
        JsonElement temp = gson.toJsonTree(event);
        jObject.add(date, temp);
        var fw = new FileWriter(jsonPath);
        gson.toJson(jObject, fw);
        fw.close();
    }

}
