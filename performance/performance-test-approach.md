# Performance Test Design for https://magento.softwaretestingboard.com/

## 1. Area Chosen for Performance Testing

**Checkout Process (Login -> Search -> Add to Cart -> Checkout -> Shipping -> Place Order)**

- Most critical business flow.
- Involves multiple backend systems (auth, elasticsearch, cart, inventory, user, shipping, order creation).
- "Cart -> Checkout -> Shipping -> Place Order" - Common bottleneck under high user load.

---

## 2. Testing Approach

### Key Scenarios

- Multiple users add products to the cart simultaneously.
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

### Tools

- **JMeter / Gatling**  
  For **load testing** and **performance testing** of APIs, websites, and databases under stress.

- **Postman + Newman**  
  As I see from your available domains (files are attached), you use Postman, then my advice is to use **Newman** for running Postman collections as part of your automation pipeline.
- **Cypress**  
  For **web performance benchmarks** like page load times, **TTFB (Time to First Byte)**, and **front-end response times**. Use **Cypress** to simulate real user interactions with your Magento store during testing.

- **Locust / Lighthouse**
    - **Locust**: A performance testing tool to simulate **user behavior** for load testing and scalability.
    - **Lighthouse**: A tool for **auditing web performance**, focusing on **page load**, **TTFB**, **SEO**, and **accessibility**. Ideal for testing checkout flows and web pages.
    - Example of Lighthouse report https://pagespeed.web.dev/analysis/https-magento-softwaretestingboard-com/mqvwtmytjy?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext for such site.

- **Monitoring Tools**
    - **Grafana**: Used with **Prometheus** for **real-time monitoring** of infrastructure and application performance.
    - **Datadog**: A tool for **monitoring infrastructure and applications**, useful for tracking **CPU**, **memory usage**, **response times**, and **error rates** during stress testing.

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