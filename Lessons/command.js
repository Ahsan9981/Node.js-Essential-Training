console.log(process.argv);
const arguments = process.argv.slice(2);
const sum = arguments.reduce((accumulator, value) => accumulator + parseInt(value), 0);

console.log(sum);
