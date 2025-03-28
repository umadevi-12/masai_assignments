// Initialize an array with five tasks
let tasks = ["Task1", "Task2", "Task3", "Task4", "Task5"];

// Remove the first task (Shift operation)
for (let i = 0; i < tasks.length - 1; i++) {
    tasks[i] = tasks[i + 1];
}
tasks.length -= 1; // Reduce the array length

// Add two high-priority tasks at the beginning (Unshift operation)
tasks.length += 2; // Increase array length
for (let i = tasks.length - 1; i >= 2; i--) {
    tasks[i] = tasks[i - 2];
}
tasks[0] = "HighPriority1";
tasks[1] = "HighPriority2";

// Replace the last task
tasks[tasks.length - 1] = "NewTask";

// Log the updated task list
console.log("Updated Task List:", tasks);
