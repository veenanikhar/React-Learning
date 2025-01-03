# React Learning

To create a React project on VS Code, follow these steps:

### Step 1: Install Node.js
First, ensure that you have Node.js installed on your system.

1. Download and install Node.js from [https://nodejs.org/](https://nodejs.org/).
2. After installation, verify it by running the following commands in the terminal:
   ```bash
   node -v
   npm -v
   ```

### Step 2: Install `create-react-app` (Optional)
If you haven't installed `create-react-app` globally, you can do it with this command:
```bash
npm install -g create-react-app
```

### Step 3: Create a New React App
1. Open **VS Code**.
2. Open a terminal in VS Code (`Ctrl + ~`).
3. Navigate to the directory where you want to create your project:
   ```bash
   cd path/to/your/directory
   ```
4. Create a new React project using `create-react-app`:
   ```bash
   npx create-react-app my-app
   ```
   This will set up all the necessary files for a React project.

### Step 4: Open the Project in VS Code
1. Navigate to the project folder:
   ```bash
   cd my-app
   ```
2. Open the project in VS Code:
   ```bash
   code .
   ```

### Step 5: Run the React Project
1. In the terminal, run the following command to start the development server:
   ```bash
   npm start
   ```
2. The app will start running, and it will automatically open a new browser tab at `http://localhost:3000` with the default React template.

