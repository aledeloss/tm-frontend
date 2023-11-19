# TASK MANAGER

This is a very simple task manager, almost a POC. You can create a task, list all your task and delete the ones that you don't need to register anymore.

## Technologies used

It was built using React, Vite, React Router and TailwindCSS, and yarn as package manager.

## To run it locally

Please clone the repository and run ´yarn install´, and then run ´yarn vite´. Befora creating any task, make sure that you have the [backend](https://github.com/aledeloss/tm-backend) up and running, so the app works properly.
If you have both projects running, you can enjoy this simple app at:

```
http://localhost:5173/
```

## Decistions made

For simplicity and time reasons, I tried to choose the simplest solutions available to meet the required functionality.

- Styling with TailwindCSS allowed me to apply simple and neat styles pretty quickly. Styles could be much nicer with a designer on board, though. 🥴
- Routing structure: I used React router for handling routes, although after implementing it, I noticed that I could have achieved good results with no need of routing.
- For handling the form data, I decided to use FormData, which is browser native infarce. This is a light way of handling data with no need of external libraries.
- I decided to use TypeScript to have a more rebust project. There is a lot a of room for improvement in this matter, but a basic typing was included.

## Known issues

The following issues shouls be fixed:

- The app is not fully accessible, since some interactive elements (as the Go back button) are not focusable (because they are actually a href, and so focus has to be added) and some color combinations do not contrast enough.
- The homepage of the app is sending two getAllTasks requests to the backend.
- Error handling should be improved, defining specific course of action for further cases.
  For example, if you try to access to an invalid URL, as an old task if, we should redirect to the home page ('/').

## Nice to have

If I had more time, besides solving the known issued mentioned above, I would:

- Add automated tests so we make sure that the frontend works and we don't break it in the future. Particularly, to:
  - Check that they render properly,
  - That API requests are send,
  - Error are correctly handled.
- Refactor so, for example, the useFetch hook is used in all cases. This was meant to be so, but for time reasons, I decided to implement the fetch in each component so I could solve all requests faster.
