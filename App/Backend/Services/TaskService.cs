using Chronity.App.Backend.Model;
using TaskStatus = Chronity.App.Backend.Model.TaskStatus;

namespace Chronity.App.Services;
public static class TaskService
{
    // By using static, the Method gets accessed through the class itself
    // Therefore you dont need to create the Object Instance manually via.
    // Task task = new Task(); you can just do Task.getTaskName
    public static TaskModel CreateTask(string     TaskName,
                                       string     TaskDesc,
                                       TaskStatus TaskStatus)
    {
        // 'Task' is an ambiguous reference between 'Model.Task' and 'System.Threading.Tasks.Task' CS0104
        // This error encountered because C# already has a class named Task and C# didnt know which one i want to use
        TaskModel task = new TaskModel();
        task.TaskName = TaskName;
        task.TaskDesc = TaskDesc;
        task.Status   = TaskStatus;
        // Dont forget to change return value
        return task;
    }
}