using Chronity.App.Backend.Model;
using Chronity.App.Services;
using Microsoft.AspNetCore.Mvc;

namespace Chronity.App.Backend.Controller; 

// [ApiController] tells the .NET that this is an API Controller
[ApiController]
// [controller] is a placeholder that .NET replaces with the controllers Name
[Route("api/[controller]")]
// TaskController : ControllerBase means that the TaskController class inherits the properties/methods and functionality of the ControllerBase class
// Spoken in simple terms we give the TaskController Class everything that the ControllerBase class can do plus our own Functionality
public class TaskController : ControllerBase
{
    [HttpGet]
    public TaskModel GetTasks()
    {
        var GetTask = TaskService.CreateTask("Task 1", "This is my first Task", Model.TaskStatus.Open);
        //.NET will see that im returning an ObjectType and will turn my return into JSON, because the Browser doesnt know C#
        // This process is called serialization. When the Browser sends JSON back to the Backend, thats called deserialization
        return GetTask;
    }

    [HttpPost]
    // We are telling ASP.NET Core that when this endpoint receives a POST request,
    // take the JSON body and deserialize it so that it fits into the TaskModel type.
    // The parameter using that type is called "task".
    public TaskModel PostTasks(TaskModel task)
    {
        return task;
    }
}