package com.example.demo.dto;

import com.example.demo.model.Role;

public record AuthRegistroDTO(String email, String senha, Role role) {
}
