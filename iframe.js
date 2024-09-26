ksAPI.runCustomCode(() => {

    //This script should be inserted into the form which will be presented in the iframe, if you want it to work every where then use a '*'
    const parentOrigin = "https://app.keysurvey.com/";
    //Backup the save event so a custom override can be used
    if (window._pressedSave) {
        console.error("Save event already overridden; script will not work as desired");
    } else {
        window._pressedSave = window.pressedSave;
        window.pressedSave = () => {
            saveAction();
            window._pressedSave();
        }
    }

    const saveAction = () => {
        const result = vpGetTextResults('Q2');
        if (result) {
            console.log(`Posting message "My favorite color is ${result}!" to parent`);
            parent.postMessage(`My favorite color is ${result}!`, parentOrigin);
        }
    }

});
