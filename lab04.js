const events = [
    {
        title: "Halloween 🎃",
        date: "2026-10-31",
        img: "https://i.pinimg.com/1200x/4f/8a/3f/4f8a3f720cf73c4a7118230d0aa847f7.jpg"
        
    },
    {
        title: "Christmas 🎁",
        date: "2026-12-25",
        img: "https://i.pinimg.com/736x/8b/a0/79/8ba079222d08a423543a466eabeeb5c3.jpg"
    },
    {
        title: "New Year's Day 🎊",
        date: "2027-01-01",
        img: "https://i.pinimg.com/736x/ea/3f/ca/ea3fca43e54d6b458ddbb760833b25f4.jpg"
    },
    {
        title: "Black Friday 🛍️ ",
        date: "2026-11-27",
        img: "https://i.pinimg.com/1200x/52/f6/52/52f65229dc9696179574579dd3f7c0bc.jpg"
    },
    {
        title: "Valentine's Day 💗 ",
        date: "2026-02-14",
        img: "https://i.pinimg.com/736x/85/d4/27/85d4273104ec6707159979c7e581dd1d.jpg"
    },
    {
        title: "April Fools' Day 😂 ",
        date: "2026-04-01",
        img: "https://i.pinimg.com/1200x/76/63/7f/76637fba7ca4d88dba0af58df252d767.jpg"
    },
];

document.write("<h2>Problem 1 - Event Timeline</h2>");

for (const event of events) {
    // Current date and target event date
    const today = new Date();
    const targetDate = new Date(event.date);
    
    const difference = targetDate - today;
    // Convert milliseconds to days
    const differenceDays = Math.ceil( difference / (1000 * 60 * 60 * 24));
    
	// Extract date components
    const year = targetDate.getFullYear();
    const month = String(targetDate.getMonth() + 1).padStart(2, "0");
    const day = String(targetDate.getDate()).padStart(2, "0");
    
    // Create YYYY-MM-DD formatted date
    const formattedDate = `${year}-${month}-${day}`;
    
    // Determine event status
    let statusText;
    let statusColor;

    if (differenceDays > 0) {
        statusText = `${differenceDays} days remaining`;
        statusColor = "green";
    } else if (differenceDays < 0) {
        statusText = `Passed ${Math.abs(differenceDays)} days ago`;
        statusColor = "grey";
    } else {
        statusText = "Happening Today!";
        statusColor = "orange";
    }
    
    // Output to webpage using document.write()
    document.write(`
        <div style="
            background-image: url(${event.img});
            background-size: contain;
            background-position: center;
            border: 3px solid black;
            padding: 50px;
            margin: 10px;
            font-size: 24px;
            color: white;
            height: 50px;
            text-shadow: 2px 2px 4px black;
        ">
            <strong>${event.title}</strong> |
            ${formattedDate} |
            <span style="color: ${statusColor};">${statusText}</span>
        </div>
    `);

        
}

function sanitizeString(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
}
function isPalindrome(text) {
    const cleanedText = sanitizeString(text);

    const reversedText = cleanedText
        .split("")
        .reverse()
        .join("");

    return cleanedText === reversedText;
}
const testStrings = [
    "Mr. Owl ate my metal worm.",
    "I’m on a seafood diet. I see food and I eat it.",
    "level",
    "Love is sharing your popcorn.",
    "Was it a car or a cat I saw?",
    "Never odd or even",
    "Rats live on no evil star",
    "JavaScript is fun"
];

// Display results on the webpage
document.write("<h2>Problem 2 - Palindrome Evaluator</h2>");

for (const text of testStrings) {
    const result = isPalindrome(text);

    if (result) {
        document.write(`
            <p style="color: red; font-weight: bold;">
                ${text} — Palindrome
            </p>
        `);
    } else {
        document.write(`
            <p style="color: grey; font-style: italic;">
                ${text} — Not a palindrome
            </p>
        `);
    }
}

