# URLShortener

URLShortener is a lightweight and efficient URL shortening service that provides a simple API for creating and managing short links. This tool is designed to make sharing long URLs easier and more convenient. With URLShortener, you can generate short URLs that redirect to the original long URLs, track link usage, and manage your shortened URLs with ease.

## Features

- **URL Shortening**: Convert long URLs into short, easy-to-share links.
- **Redirection**: Short URLs redirect users to the original long URLs.
- **Analytics**: Track the number of clicks on your short links.
- **Management**: Easily manage your shortened URLs through the API.

## Installation

To install and run URLShortener locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/raghavkumar09/urlShortner
    cd urlShortner
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    npm start
    ```

## Usage

### Shorten a URL

To shorten a URL, make a POST request to the `/shorten` endpoint with the original URL in the request body:

```sh
curl -X POST -H "Content-Type: application/json" -d '{"url": "https://example.com/very/long/url"}' http://localhost:3000/shorten
