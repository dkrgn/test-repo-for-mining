class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        // Adds a new task to the to-do list
        if (!this.tasks.includes(task)) {
            this.tasks.push(task);
            console.log(`Task added: '${task}'`);
        } else {
            console.log(`Task '${task}' already exists in the list.`);
        }
    }

    removeTask(task) {
        // Removes a task from the to-do list
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log(`Task removed: '${task}'`);
        } else {
            console.log(`Task '${task}' not found in the list.`);
        }
    }

    showTasks() {
        // Displays all tasks in the to-do list
        if (this.tasks.length > 0) {
            console.log("To-Do List:");
            this.tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        } else {
            console.log("No tasks in the to-do list.");
        }//fix
    }

    markDone(task) {
        // Marks a task as done
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            console.log(`Task '${task}' marked as done.`);
            this.tasks.splice(index, 1);
        } else {
            console.log(`Task '${task}' not found.`);
        }
    }

    getTaskCount() {
        // Returns the number of tasks in the list
        return this.tasks.length;
    }
}

// Example usage
const todo = new TodoList();

// Add tasks to the list
todo.addTask("Learn JavaScript");
todo.addTask("Write blog post");
todo.addTask("Go for a walk");

// Show current tasks
todo.showTasks();

// Remove a task
todo.removeTask("Write blog post");

// Show tasks after removal
todo.showTasks();

// Mark a task as done
todo.markDone("Go for a walk");

// Show tasks after marking one as done
todo.showTasks();

// Display total number of tasks
console.log("Total tasks:", todo.getTaskCount());
