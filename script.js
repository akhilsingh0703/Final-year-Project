// Select elements
const btn = document.querySelector("#btn");
const voice = document.querySelector("#voice");
const output = document.getElementById('output'); // Select the output element
const startBtn = document.getElementById('start-btn');

// Define the speak function
function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;
        utterance.lang = "hi-IN"; // Hindi language
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("Speech synthesis not supported by this browser");
    }
}

// Define the wishMe function
function wishMe() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good morning! Akhil");
        speak("How are you?");
    } else if (hour >= 12 && hour < 16) {
        speak("Good afternoon, Akhil");
    } else {
        speak("Good evening, Akhil");
    }
}

// Initialize speech recognition
const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();
let transcript = '';

recognition.onresult = (event) => {
    transcript = event.results[0][0].transcript;
    takeCommand(transcript.toLowerCase());
}

// Add event listener to the button
btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
});

// Define the takeCommand function
function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";

    // Display the recognized message in the output div
    output.textContent = `You said: ${message}`;

    switch (true) {
        case message.includes("hello") || message.includes("hi"):
            speak("Hello Guys, how can I help you?");
            break;
            case message.includes("about me centurion university"):
                speak("Centurion University (CUTM) is a private university from Odisha, India. With its main campus earlier at Parlakhemundi in Gajapati and another constituent campus located at Jatni, on the fringes of Bhubaneswar, which is now as main campus and it was accorded the status of a university in 2010.[2] The university has been accredited by NAAC with 'A+' Grade,[3] thereby becoming the youngest private university to have earned the distinction.[4] In 2016, the Bhubaneswar campus of the university was ranked 81 among the institutions offering engineering education in India by the Ministry of Education, Government of India under the NIRF.[5]");
                window.open("https://drive.google.com/file/d/1csIPu1SooKHnkAFtFghCwE4P2JOdhin3/view?usp=sharing", "_blank");
                break;
        case message.includes("who are you"):
            speak("I am Sophia, a virtual assistant developed by Akhil  at Centurion University of Technology and Management, Paralekhemundi.");
            break;
        case message.includes("open instagram"):
            window.open("https://www.instagram.com/", "_blank");
            break;
        case message.includes("open facebook"):
            window.open("https://www.facebook.com/", "_blank");
            break;
            case message.includes("open google"):
                window.open("https://www.google.com/", "_blank");
                break;
                case message.includes("open calculator"):
                    speak("opening caculator")
                    window.open("calculator:", "_self");
                    break;
                  case message.includes("oepn notepad"):
                    window.open("Notepad:", "_self");
                    break;
                    case message.includes("open chrome"):
                        window.open("https://www.google.com/chrome/", "_blank");
                        break;
case message.includes("open task Maneger "):
    window.open("Task Manager:", "-self");
                function openApp(appName) {
                    switch (appName.toLowerCase()) {
                        case "phone":
                            window.open("tel:", "_self");
                            break;
                        case "messages":
                            window.open("sms:", "_self");
                            break;
                        case "email":
                            window.open("mailto:", "_self");
                            break;
                        case "open camera":
                            window.open("camera:", "_self");
                            break;
                        default:
                            speak("Sorry, I cannot open that app.");
                            break;
                    }
                }
                
                // Inside takeCommand function
                switch (true) {
                    // Existing cases...
                    case message.includes("open phone"):
                        openApp("phone");
                        break;
                    case message.includes("open messages"):
                        openApp("messages");
                        break;
                    case message.includes("open email"):
                        openApp("email");
                        break;
                    case message.includes("open camera"):
                        openApp("camera");
                        break;
                    // Existing default case...
                }


        // Add more cases as needed...
        default:
            let finalText = "dear Akhil I found on the internet regarding " + message.replace("sophia", "");
            speak(finalText);
            window.open(`https://www.google.com/search?q=${message.replace("sophia", "")}`, "_blank");
            break;
    }

    // Date and Time
    if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    }
    if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { date: "numeric", month: "short", year: "numeric" });
        speak(date);
    }
}


// Call the wishMe function when the page loads
//window.addEventListener("load", wishMe);