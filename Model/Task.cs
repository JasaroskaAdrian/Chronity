namespace Model;

public enum TaskStatus 
{
    Open,
    InProgress,
    Closed
}

// Models are basically a "custom" Datatype, for example the Tasks that we are going to create will
// use this Model as its Datatype, therefore it will need a TaskName, TaskDesc, etc.

// A Model is just a class that declares what structure certain Data will have. 
// The world Model is not a Keyword in C#, but rather Convention in C#. 
public class Task
{
    // get; = Getter
    // Allows other code to READ the value of this variable, if theres no Getters, but it is public. 
    // The variable is accessible but the value of it like "Task1 - Training" cannot be read

    // set; = Setter
    // Allows other code to WRITE/MODIFY the value of this variable, if theres no Setters, but it is public.
    // The variable is accessible but its value cannot be changed to "Task2 - Programming".

    // public = this Variable or class is accessible by other code.
    // private = this Variable or class is NOT accessible by other code.

    // public → code outside Task can access TaskName
    // get → it can read TaskName
    // set → it can modify TaskName
    public string TaskName { get; set;}
    public string TaskDesc { get; set;}
    public TaskStatus Status { get; set;}
}