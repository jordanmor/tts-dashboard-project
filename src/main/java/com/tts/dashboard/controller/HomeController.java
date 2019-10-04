package com.tts.dashboard.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "https://jordanmor.github.io")
@RequestMapping("/")
public class HomeController {

    @GetMapping
    public String welcome() {
        return "Welcome to the TTS Dashboard API!";
    }
}
