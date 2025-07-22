import http from "node:http"

const products = [
    { id: 1, name: "Camiseta", price: 29.99},
    { id: 1, name: "Jaqueta", price: 129.99},
    { id: 1, name: "Sapato", price: 59.99},
]

const app = http.createServer((request, response) => {
    if (request.method === "GET" && request.url === "/products") {
        response.end(JSON.stringify(products))
    }
})

export { app}