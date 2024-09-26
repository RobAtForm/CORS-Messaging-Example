//This file contains the code that should be run in the parent page
// This code is here as an example: https://app.keysurvey.com/f/41753392/1531/
    const allowedOrigin = "https://app.form.com";
    window.addEventListener(
        "message",
        async (event) => {
            if (event.origin !== allowedOrigin) return;
            
            //This is where you decide what to do with the message from the iframe
            console.log("Received message from child:", event.data);
            alert(`DataReceived: ${event.data}`)
        }
    );
