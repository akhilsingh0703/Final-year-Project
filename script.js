// Select elements
const btn = document.querySelector("#btn");
const voice = document.querySelector("#voice");
const output = document.getElementById('output'); // Select the output element

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
        case message.includes("about centurion university"):
            speak("Centurion University (CUTM) is a private university from Odisha, India. It was accorded the status of a university in 2010 and has been accredited by NAAC with 'A+' Grade.");
            window.open("https://drive.google.com/file/d/1csIPu1SooKHnkAFtFghCwE4P2JOdhin3/view?usp=sharing", "_blank");
            break;
        case message.includes("who are you"):
            speak("I am Sophia, a virtual assistant developed by Akhil at Centurion University of Technology and Management, Paralekhemundi.");
            break;
        case message.includes("open instagram"):
            window.open("https://www.instagram.com/", "_blank");
            break;
        case message.includes("give me holiday list"):
            speak("Here is the holiday list for 2024-25...");
            // You can add the full holiday list here if needed
            window.open("https://cutm.ac.in/wp-content/uploads/2024/HOLIDAY%20LIST-2024-25-.pdf", "_blank");
            break;
        case message.includes("who is Vice chancellor of our college"):
            speak("Prof. Supriya Pattanayak is the Vice Chancellor of Centurion University.");
            window.open("https://cutm.ac.in/staff/prof-supriya-pattanayak/", "_blank");
            break;
        case message.includes("who is co-founder of our college"):
            speak("D. Narsimha Rao and Prof. Mukti Kanta Mishra are the co-founders of Centurion University.");
            window.open("https://drive.google.com/file/d/1pCfG3EZrFDHVij2Wo2MKwg0sAWHol1mj/view?usp=sharing", "_blank");
            break;
        case message.includes("who is the founder of our college"):
            speak("Our leadership team is committed to fostering an environment of innovation, excellence, and inclusivity.");
            window.open("https://drive.google.com/file/d/1pCfG3EZrFDHVij2Wo2MKwg0sAWHol1mj/view?usp=sharing", "_blank");
            break;
        case message.includes("who is Dean of our college"):
            speak("Prof. (Dr.) Prafulla Kumar Panda is currently serving as the Dean of School of Engineering and Technology at Paralakhemundi Campus.");
            break;
        case message.includes("who is the principal of our college"):
            speak("Prof. (Dr.) Prafulla Kumar Panda is currently serving as the Principal of our college");
            break;
        case message.includes("leaders of our college"):
            speak("Our Leaders , At Centurion University, our leadership team is committed to fostering an environment of innovation, excellence, and inclusivity. Led by visionary educators and industry experts, our leaders bring a wealth of experience and a passion for education that drives our mission forward.Together, they guide our institution with a focus on academic rigor, community engagement, and the holistic development of our students. Their dedication ensures that Centurion University continues to be a beacon of learning and a catalyst for positive change.");
                    window.open("https://drive.google.com/file/d/1pCfG3EZrFDHVij2Wo2MKwg0sAWHol1mj/view?usp=drive_link");
            break;
            
        case message.includes("open ERP"):
            window.open("https://erp.cutm.ac.in/", "_blank");
            break;
        case message.includes("open facebook"):
            window.open("https://www.facebook.com/", "_blank");
            break;
        case message.includes("open google"):
            window.open("https://www.google.com/", "_blank");
            break;
        case message.includes("open calculator"):
            speak("Opening calculator...");
            window.open("calculator:", "_self");
            break;
        case message.includes("open notepad"):
            window.open("Notepad:", "_self");
            break;
        case message.includes("open chrome"):
            window.open("https://www.google.com/chrome/", "_blank");
            break;
        case message.includes("open task manager"):
            window.open("Task Manager:", "_self");
            break;
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
        default:
            let finalText = "Dear Akhil, I found on the internet regarding " + message.replace("sophia", "");
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

// Function to open apps
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

// Call the wishMe function when the page loads
window.addEventListener("load", wishMe);
