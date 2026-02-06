# URL Shortener Service

A simple URL shortener built with **TypeScript** and **Express**.  
Allows you to shorten URLs and redirect via a generated code.

---

## **Features**

- Shorten any URL via a POST endpoint 
- Persists shortened URL's in local storage and maps them to the original URL as a redirect target
- Redirect users to stored full URL via a GET endpoint when hit with shortened URL

---

## **Project Structure**

```text
src/
├─ server.ts
├─ routes/
│  └─ routes.ts
├─ controllers/
│  ├─ shortenUrlController.ts
│  └─ redirectController.ts
├─ services/
│  ├─ shortenUrlService.ts
│  └─ redirectService.ts
└─ data/
   └─ store.ts
```

## **Getting Started**

### **Requirements**

- Node.js >= 20
- npm or yarn
- Optional: `ts-node` for local development

### **Install Dependencies**

```bash
npm install
# or
yarn install

npm run dev

```
---

### **Example Requests 1. Shorten URL**

curl -X POST http://localhost:3000/shortenurl \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com"}'

### **Example Response**

{"shortUrl":"http://localhost:3000/ASHQGw"}


### **Example Requests 2. Redirect using short URL**

Hit the returned shortURL generated in example request 1 /// http://localhost:3000/ASHQGw /// in any browser.

You should be redirected to the original URL endpoint.


### *API ENDPOINTS*

| Method | Path          | Description              |
| ------ | ------------- | ------------------------ |
| POST   | `/shortenurl` | Shorten a URL            |
| GET    | `/:code`      | Redirect to original URL |

### *NOTES*

URL data is stored in-memory (Map). All data is lost when the server restarts.

For production, replace the in-memory store with a persistent database.

BASE_URL is currently set to http://localhost:3000 — adjust as needed.

### *FUTURE IMPROVEMENTS*
```text
- Unit test coverage
- Persist URL mappings in a database (MongoDB, Redis, etc.)
- Add analytics (click count, referrer, timestamp)
- Add meaningful logging - as middleware
- Widen validation
- Generate more meaningful codes (visually or stylistically tied to original URL)
- Explicitly prevent short url code collisions
```
### *TIME SPENT*


100 Minutes as of writing this README which is 10:17 06/02/2026 - I may return to consider some optionals within the spec before interview. 

