# Postman Collections

This folder contains exported Postman collections for API automation.

## Petstore API Collection

- File: `petstore-apis.postman_collection.json`
- Description: Automated tests for Petstore v2 API (add and fetch pets, positive/negative/edge cases).

## How to Use

1. **Import the Collection**
   - In Postman, click **Import** > select `petstore-apis.postman_collection.json`.

2. **Variables to Set**
   - No environment variables are required to run the collection.
   - The collection uses a collection variable `petId` (created automatically after a successful POST) to chain the POST and GET requests.

3. **Run the Suite**
   - Open the collection and click **Run Collection** (Collection Runner).
   - All requests and tests will execute in sequence, covering positive and negative scenarios.

4. **Review Results**
   - Check the test results for each request in the Collection Runner.

## Notes
- The `petId` variable is set automatically after the POST request and used in the GET request.
- You can extend or modify the collection as needed for additional scenarios.
- No authentication is required for the public Petstore API.
