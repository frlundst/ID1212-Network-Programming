package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.entity.CustomerOrder;
import com.backend.entity.CustomerOrderItem;
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

@CrossOrigin(origins = { "http://127.0.0.1:5173", "http://localhost:5173" })
@RestController
public class OrderController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    public OrderController() {
    }

    @PostMapping("/order/create")
    @Transactional
    public String createOrder(@RequestBody OrderRequest orderRequest, HttpServletResponse response,
            HttpServletRequest request) {
        System.out.println("Create order called");
        // Get user id
        String email = jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization").substring(7));
        String customerId = customerRepository.findByEmail(email).getId();

        // Change product quantity
        CustomerOrder order = new CustomerOrder();
        order.setCustomerId(customerId);
        order.setCity(orderRequest.getCity());
        order.setAddress(orderRequest.getAddress());
        order.setZip(orderRequest.getZip());
        order.setEmail(orderRequest.getEmail());
        order.setPhone(orderRequest.getPhone());
        order.setPayed(false);
        order.setPaymentMethod(orderRequest.getPaymentMethod());
        order.setDate(new java.sql.Date(System.currentTimeMillis()).toString());
        order = orderRepository.save(order);

        // Create order items
        for (Product product : orderRequest.getProducts()) {
            CustomerOrderItem orderItem = new CustomerOrderItem();
            orderItem.setCustomerOrderId(order.getId());
            orderItem.setProductId(product.getId());
            orderItemRepository.save(orderItem);

            // Change number available
            Product p = productRepository.findById(product.getId()).get();

            if (p.getNumberAvailable() <= 0) {
                response.setStatus(400);
                throw new RuntimeException("Product out of stock");
            }

            productRepository.updateNumberAvailableById(product.getId(), p.getNumberAvailable() - 1);
        }

        response.setStatus(200);
        return "Order created";
    }

    @GetMapping("/orders/{userId}")
    public List<CustomerOrder> getOrders(@PathVariable String userId, HttpServletRequest request) {
        String email = jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization").substring(7));
        String customerId = customerRepository.findByEmail(email).getId();

        // Check if user is allowed to see this orders and authorized
        if(!customerId.equals(userId)){
            throw new RuntimeException("You are not allowed to see this orders");
        }

        return orderRepository.findAllByCustomerId(userId);
    }

    @GetMapping("/order/{orderId}")
    public CustomerOrder getOrder(@PathVariable String orderId, HttpServletRequest request) {
        String email = jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization").substring(7));
        String customerId = customerRepository.findByEmail(email).getId();

        CustomerOrder order = orderRepository.findById(orderId).get();

        // Check if user is allowed to see this orders and authorized
        if(!customerId.equals(order.getCustomerId())){
            throw new RuntimeException("You are not allowed to see this orders");
        }

        return order;
    }

    @GetMapping("/order/{orderId}/products")
    public List<CustomerOrderItem> getOrderProducts(@PathVariable String orderId, HttpServletRequest request) {
        String email = jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization").substring(7));
        String customerId = customerRepository.findByEmail(email).getId();

        CustomerOrder order = orderRepository.findById(orderId).get();

        // Check if user is allowed to see this orders and authorized
        if(!customerId.equals(order.getCustomerId())){
            throw new RuntimeException("You are not allowed to see this orders");
        }

        List<CustomerOrderItem> orderItems = orderItemRepository.findAllByCustomerOrderId(orderId);

        return orderItems;
    }

}
