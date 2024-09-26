//This file contains the code that should be run in the parent page

    const allowedOrigin = "https://opx.infotechinc.com/";
    window.addEventListener(
        "message",
        async (event) => {
            if (event.origin !== allowedOrigin) return;
            
            //This is where you decide what to do with the message from the iframe
            console.log("Received message from child:", event.data);
            alert($`DataReceived: {event.data}`)
        }
    );
