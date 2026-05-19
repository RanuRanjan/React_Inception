# React Inception 🚀

A beginner-friendly project demonstrating the fundamentals of web development, comparing **vanilla JavaScript** with **React**.

## 📋 Project Overview

This project showcases three different approaches to building web interfaces:

1. **Plain HTML** - Static markup structure
2. **Vanilla JavaScript** - DOM manipulation using native JavaScript APIs
3. **React** - Modern UI library with component-based architecture

All approaches are demonstrated on the same page using React loaded via CDN.

## 🗂️ Project Structure

```
├── index.html       # Main HTML file with React CDN links
├── index.js         # Vanilla JavaScript DOM manipulation
├── app.js           # React component creation and rendering
└── README.md        # Project documentation
```

## 📄 File Descriptions

### `index.html`
- Contains the page structure with semantic HTML
- Includes React and ReactDOM from CDN (v18)
- References two script files: `index.js` and `app.js`
- Two render targets: `#root` (for vanilla JS) and `#reactroot` (for React)

### `index.js`
Demonstrates **vanilla JavaScript DOM manipulation**:
- Creates an `<h2>` element using `document.createElement()`
- Sets text content using the `innerText` property
- Appends the element to the DOM using `appendChild()`

### `app.js`
Demonstrates **React fundamentals**:
- Verifies React and ReactDOM are loaded
- Uses `React.createElement()` to create elements
- Demonstrates creating elements with different configurations
- Shows how to render multiple elements in an array
- Uses `ReactDOM.createRoot()` and `.render()` to display components

## 🎯 Learning Objectives

This project helps understand:
- ✅ Traditional HTML structure
- ✅ DOM manipulation with vanilla JavaScript
- ✅ React's declarative approach
- ✅ Working with React via CDN
- ✅ Element creation and rendering techniques

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/RanuRanjan/React_Inception.git
   ```

2. Navigate to the project directory:
   ```bash
   cd React_Inception
   ```

3. Open `index.html` in your browser:
   - Double-click the file, or
   - Use a local server (recommended):
     ```bash
     python -m http.server 8000
     # Then open http://localhost:8000
     ```

## 📺 What You'll See

When you open the page:
- **"Welcome to my Html Website"** - Plain HTML heading
- **"Welcome to plain Js Website"** - Vanilla JS rendered heading
- **Two React headings** - Rendered with React (h3 and h4 elements)

## 🔧 Technologies Used

- **HTML5** - Page structure
- **Vanilla JavaScript** - DOM manipulation
- **React 18** - UI library (loaded via CDN)
- **ReactDOM 18** - React rendering library

## 💡 Notes

- React is loaded from unpkg CDN in production mode
- This is a learning project focusing on fundamentals
- For production applications, use build tools like Create React App, Vite, or Next.js
- JavaScript console logs help verify that React and ReactDOM are properly loaded

## 🎓 Next Steps

- Explore React components and props
- Learn about React hooks (useState, useEffect)
- Set up a proper React development environment with build tools
- Study component lifecycle and state management

## 📝 License

This project is open source and available under the MIT License.

---

**Happy Learning!** 🎉