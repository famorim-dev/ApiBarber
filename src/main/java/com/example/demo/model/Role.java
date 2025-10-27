package com.example.demo.model;

public enum Role {
    ADMIN("admin"),
    USER("user");

    private String value;
    Role(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
