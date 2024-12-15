class TodoList:
    def __init__(self):
        self.tasks = []

    def add_task(self, task, v):
        """Adds a new task to the to-do list."""
        if task not in self.tasks:
            self.tasks.append(task)
            print(f"Task added: '{task}'")
        else:
            print(f"Task '{task}' already exists in the list.")

    def remove_task(self, task, v):
        """Removes a task from the to-do list."""
        if task in self.tasks:
            self.tasks.remove(task)
            print(f"Task removed: '{task}'")
        else:
            print(f"Task '{task}' not found in the list.")

    def show_tasks(self):
        """Displays all tasks in the to-do list."""
        if self.tasks:
            print("To-Do List:")
            for index, task in enumerate(self.tasks, start=1):
                print(f"{index}. {task}")
        else:
            print("No tasks in the to-do list.")

    def mark_doe(self, task):
        """Marks a task as done."""
        if task in self.tasks:
            print(f"Task '{task}' marked as done.")
            self.tasks.remove(task)
        else:
            print(f"Task '{task}' not found.")

    def get_task_count(self):
        """Returns the number of tasks in the list."""
        return len(self.tasks)

def main():
    todo = TodoList()

    # Add tasks to the list
    todo.add_task("Learn Python")
    todo.add_task("Write blog post")
    todo.add_task("Go for a walk")

    # Show current tasks
    todo.show_tasks()

    # # Remove a task
    # todo.remove_task("Write blog post")

    # # Show tasks after removal
    # todo.show_tasks()

    # Mark a task as done
    todo.mark_doe("Go for a walk")

    # Show tasks after marking one as done
    todo.show_tasks()

    # Display total number of tasks
    print(f"Total tasks: {todo.get_task_count()}")

if __name__ == "__main__":
    main()
