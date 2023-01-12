package com.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.entity.Order;
import com.backend.model.OrderRequest;
import com.backend.repository.CustomerRepository;
import com.backend.repository.OrderRepository;
import com.backend.security.config.JwtTokenUtil;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@CrossOrigin(origins = {"http://127.0.0.1:5173", "http://localhost:5173"})
@RestController
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired CustomerRepository customerRepository;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    public OrderController() {
    }

    @PostMapping("/createOrder")
    public String createOrder(@RequestBody OrderRequest orderRequest, HttpServletResponse response, HttpServletRequest request) {
        try{
            // Get user id
            String email = jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization").substring(7));
            String userId = customerRepository.findByEmail(email).getId();

            // Ändra product quantity
            Order order = new Order();
            order.setUserId(userId);
            order.setCity(orderRequest.getCity());
            order.setAddress(orderRequest.getAddress());
            order.setZip(orderRequest.getZip());
            order.setEmail(orderRequest.getEmail());
            order.setPhone(orderRequest.getPhone());
            order.setPayed(false);


            //orderRepository.save(order);
            response.setStatus(200);
            return "Order created";
        }catch(Exception e){
            System.out.println(e);
            return "Error";
        }
    }
}
