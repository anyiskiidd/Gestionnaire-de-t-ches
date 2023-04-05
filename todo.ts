// Interfaces
interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

interface TaskManager {
    tasks: Task[];

    addTask(task: Task): void;
    removeTask(id: number): void;
    updateTask(task: Task): void;
    getTaskById(id: number): Task | undefined;
    toggleTaskCompletion(id: number): void;
}

// Classes
class SimpleTask implements Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;

    constructor(id: number, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = false;
    }
}

class SimpleTaskManager implements TaskManager {
    tasks: Task[];

    constructor() {
        this.tasks = [];
    }

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    removeTask(id: number): void {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    updateTask(updatedTask: Task): void {
        const index = this.tasks.findIndex((task) => task.id === updatedTask.id);

        if (index !== -1) {
            this.tasks[index] = updatedTask;
        }
    }

    getTaskById(id: number): Task | undefined {
        return this.tasks.find((task) => task.id === id);
    }

    toggleTaskCompletion(id: number): void {
        const task = this.getTaskById(id);

        if (task) {
            task.completed = !task.completed;
        }
    }
}

// Exemple d'utilisation
const taskManager = new SimpleTaskManager();

taskManager.addTask(new SimpleTask(1, "Acheter du lait", "Aller au supermarché et acheter du lait"));
taskManager.addTask(new SimpleTask(2, "Payer les factures", "Payer les factures d'électricité et de gaz"));

console.log("Tâches initiales: ", taskManager.tasks);

taskManager.toggleTaskCompletion(1);
console.log("Tâche 1 complétée: ", taskManager.getTaskById(1));

taskManager.updateTask(new SimpleTask(2, "Payer les factures", "Payer les factures d'électricité, de gaz et d'eau"));
console.log("Tâche 2 mise à jour: ", taskManager.getTaskById(2));

taskManager.removeTask(1);
console.log("Tâche 1 supprimée: ", taskManager.tasks);
