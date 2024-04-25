// Select elements
let qrPlaceholder = document.getElementById("qrCode");
let userUrl = document.getElementById("userUrl");
let submit = document.getElementById("submit");
let img = document.createElement('img');

// Select width and height form elements
let width = document.getElementById("width");
let height = document.getElementById("height");

// Select colour elements
let fgColor = document.getElementById("fgColor");
let bgColor = document.getElementById("bgColor");

// Select error message element
let urlError = document.getElementById("urlError");

// Select qr code text element
let qrText = document.getElementById("qr-text");


// Function to check users input
function urlChecker() {

    // Get the users input value
    const userUrlValue = userUrl.value;

    // Check user input is valid
    if (userUrlValue == "") {
        urlError.innerText = "Please enter a URL";
    } else {
        // If user has entered input generate a QR code
        generateQRImg();
        urlError.innerText = "";
    };
};

// Function to generate the qr code
function generateQRImg() {

    // Hide the qr code text
    qrText.style.display = "none";

    // Get Color values and remove the '#' hex code
    let fgColorVal = fgColor.value.replace('#', '');
    let bgColorVal = bgColor.value.replace('#', '');


    // If the user has selected a width, height and color enter these into the api call
    if (width != "" & height != "" & fgColorVal != "000000" & bgColorVal != "000000") {

        // Set Width and height value
        let widthVal = width.value;
        let heightVal = height.value;

        // Get the users input value
        const userUrlValue = userUrl.value;

        // Pass the users url to the api
        const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${userUrlValue}!&size=${widthVal}x${heightVal}&bgcolor=${bgColorVal}&color=${fgColorVal}`

        // Set the new images src as the api url
        img.src = apiUrl;

        // Append the new image to the HTML element
        qrPlaceholder.appendChild(img);


    } else {

        // If the user hasn't specified a width, height, or colours just generate a basic qr code
        basicQrCode();

    };
};


// Function to generate your basic black and white and standard size qr code
function basicQrCode() {

    // Hide the qr code text
    qrText.style.display = "none";

    // Get the users input value
    const userUrlValue = userUrl.value;

    // Pass the users url to the api
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${userUrlValue}`;

    // Set the new images src as the api url
    img.src = apiUrl;

    // Append the new image to the HTML element
    qrPlaceholder.appendChild(img);

};

// Add an event listener to the submit button
submit.addEventListener('click', urlChecker);