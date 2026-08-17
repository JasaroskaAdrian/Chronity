# Chronic

## Links
App: http://localhost:3000/
API: http://localhost:5000/api/Task
Swagger: http://localhost:5000/swagger

## Structure

                    HTTP
                     │
                     ▼
              ASP.NET Core API
                     │
              ┌──────┴──────┐
              ▼             ▼
         Controller      Middleware
              │
              ▼
          TaskService
              │
              ▼
        TaskRepository
              │
              ▼
          PostgreSQL

## Installing Swagger UI
Generates the OpenAPI Description
````bash
dotnet add package Microsoft.AspNetCore.OpenApi
````
Displays that OpenAPI Description and SwaggerUI in the Browser
````bash
dotnet add package Swashbuckle.AspNetCore.SwaggerUI
````

## React
| When we're building Chronity            | React concept you'll need     |
| --------------------------------------- | ----------------------------- |
| First static UI                         | JSX + Components              |
| Displaying your tasks                   | Props                         |
| Button changes something                | Events                        |
| Create/delete task in UI                | `useState`                    |
| Render multiple tasks                   | `.map()` + `key`              |
| Form inputs                             | Controlled components + state |
| Fetch your C# API                       | `fetch()`                     |
| Loading API data when page opens        | `useEffect`                   |
| Share data between components           | State lifting                 |
| Avoid passing data through 5 components | Context                       |
| More complicated application state      | Redux/Zustand — **later**     |
