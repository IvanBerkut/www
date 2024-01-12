# Interview Task - Frontend

This task describes a requirement that arises every now and then, in similar or slightly different forms. You have the freedom to conceive and develop your solution since there is no finished design. The technical analysis of the provided data and its creative implementation are up to you.

After submitting the task, we will have a joint conversation, which simulates a code review process. We will provide feedback and ask questions while you present your solution to us.

Please allocate two to four hours for this task and inform us when you're finished.

## Technical Task
Develop a product list for discounted items. Users should use the page to make decisions between the products. Make it accessible on various devices, create an attractive design, and consider useful additional features (e.g., sorting).
You don't have to implement all possible additional features; you can note them down and share them with us during the conversation.

## Technical Requirements
A product list for discounted items should be displayed on an HTML page.

Each entry represents a product. The list of products will be provided by a server and should be fetched through an API interface. The product retrieval should occur once on page load and then continue every five seconds using JavaScript.
This continuous fetching will generate a complete list of products, with new products being added. This simulates the scenario where products are provided by different shops, and we are waiting for their results.

## Constraints
You are free to use any libraries, frameworks, tools, or bundlers you are familiar with for JavaScript, CSS, and HTML. It's best to use those you are already familiar with.

## API Interface
In the project folder, there is a Node.js project for the server, which should remain unchanged. The Node.js project can be installed with `npm install` and started with `npm start`. The server provides the following API:

| Method | Request                              | Response                        |
|--------|--------------------------------------|---------------------------------|
| GET    | `http://localhost:3000/api/products` | Provides a random selection of five products |

### Terminology
The API delivers products with the following properties under the `data` key:
| Field                 | Value                                  |
|-----------------------|----------------------------------------|
| `id`                  | The unique identifier of the product   |
| `name`                | The name of the product                |
| `price`               | The price of the product               |
| `description`         | The description of the product         |
| `imageURL`            | The URL of the product image           |
| `brand`               | The brand of the product               |
| `category`            | The category of the product            |
| `discount`            | The discount percentage applied to the product |
| `originalProductUrl`  | The URL of the original product page   |
| `rating`              | The rating of the product              |

And general information under the `meta` key:
| Field    | Value                        |
|----------|------------------------------|
| `total`  | The total number of products  |

## What do we value?

- Quality of the written source code, including structure, consistency, documentation, and approach
- Instructions for setting up the project, e.g., in the Readme
- Thoughtful design, responsive display, UI/UX
- Creativity in additional functionalities.