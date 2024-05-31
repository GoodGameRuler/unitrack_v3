# Styling Guide for UniTrack
_A good styling rulset lowers potential of misunderstanding through different syntax._

### React Components
_Most Importantly

- React components should be kept neatly in the components directory of app/ to be reused or defined with `componentComponentName` syntax in a subdirectory.
- Use camelCase for the file name, and PascalCase for the component itself.
- Use short but explanatory names.
- Define at most one component per file.
- Define react components using `function componentName() { return() }` with an explicit return statement. Do not use arrow syntax.
- Use arrow syntax `const funcName = () => {};`to define one off functions within a component, react hooks, and the event/function handlers.

### Comments
_Good code defines itself._

- Code, using style and naming, should be self explaining.
- Use comments to explain code that requires some specialised knowledge or is difficult in complexity.
- In the case of complex functions, components, or CSS use multi-line comments to explain the overall goal.

### CSS
- Minimise the usage of any element level CSS.
- use camelCase for class and ID names.
- Use capitalised hex values for colours. Usage of #FFFFFF and #FFFFFFFF is prefered over rbg and rbga, but not requred. Use at your discretion - of course rgba is much more readable when it comes to opacity value like 47%.

### Miscellaneous
- File names - use `.js` for JavaScript and `.jsx` for react components strictly.
- All files will use four spaces strictly. This keeps the code consistent and easy to read.
- Use semicolons wherever possible. Prevents a plethora of issues. See [JS **;** problems](https://www.freecodecamp.org/news/codebyte-why-are-explicit-semicolons-important-in-javascript-49550bea0b82/)
