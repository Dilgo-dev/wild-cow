# 🐄 wild-cow 🎉

Welcome to the **wild-cow** project! 🚀 This project is an exercise from the `Wild Code School` to demonstrate the use of CommonJS for importing and exporting modules, along with the super cool `cowsay` library! 🐮💬

## 📋 Description

This project uses `cowsay` to display a message in the console, with information imported from another module. 📝

## 🛠️ Installation

To get started, clone this repository to your local machine. Then, install the necessary dependencies using `npm`:

```bash
npm install
```

## 🚀 Usage

After installing the dependencies, you can run the project with the following command:

```bash
npm start
```

You will see a talking cow in your console with a personalized message! 🐄💬

## 🗂️ Project Structure

-   `index.js`: Contains the main code that uses `cowsay` to display the message.
-   `information.js`: Contains the exported information (name and campus) that will be displayed by the cow.

## 📄 Code

Here is the project code for reference:

### `index.js`

```javascript
const cowsay = require("cowsay");
const { name, campus } = require("./information.js");

console.log(
    cowsay.say({
        text: `I'm the cow ${name} on the "${campus}" campus!`,
    })
);
```

### `information.js`

```javascript
module.exports = {
    name: "benjamin",
    campus: "Online",
};
```

---

Have fun with **wild-cow**! 🐮✨

---
