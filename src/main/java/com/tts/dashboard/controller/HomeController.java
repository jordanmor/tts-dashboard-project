package com.tts.dashboard.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
public class HomeController {

    @GetMapping
    public String welcome() {
        return "Welcome to the TTS Dashboard API!";
    }
}
