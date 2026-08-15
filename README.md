# Chronic

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