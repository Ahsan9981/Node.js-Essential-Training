// If computer uses a windows OS.
if (process.platform === 'win32') {

    console.log(`Hello ${process.env.USERNAME}`);

// If computer uses Mac or Linux OS.
} else if (process.platform === 'darwin') {

    console.log(`Hello ${process.env.USER}`);
}