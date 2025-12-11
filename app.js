let names = [
    "Kiran","Arun","Ravi","Suresh","Mahesh","Ramesh","Sunil","Anil","Vijay","Ashok",
    "Manoj","Prakash","Santosh","Deepak","Ajay","Lokesh","Nilesh","Raju","Bala",
    "Hari","Kamesh","Dinesh"
];

let phones = [
    "11112222","99998888","99990011","99887766","98765012","99001122","90123456","91234567",
    "93456789","94567890","95678901","96789012","97890123","98901234","99012345","98123456",
    "97234567","96345678","95456789","94567890","93678901","92789012"
];

// SHOW MEMBERS
function showMembers() {
    let html = "<h2>ಸದಸ್ಯರ ಪಟ್ಟಿ</h2>";
    names.forEach((n,i)=>{
        html += <div class='member-box'>${n} — ${phones[i]}</div>;
    });
    document.getElementById("content").innerHTML = html;
}

// MONTHLY AMOUNT ENTRY
function openMonthly() {
    document.getElementById("content").innerHTML = `
        <h2>ಈ ತಿಂಗಳ ಹಣ Entry</h2>
        <input id="amt" type="number" placeholder="ಒಬ್ಬರಿಗೆ ಎಷ್ಟು? ಉದಾ: 2000">
        <button class="send-btn" onclick="saveMonthly()">Send WhatsApp Message</button>
    `;
}

function saveMonthly() {
    let amt = document.getElementById("amt").value;
    if (amt === "") { alert("ಮೊತ್ತ ಬರೆಯಿ"); return; }

    let total = amt * names.length;

    let msg = 🌼 ಶ್ರೀ ರಾಮ ಚೀಟಿ ಸಂಘ 🌼\n\n💰 ಈ ತಿಂಗಳ ಚೀಟಿ ಮೊತ್ತ: ₹${amt}\n🙏 ಕಟ್ಟಿದಕ್ಕೆ ಧನ್ಯವಾದ\nಒಟ್ಟು ಸಂಗ್ರಹ: ₹${total};

    phones.forEach(num => sendWA(num, msg));
}

// CHITI SELECTION
function openChiti() {
    let html = `
        <h2>ಈ ತಿಂಗಳ ಚೀಟಿ ಕೂಗು</h2>
        <select id="winner">
    `;
    names.forEach(n => html += <option>${n}</option>);
    html += `
        </select>

        <input id="chitiAmount" type="number" placeholder="ಚೀಟಿ ಮೊತ್ತ ಉದಾ: 14000">
        <input id="guarantor" placeholder="ಜಮೀನು (optional)">
        <button class="send-btn" onclick="announceChiti()">Send Result</button>
    `;

    document.getElementById("content").innerHTML = html;
}

function announceChiti() {
    let w = document.getElementById("winner").value;
    let amt = document.getElementById("chitiAmount").value;
    let g = document.getElementById("guarantor").value;

    if (amt === "") { alert("ಚೀಟಿ amount ಬರೆಯಿ"); return; }

    let msg = 🌼 ಶ್ರೀ ರಾಮ ಚೀಟಿ ಮಾಹಿತಿ 🌼\n\n🏆 ಚೀಟಿ: ${w}\n💵 ಚೀಟಿ ಮೊತ್ತ: ₹${amt};
    if (g !== "") msg += \n👤 ಜಮೀನು: ${g};

    phones.forEach(num => sendWA(num, msg));
}

// OPEN WHATSAPP
function sendWA(num, text) {
    let url = https://api.whatsapp.com/send?phone=${num}&text=${encodeURIComponent(text)};
    window.open(url, "_blank");
}