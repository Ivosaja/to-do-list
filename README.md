# 📝 To-Do List App

A simple and functional web application built with HTML, CSS, and Vanilla JavaScript to manage everyday tasks.

## 🚀 Features

➕ **Add tasks**: Type in the input field and press Enter to add a new task.

✅ **Mark tasks as completed**: Click the circle next to each task.

❌ **Delete individual tasks**: Click the ❌ to remove a specific task.

🗑️ **Clear the entire list**: Use the orange trash can button to delete all tasks.

🔢 **Task counter**: Displays the number of pending tasks in the top-right corner.

💾 **Persistence with Local Storage**: Tasks are automatically saved when added, deleted, or the list is cleared, and they are restored when the page is reloaded.

## 🔍 Input validation

- Tasks must be **20 characters max**.
- **Empty tasks** are not allowed.

## 📱 Responsive Design

Optimized for different screen sizes using Flexbox and Media Queries.

## 🆔 Task identification

Each task is saved as an object with a unique and incremental `id`, managed through a counter also stored in localStorage. This ensures a consistent task history even if intermediate tasks are deleted.

## 🧠 Initialization logic

When the page loads, a main `init()` function runs to retrieve tasks and the counter from localStorage, restoring the previous state of the application.

---

*Made with ❤️ by [Ivosaja](https://github.com/Ivosaja)*
