# Microservice Basics with Custom Event Bus

## Overview
This project demonstrates the basics of microservices by implementing a simple microservice architecture with a custom event bus. The event bus facilitates communication between different microservices without direct coupling, following an event-driven approach.

## What is a Microservice?
Microservices is an architectural style that structures an application as a collection of small, independent services that communicate with each other. Each microservice focuses on a specific business capability and runs independently, enabling better scalability, maintainability, and flexibility.

### Basics of Microservices:
- **Decentralized:** Each service has its own database and business logic.
- **Independently Deployable:** Services can be updated or deployed independently.
- **Loosely Coupled:** Services interact through APIs or messaging systems.
- **Scalable:** Individual services can be scaled based on demand.
- **Resilient:** Failure in one service does not impact others drastically.
- **Technology Agnostic:** Each microservice can be built using different technologies.

## Custom Event Bus
### Why Use an Event Bus?
An event bus is a messaging mechanism that enables microservices to communicate asynchronously by sending and receiving events. This prevents tight coupling between services, improving scalability and fault tolerance.

### Features of Custom Event Bus in This Project:
- Enables event-driven communication between microservices.
- Handles event publishing and subscription.
- Ensures messages are delivered to the correct services.
- Provides a basic implementation of pub/sub messaging.

## Getting Started
### Prerequisites
- Node.js (for JavaScript-based services)
- Docker (optional, for containerization)
- Postman (for API testing)



## Contributing
Contributions are welcome! Feel free to fork the repo and create pull requests.

## License
This project is licensed under the MIT License.

