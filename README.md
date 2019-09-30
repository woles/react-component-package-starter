# Boilerplate for React Component npm package with hooks, typescript, lint, jest and example

This package is starting point to create your react component as npm package. It gives you ability to develop your component with real time example 
and hoot reloading.

## Instalation

    npm install
    npm link

then

    cd example
    npm install
    npm link react-component-wolesblog

Now we need to remove react from `example/node_modules/react-component-wolesblog/node_modules/react to fix error

    Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
    1. You might have mismatching versions of React and the renderer (such as React DOM)
    2. You might be breaking the Rules of Hooks
    3. You might have more than one copy of React in the same app
    See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.

Do
  
    rm -fr node_modules/react-component-wolesblog/node_modules/react

Here we can start example 

    npm start

On second terminal in main directory type

    tsc -w

At this point you can start developing your package or example and check at the same time changes on http://localhost:3000

## If you want to read more about this repo:

https://www.wolesblog.com/react-component-npm-package-boilerplate-with-hooks-typescript-lint-jest-and-example-part-1