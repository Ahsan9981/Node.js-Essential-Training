if (process.platform === 'win32') {

    console.log(`Hello ${process.env.USERNAME}`);

} else if (process.platform === 'darwin') {

    console.log(`Hello ${process.env.USER}`);
}