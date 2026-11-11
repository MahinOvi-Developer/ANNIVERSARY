
const conversations = [
    {
        title: "Kuttar baccha tui amr 😂",
        icon: "🐶",
        preview: "Our funny conversation...",
        messages: [
            { sender: "eva", text: "Kuttar baccha tui amr 😂" },
            { sender: "mahin", text: "Ami shudhu tomar jan  🥺" },
            { sender: "eva", text: "Tui amar kuttar baccha! ❤️" }
        ]
    },
    {
        title: "Aise 😏",
        icon: "😏",
        preview: "A little attitude...",
        messages: [
            { sender: "eva", text: "Aise 😏" },
            { sender: "mahin", text: "aaaaaaaaaaaaa 😂" },
            { sender: "eva", text: "bebebebbebebbeb beaa ! 🤭" }
        ]
    },
    {
        title: "Thappor dibo 😒",
        icon: "🙄",
        preview: "Someone is angry!",
        messages: [
            { sender: "eva", text: "Thappor dibo! 😒" },
            { sender: "mahin", text: "Age dhore dekhao! 😂" },
            { sender: "eva", text: "Beshi kotha bolish na! 😤" }
        ]
    },
    {
        title: "Faltu 😂",
        icon: "🤣",
        preview: "Our nonsense talks...",
        messages: [
            { sender: "eva", text: "Faltu! 😂" },
            { sender: "mahin", text: "Ami eto bhalo chele!" },
            { sender: "eva", text: "Hahahaha! 🤣" }
        ]
    },
    {
        title: "Ahhhh Mahin 🥺",
        icon: "🥺",
        preview: "A special little moment...",
        messages: [
            { sender: "eva", text: "Ahhhh Mahin 🥺" },
            { sender: "mahin", text: "Ki hoyeche amar Eva? ❤️" },
            { sender: "eva", text: "Kichu naaa! 🥹" }
        ]
    },
    {
        title: "Kuttar baccha nam 😂",
        icon: "🐾",
        preview: "Another funny memory...",
        messages: [
            { sender: "eva", text: "Kuttar baccha nam! 😂" },
            { sender: "mahin", text: "na more ja 😭" },
            { sender: "eva", text: "betha ,  naam Kuttar baccha! 🤣" }
        ]
    }
];

const chatList = document.getElementById("chatList");
const conversation = document.getElementById("conversation");
const messagesBox = document.getElementById("messages");
const title = document.getElementById("conversationTitle");

conversations.forEach((chat, index) => {
    const button = document.createElement("button");
    button.className = "chat-item";

    button.innerHTML = `
        <span class="chat-icon">${chat.icon}</span>
        <span class="chat-text">
            <strong>${chat.title}</strong>
            <small>${chat.preview}</small>
        </span>
        <span class="chat-arrow">›</span>
    `;

    button.addEventListener("click", () => openChat(index));
    chatList.appendChild(button);
});

function openChat(index) {
    const chat = conversations[index];

    title.textContent = chat.title;
    messagesBox.innerHTML = "";

    chat.messages.forEach(message => {
        const row = document.createElement("div");
        row.className = `message-row ${message.sender}`;

        const senderName = message.sender === "eva" ? "Eva 💗" : "Mahin ❤️";

        row.innerHTML = `
            <span class="sender">${senderName}</span>
            <div class="bubble"></div>
        `;

        row.querySelector(".bubble").textContent = message.text;
        messagesBox.appendChild(row);
    });

    chatList.classList.add("hidden");
    conversation.classList.remove("hidden");
}

document.getElementById("backChats").addEventListener("click", () => {
    conversation.classList.add("hidden");
    chatList.classList.remove("hidden");
});

