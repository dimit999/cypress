# Postman API Automation for Petstore API

This repository contains a comprehensive set of automated tests for the **Petstore API v2** using **Postman**. The tests are designed to validate the functionality of the following API endpoints:

- **POST /pet**: Adds a new pet to the petstore repository and generates a unique Pet ID.
- **GET /pet/{petId}**: Fetches details of a pet based on the provided Pet ID.

## Table of Contents
1. [Overview](#overview)
2. [Postman Collection Details](#postman-collection-details)
3. [Test Scenarios](#test-scenarios)
4. [How to Use](#how-to-use)
5. [Tests](#tests)
6. [Postman Collection Export](#postman-collection-export)
7. [Performance: run Newman and check results](#performance-run-newman-and-check-results)

---

### 1. Overview

The **Petstore API** provides two major endpoints to interact with the pet data:

1. **POST /pet** - Used for adding a new pet to the store, which will return a unique **petId** for the newly created pet.
2. **GET /pet/{petId}** - Used for fetching the details of a specific pet by **petId**.

The automated tests in this repository cover positive, negative, and edge cases for these endpoints to ensure the system works as expected under various conditions.

---

### 2. Postman Collection Details

This collection consists of several test scenarios, organized as follows:

- **Add Pet - Add Valid Pet (POST /pet)**: Adds a pet with valid data.
- **Add Pet - Invalid Double Body (POST /pet)**: Tests the scenario where an invalid double body payload is sent.
- **Add Pet - Missing Name (POST /pet)**: Tests the scenario where the name field is missing in the request body.
- **Add Pet - Invalid Data Type Name (POST /pet)**: Tests sending an invalid data type for the "name" field.
- **Add Pet - Invalid Data Type Category (POST /pet)**: Tests sending an invalid category (empty array) for the pet.
- **Add Pet - Invalid Data Type Tags (POST /pet)**: Tests sending an invalid data type for the tags field.
- **Add Pet - Invalid Data Type PhotoUrl (POST /pet)**: Tests sending an invalid data type for the photoUrls field.
- **Add Pet - Not Existing Status Value (POST /pet)**: Tests sending a non-existing status value for the pet.
- **Add Pet - Invalid JSON (POST /pet)**: Tests sending malformed JSON data.
- **Add Pet - Empty Object Body (POST /pet)**: Tests sending an empty object as the request body.
- **Add Pet - Invalid Body (POST /pet)**: Tests sending an empty body for the request.
- **Add Pet - Large Payload (POST /pet)**: Tests sending a large payload to the server.
- **Add Pet - Special Characters (POST /pet)**: Tests sending special characters in the pet name.
- **Add Pet - SQL Injection Attempt (POST /pet)**: Tests for SQL injection vulnerabilities.
- **Add Pet - Omit Content-Type Header (POST /pet)**: Tests the request without the `Content-Type` header.
- **Get Pet by Valid ID (GET /pet/{petId})**: Fetches the pet details by a valid petId.
- **Get Pet by Non-existent ID (GET /pet/{petId})**: Fetches the pet details for a non-existent petId.
- **Get Pet by Invalid ID (GET /pet/{petId})**: Tests using an invalid petId format.
- **Get Pet by Invalid Large ID (GET /pet/{petId})**: Tests using a very large petId, which may result in a `NumberFormatException`.

---

### 3. Test Scenarios

Each test scenario corresponds to an endpoint defined in the collection. The tests are designed to:

- Validate the correct **status code** returned by the API (e.g., 200, 400, 404).
- Ensure **response data** like the `petId`, `petName`, `petStatus` are set and returned correctly.
- Test various edge cases and invalid inputs (e.g., missing fields, incorrect data types, special characters, and SQL injection attempts).
- Validate the **JSON schema** of the API response.

---

### 4. How to Use

1. **Import the Collection into Postman**:
   - Download the exported collection file.
   - Open Postman and go to the "Import" button.
   - Choose "File" and select the downloaded collection file to import.

2. **Set Up Environment** (Optional):
   - The collection can be executed with or without an environment. However, if you want to use variables like `{{petId}}`, you can create an environment and set those variables.

3. **Run the Collection**:
   - Use **Collection Runner** in Postman to run the entire set of tests at once.
   - Select the collection and click "Run".
   - View the test results for each request.

---

### 5. Tests

This collection includes various tests for different scenarios:

1. **Valid Requests**:
   - Adding a valid pet (`POST /pet`)
   - Fetching the details of a valid pet (`GET /pet/{petId}`)

2. **Invalid Requests**:
   - Missing required fields in the request body (`POST /pet`)
   - Sending incorrect data types for the fields (`POST /pet`)
   - Fetching a pet with a non-existent or invalid ID (`GET /pet/{petId}`)

3. **Edge Cases**:
   - Large payloads and special characters in the request data.
   - SQL injection and XSS attacks in the request body (`POST /pet`).

## Notes:
- Enough cases return 500 error because from BackEnd not validation for valid format.
- No validation for required fields (that should be by logic).
- Positive POST api requests return "9223372036854776000" petId always, 
and for Positive GET requests it returns always ""message": "java.lang.NumberFormatException""
---

### 6. Postman Collection Export

The collection has been exported and can be imported into Postman. You can find the exported collection file as follows:

1. **Exported Collection File**:
   - The collection file is in JSON format. You can import it into your Postman environment by going to `File > Import > Choose File`.

---

This README file describes the automated test scenarios for the Petstore API. It covers positive, negative, and edge cases and can be used to validate the functionality of the Petstore API endpoints.

### 7. Performance: run Newman and check results
1. Install Newman
`npm install -g newman`
2. Install report library
`npm install newman-reporter-html`
3. run Postman tests
`newman run Petstore_API_Collection.postman_collection.json -r html --reporter-html-export result.html`
4. check report.html in the Postman folder