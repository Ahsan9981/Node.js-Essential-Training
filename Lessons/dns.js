const dns = require('dns');

// Error first callback functions.
// Lookup domain IP without sending network request.
dns.lookup('www.google.com', (error, address, family) => {

    if (error) {
        throw error;
    }

    console.log(`Address: ${address}, Family: IPv${family}`);

});

// Error first callback functions.
// Find all IP addresses associated with a domain name.
dns.resolve('www.google.com', (error, addresses) => {

    if (error) {
        throw error;
    }

    addresses.forEach(address => {
        console.log(`Address: ${address}`);
    });

});

// Error first callback functions.
// Find asscociated address with the IP address.
dns.reverse('8.8.8.8', (error, address) => {

    if (error) {
        throw error;
    }

    console.log(`Address: ${address}`);

});