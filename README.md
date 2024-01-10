### Before Getting Started
There are two different branches associated with this lesson.
- Main
  - This branch provides the base notes of material not filled out.
- Completed
  - This branch includes all the added notes for you to review and compare with your own code-along.

### Topics Covered
- State

### What Should Already Be Understood
- Creating a React Application
  - File / Folder structure
- Props
  - Basic concepts
  - Passing a props object through components
- Reusable Components

## Files / Folders Provided in this Lesson
This lesson can be continued through the previous two, placing each component below `Employees.jsx`.

If you are not continuing from the previous lessons, this is designed to walk through these concepts individually. You will just need to spin up a new React application and add update the following:
This lesson starts right at the `npx create-react-app .` point.

- intro-to-state
  - src
    - components (add folder)
      - **welcome** (add folder)
        - `Welcome.jsx` (Will build here)
    - App.jsx (updated from App.js)
    - App.css (updated code | provided below)

```css
.App {
  text-align: center;
}

.welcome {
  font-size: 18pt;
  margin: 1em;
}
```

- `notes.md`: details the various notes taught throughout this lesson.

## Resources
- [Creating a New React App](https://react.dev/learn/start-a-new-react-project)
- [PDF Notes Project Setup](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FtREBlxLhAPTB8ZVYiQy1%2Fuploads%2F85gYGO7YaVE24rYVczhc%2FCreating%20a%20React%20App.pdf?alt=media&token=bf0f7d96-a03e-4b50-9adc-d62af526c6c3)
- [PDF Functional Component](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FtREBlxLhAPTB8ZVYiQy1%2Fuploads%2FI7hJbXoIfL1qex9U8ipy%2FAppjs_FunctionalComponent.pdf?alt=media&token=6967bba4-00d7-4cd3-b568-cc99bec23c5e)
- [React Slide Deck](https://www.canva.com/design/DAFWhaqpzRc/qlUfqm93ZfFJSXl-N6yd9A/view#4)

# Challenge
```js
/* 
  ! Challenge:
    - Build out a Counter Component which will have two buttons (+), (-) and a span element that will take its value from a count state variable.
      - This should be within it's own folder.
    - Create two functions that will work as onClick event listeners.
      - One function will increment the current state.
      - One function will decrement the current state.
      
    Hard Mode:
      - Leave the count inside App.jsx
  */
```