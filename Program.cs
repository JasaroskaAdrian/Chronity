using Chronity.App.Services;
using TaskStatus = Chronity.App.Backend.Model.TaskStatus;

var builder = WebApplication.CreateBuilder(args);

// Set up the services required for the Controller system
builder.Services.AddControllers();
builder.Services.AddOpenApi();

// This typically means "Take all the configurations i've given the builder and actually build the application from it"
// Example of configuration for the builder is this: builder.Services.AddControllers();
var app = builder.Build();
Console.WriteLine(app.Environment.EnvironmentName);

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwaggerUI(options =>
    {
       options.SwaggerEndpoint("/openapi/v1.json", "Chronity API v1"); 
    });
}

// Take the controllerrs that .NET has discovered and map their routes into the app
app.MapControllers();

app.Run();