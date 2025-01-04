const botResponses = {
    "hello": "Hello! Welcome to CEK Information Center.\nHere are some details you might be interested in:\n\n●College Rank Details\n●Course Details\n●Fee Structure\n●Seats\n●Placement Details\n●Faculty Details\n●Bus Facility\n●Lab Facility\n●Hostel Facility\n●Clubs and Societies\n\nFeel free to ask for more details on any of these topics!",
    "hi": "Hello! Welcome to CEK Information Center.\nHere are some details you might be interested in:\n\n●College Rank Details\n●Course Details\n●Fee Structure\n●Seats\n●Placement Details\n●Faculty Details\n●Bus Facility\n●Lab Facility\n●Hostel Facility\n●Clubs and Societies\n\nFeel free to ask for more details on any of these topics!",
    "admission": "Admission is open from March to July every year. For more details, visit our admissions page.",
    "course": "❖B Tech\n➢ Electronics and Communication (ECE)\n➢ Computer Science and Engineering(CS)\n➢ Computer Science and Engineering-Cyber Security(CC)\n➢ Electrical and Electronics Engineering(EEE)\n❖M Tech\n➢Computer Science and Engineering (Cyber Forensics andInformation Security)",
    "bye": "Goodbye! Feel free to ask more questions anytime.",
    "fee": "Please specify the course you are interested in, like 'btech' or 'mtech', and the stream if applicable.",
    "fee structure": "Please specify the course you are interested in, like 'btech' or 'mtech', and the stream if applicable.",
    "seat": "●Computer Science (CS):\nTotal Seats: 120\nMerit Regulated: 60\nMerit Full Fee: 54\nNRI Seats: 6\n\n●Computer Science and Engineering (Cyber Security):\nTotal Seats: 60\nMerit Regulated: 30\nMerit Full Fee: 27\nNRI Seats: 3\n\n●Electronics and Communication Engineering:\nTotal Seats: 60\nMerit Regulated: 45\nMerit Full Fee: 12\nNRI Seats: 3\n\n●Electrical and Electronics Engineering:\nTotal Seats: 30\nMerit Regulated: 22\nMerit Full Fee: 6\nNRI Seats: 2\n\n●M.Tech in Computer Science Cyber Forensic and Information Security:\nTotal Seats: 18\nMerit: 14\nSponsored: 4",
    "lab":"➢ELECTRONICS AND COMMUNICATION\n\n● COMMUNICATION LAB\n● DIGITAL SIGNAL PROCESSING LAB\n● CIRCUITS LAB\n● DIGITAL ELECTRONICS LAB\n\n➢ELECTRICAL AND ELECTRONICS\n\n● ELECTRICAL MACHINES LAB\n● POWER ELECTRONICS LAB\n● ELECTRICAL CIRCUITS LAB\n● ELECTRICAL WORKSHOP\n\n➢COMPUTER SCIENCE\n\n● C PROGRAMMING LAB\n● DATA STRUCTURE LAB\n● JAVA PROGRAMMING LAB\n● OPERATING SYSTEM LAB\n● SYSTEM SOFTWARE LAB\n● DBMS LAB\n● NETWORKING LAB\n● COMPILER DESIGN LAB\n\n➢CYBER SECURITY\n\n● DATA STRUCTURE LAB\n● JAVA PROGRAMMING LAB\n● SCRIPTING LANGUAGES FOR SECURITY\n● CRYPTOGRAPHY LAB\n● SYSTEM & NETWORK SECURITY LAB\n● CYBER FORENSICS LAB\n● ETHICAL HACKING LAB",
    "bus":"Our college currently offers 4 buses,routes are provided below\n\n1. Chengannur-Thiruvalla-Thottabhagom-College\n2. Changanacherry-Thengana-Karukachal-Mallappally-College\n3. Pathanamthitta-Kozhencherry-Pullad-Vennikulam-Puramuttom-College\n4. Mannar-Thiruvalla-Thottabhagom-College",
    "hostel":"Our college offers hostel facilities for both boys and girls\n\n❖AMRUTHAM Girls Hostel\n➢Contact no : Mrs. Asha G Nath, Assistant Professor in Mathematics(Warden) at 9495446060\n ❖EDEN Boys Hostel\n➢Contact no : Mr. Biju P Thomas(Warden) at 9447160032",
    "club":"➢CLUBS\n\n● IEEE\n● IEEE SSCS\n● IEDC\n● ICFOSS\n● ICTAK\n● COMPASS\n● ISRA\n● EUREKA\n● CYBER CLUB\n➢EXTRACURRICULAR CLUBS\n\n ● NSS\n● BHOOMITHRASENA CLUB",
    "faculty":"●Faculty Details\n❖PRINCIPAL\nDr. Nisha Kuruvilla\n➢Phone : 0469-2677890\n➢Fax: 0469-2678688\n➢Mobile : 91-8547005034\n➢Email   : principal@cek.ac.in\n❖HOD GENERAL ENGINEERING\nDr. ASHOK KUMAR T V\n➢Contact Ph.No: 94477 09779\n\n❖HOD EC DEPARTMENT\nDr. PHILIP CHERIAN\n➢Contact Ph.No:9446023899\n➢Email:philipcherian@cek.ac.in\n❖HOD CS DEPARTMENT\nDr. RENU GEORGE \n➢Contact Ph.No:97474 01150\n➢Email : renugeorge@cek.ac.in\n❖HOD EEE DEPARTMENT\nMr. JAISON JAMES\n➢Contact Ph.No:9447659175\n❖HOD CC DEPARTMENT\nMr. RAJ KUMAR T \n➢Contact Ph.No:919447402630\n➢Email : rajkumar@cek.ac.in",
    "rank":"❖Bagged up Ranked No. 1 position consistently in Pathanamthitta District\n❖16th Position in KTU results among 134 Engineering Institutions in Kerala",
    "placement":"❖Placement Summary 2020-2021\n➢Total no of offers : 61\n➢Total no of Placements : 41\n❖Placement Summary 2021-2022\n➢Total no of offers : 87\n➢Placement Percentage : 52.63\n❖Placement Summary 2022-2023\n➢Offer Percentage : 91.3\n➢Placement Percentage : 69.56\n❖Placed Students 2024\n➢Offer Percentage : 60\n➢Placement Percentage : 53.33\nOur top recruiters include:\nTCS ,QUEST GLOBAL ,WIPRO ,QSPIDERS ,COGNIZANT ,INFOSYS ,CRANES ,PENTAGON SPACE ,TECHNOLOGICS ,PREVALENT AI ,MINDTREE ,CAPGEMINI ,SERPINDIA ,6D TECHNOLOGIES ,VIRTUSA ,GADEGON",
};

const feeDetails = {
    "btech": "●Merit Regulated:\nTuition Fee: Rs. 40,000/- per year\nOther Fees applicable.\n\n●Merit Full Fee:\nTuition Fee: Rs. 65,000/- per year\nOther Fees applicable.\n\n●NRI:\nTuition Fee: Rs. 1,00,000/- per year\n+ Rs. 1,25,000/- (Refundable Deposit)\nOther Fees applicable.\n\n●Lateral Entry:\nTuition Fee: Rs. 40,000/- per year (Merit)\nor Rs. 65,000/- per year (Management)\nOther Fees applicable.",
    "mtech": "For CS-Cyber Forensics:\nTuition Fee for M.Tech CS - Cyber Forensics & Information Security is Rs. 25,000/- per semester."
};

document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("sendButton");
    const userInput = document.getElementById("userInput");
    const messagesDiv = document.querySelector(".messages");

    let awaitingFeeDetails = false;

    function displayUserMessage(message) {
        const userMessageDiv = document.createElement("div");
        userMessageDiv.textContent = "USER: " + message;
        userMessageDiv.className = 'user-message';
        messagesDiv.appendChild(userMessageDiv);
    }

    function displayBotResponse(message) {
        const botMessageDiv = document.createElement("div");
        botMessageDiv.textContent = "BOT: ";
        botMessageDiv.className = 'bot-message';
        messagesDiv.appendChild(botMessageDiv);
    
        const responseLines = message.split("\n");
    
        responseLines.forEach((line, index) => {
            const lineDiv = document.createElement("div");
            botMessageDiv.appendChild(lineDiv);
    
            // Use a timeout to simulate typing effect
            setTimeout(() => {
                // Clear previous text content (to simulate backspace if needed)
                lineDiv.textContent = '';
    
                // Iterate through each character to simulate typing
                for (let i = 0; i < line.length; i++) {
                    setTimeout(() => {
                        lineDiv.textContent += line[i];
                        messagesDiv.scrollTop = messagesDiv.scrollHeight;
                    }, i * 50); // Adjust typing speed (milliseconds per character)
                }
            }, index * 800); // Adjust delay between lines (milliseconds per line)
        });
    
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
    
    function handleSpecificCourseFeeQuery(userMessage) {
        if (userMessage.toLowerCase().includes("btech") || userMessage.toLowerCase().includes("b.tech")) {
            displayBotResponse(feeDetails.btech);
            awaitingFeeDetails = false;
        } else if (userMessage.toLowerCase().includes("mtech") || userMessage.toLowerCase().includes("m.tech")) {
            displayBotResponse(feeDetails.mtech);
            awaitingFeeDetails = false;
        } else if (!awaitingFeeDetails) {
            displayBotResponse(botResponses.fee);
            awaitingFeeDetails = true;
        } else {
            displayBotResponse("Please specify the course you are interested in, like 'btech' or 'mtech', and the stream if applicable.");
        }
    }

    sendButton.addEventListener("click", function() {
        const message = userInput.value.trim();
        displayUserMessage(message);

        if (message.toLowerCase() === "seat") {
            displayBotResponse(botResponses.seat);
        } else if (message.toLowerCase().includes("fee") || awaitingFeeDetails) {
            handleSpecificCourseFeeQuery(message);
        } else {
            let responseFound = false;

            for (const key in botResponses) {
                if (message.toLowerCase().includes(key)) {
                    displayBotResponse(botResponses[key]);
                    responseFound = true;
                    break;
                }
            }

            if (!responseFound) {
                displayBotResponse("I'm not sure how to respond to that. Can you try asking something else?");
            }
        }

        userInput.value = '';
    });

    userInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            sendButton.click();
        }
    });
});
