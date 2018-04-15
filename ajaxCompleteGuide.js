function ajaxCompleteGuide(method, url, synchron, username, password, stringPath, callback) {

    var xhttp;

    if (window.XMLHttpRequest) {

        // Code for all modern browsers

        xhttp = new XMLHttpRequest();

        } 

    else {

        // Code for Microsoft Internet Explorer smaller equal Internet Explorer 6

        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.onreadystatechange = function () {

        // XMLHttpRequest Status - readyState 0 - Request not initialized 

        if (this.readyState == 0){

            // Request is not initialized - status

            console.log("Request is not initialized.");

        }

        // XMLHttpRequest Status - readyState 1 - Server connection established

        if (this.readyState == 1){

            // Server connection - status

            console.log("Server connection.");

        }

        // XMLHttpRequest Status - readyState 2 - Request received

        if (this.readyState == 2){

            // Receiving request - status

            console.log("Receiving request.");

        }

        // XMLHttpRequest Status - readyState 3 - Processing request

        if (this.readyState == 3){

            // Processing - status

            console.log("Loading process ...");

        }

        // XMLHttpRequest Status - readyState 4 - Request finished and response is ready

        if (this.readyState == 4) {

            // HTTP Status bigger equal 100 and smaller 200

            if(this.status >= 100 && this.status < 200){

                console.log("HTTP Status - Information");
                console.log("HTTP Status Code: " + this.status);
                console.log("HTTP Status Text: " + this.statusText);
                
            }

            if (this.status == 200) {
                
                // Checking if file contains 'txt'

                if (url.indexOf("txt") || url.includes("txt")) {

                    document.getElementById("result").innerHTML = this.responseText;
                    console.log("HTTP Status - Successful");
                    console.log("HTTP Status Code: " + this.status);
                    console.log("HTTP Status Text: " + this.statusText);

                }
                
                // Checking if file contains 'xml'

                if (url.indexOf("xml") || url.includes("xml")) {

                    document.getElementById("result").innerHTML = this.responseXML;
                    console.log("HTTP Status - Successful");
                    console.log("HTTP Status Code: " + this.status);
                    console.log("HTTP Status Text: " + this.statusText);

                }
                
                // Checking if 'username' and 'password' is set

                if ((username == "" || username == null) && (password == "" || password == null)) {

                    console.log("Username and Password not available");

                }
                
                // Checking if a callback method available

                else {

                    if (typeof callback === "function") {

                        callback();

                    }

                    else {

                        console.log("No callback method available");

                    }
                    
                }
            }

            // HTTP Status bigger equal 300 and smaller 500

            if(this.status >= 300 && this.status < 400){

                console.log("HTTP Status - Redirection");
                console.log("HTTP Status Code: " + this.status);
                console.log("HTTP Status Text: " + this.statusText);

            }

            // HTTP Status bigger equal 400 and smaller 500

            if(this.status >= 400 && this.status < 500){

                console.log("HTTP Status - Client Error");
                console.log("HTTP Status Code: " + this.status);
                console.log("HTTP Status Text: " + this.statusText);

            }

            // HTTP Status bigger equal 500

            if(this.status >= 500){

                console.log("HTTP Status - Server Error");
                console.log("HTTP Status Code: " + this.status);
                console.log("HTTP Status Text: " + this.statusText);

            }

        }

    };

    xhttp.open(method, url, synchron, username, password);
    
    if(stringPath == "" || stringPath == null){

        xhttp.send();

    }

    else {
        
        xhttp.send(stringPath);

    }
    
}

// Get all response header informations

function allHeader(text){

    return text.getAllResponseHeaders();

}

// Get one response header information

function oneHeader(text, header){

    return text.getResponseHeader(header);

}

// Set one response header information

function setHeader(text, header, value){

    return text.setResponseHeader(header, value);

}

// Cancelling request

function cancel(text){

    return text.abort();

}