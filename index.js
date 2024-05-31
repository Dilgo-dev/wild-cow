const cowsay = require("cowsay");
const { name, campus } = require("./information.js");

console.log(
    cowsay.say({
        text: `I'm the cow ${name} on the "${campus}" campus !`,
    })
);
