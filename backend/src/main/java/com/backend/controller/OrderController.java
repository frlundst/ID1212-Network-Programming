package com.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.entity.Order;
import com.backend.entity.OrderItem;
import com.backend.entity.Product;
import com.backend.model.OrderRequest;
import com.backend.repository.CustomerRepository;
import com.backend.repository.OrderItemRepository;
import com.backend.repository.OrderRepository;
import com.backend.repository.ProductRepository;
import com.backend.security.config.JwtTokenUtil;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;

@CrossOrigin(origins = {"http://127.0.0.1:5173", "http://localhost:5173"})
@RestController
public class OrderController {

    @Autowired 
    private ProductRepository productRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired CustomerRepository customerRepository;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    public OrderController() {
    }

    @PostMapping("/createOrder")
    @Transactional
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

            // Create order items
            for (Product product : orderRequest.getProducts()) {
                OrderItem orderItem = new OrderItem();
                orderItem.setOrderId(order.getId());
                orderItem.setProductId(product.getId());
                orderItemRepository.save(orderItem);

                // Change number available
                Product p = productRepository.findById(product.getId()).get();
                productRepository.updateNumberAvailableById(product.getId(), p.getNumberAvailable() - 1);
            }

            orderRepository.save(order);
            response.setStatus(200);
            return "Order created";
        }catch(Exception e){
            System.out.println(e);
            return "Error";
        }
    }
}
