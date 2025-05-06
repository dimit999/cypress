# Performance Test Design for https://magento.softwaretestingboard.com/

## 1. Area Chosen for Performance Testing

**Checkout Process (Login -> Search -> Add to Cart -> Checkout -> Shipping -> Place Order)**

- Most critical business flow.
- Involves multiple backend systems (auth, elasticsearch, cart, inventory, user, shipping, order creation).
- "Cart -> Checkout -> Shipping -> Place Order" - Common bottleneck under high user load.

---

## 2. Testing Approach

### Key Scenarios

- Multiple users adding products to cart simultaneously.
- Concurrent users proceeding through checkout and placing orders.
- Users updating shipping/billing addresses during checkout.
- Mix of guest and registered user checkouts.

### Load Profile & Parameters

- Ramp up from 50 to 500 virtual users.
- Each user session: login (or guest), product search, add to cart, checkout, fill shipping, place order.
- Test duration: 30 minutes sustained load, with peak bursts.
- Network: average and slow connections.

### Metrics to Collect

- Response time for each step (especially “Place Order”).
- Error rate (HTTP 5xx, failed orders).
- Throughput (orders/minute).
- System resource usage (CPU, memory, DB connections if available) - need to verify together with DevOps.
- Time to first byte (TTFB) and page load time for checkout pages.

### Success Criteria

- 95% of orders placed within 2 seconds.
- Error rate < 1%.
- No resource exhaustion or system crashes.

---

## 3. Summary Table

| Scenario                              | Why Important?                      | Parameters                       | Metrics Collected                |
|----------------------------------------|-------------------------------------|----------------------------------|----------------------------------|
| Add to cart and checkout (order flow)  | Core business flow, backend stress  | 50-500 users, 30 min, burst load | Response time, error rate, throughput, resource usage |
| Product search under load              | Search is high-traffic, DB stress   | 100 users, search every 5 sec    | Search response time, errors     |
| Simultaneous address updates           | Tests account DB and concurrency    | 50 users, rapid address updates  | Update latency, error rate       |

---

**Summary:**  
Focus on the checkout process and related flows under load, measure response times and error rates, and ensure the system remains stable and performant under realistic and peak traffic conditions.