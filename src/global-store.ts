// global-store.ts
import { reactive } from "./reactivity.js";

const globalContextData = reactive({
    registrationData: {},

    //chat-page
    isProfileOpened: false,
    profileToggle: () => {
        globalContextData.isProfileOpened = !globalContextData.isProfileOpened;
        console.log("changed the value", globalContextData.isProfileOpened);
    },
    handleSearch: (event: Event) => {
        const searchString = (
            event.target as HTMLInputElement
        ).value.toLowerCase();
        const filteredChats = globalContextData.chats.filter((chat) => {
            return (chat.name as string).toLowerCase().includes(searchString);
        });
    },

    //chat-list

    chats: [
        reactive({
            image: "assets/images/default-avatar.jpg",
            name: "John Doe",
            lastMessage: "Hey, how's it going?",
            lastMessageTime: "2024-10-03 10:15",
            unreadMessages: 2,
            searchFiltered: true,
        }),
        reactive({
            image: "assets/images/default-avatar.jpg",
            name: "Jane Smith",
            lastMessage: "Don't forget the meeting tomorrow.",
            lastMessageTime: "2024-10-03 09:30",
            unreadMessages: 1,
            searchFiltered: true,
        }),
        reactive({
            image: "assets/images/default-avatar.jpg",
            name: "Michael Johnson",
            lastMessage: "Let's catch up later!",
            lastMessageTime: "2024-10-03 08:45",
            unreadMessages: 0,
            searchFiltered: true,
        }),
        reactive({
            image: "assets/images/default-avatar.jpg",
            name: "Emily Davis",
            lastMessage: "I'll send you the details.",
            lastMessageTime: "2024-10-02 16:20",
            unreadMessages: 5,
            searchFiltered: true,
        }),
        reactive({
            image: "assets/images/default-avatar.jpg",
            name: "David Brown",
            lastMessage: "Thanks for the help!",
            lastMessageTime: "2024-10-02 14:50",
            unreadMessages: 3,
            searchFiltered: true,
        }),
        reactive({
            image: "assets/images/default-avatar.jpg",
            name: "Sarah Wilson",
            lastMessage: "See you later.",
            lastMessageTime: "2024-10-02 12:10",
            unreadMessages: 0,
            searchFiltered: true,
        }),
        reactive({
            image: "assets/images/default-avatar.jpg",
            name: "Chris Evans",
            lastMessage: "Can we reschedule?",
            lastMessageTime: "2024-10-02 11:35",
            unreadMessages: 4,
            searchFiltered: true,
        }),
        reactive({
            image: "assets/images/default-avatar.jpg",
            name: "Olivia Martinez",
            lastMessage: "I'm on my way.",
            lastMessageTime: "2024-10-02 10:05",
            unreadMessages: 1,
            searchFiltered: true,
        }),
        reactive({
            image: "assets/images/default-avatar.jpg",
            name: "James Taylor",
            lastMessage: "Let me know when you're free.",
            lastMessageTime: "2024-10-01 18:30",
            unreadMessages: 7,
            searchFiltered: true,
        }),
        reactive({
            image: "assets/images/default-avatar.jpg",
            name: "Sophia Anderson",
            lastMessage: "Great job on the project!",
            lastMessageTime: "2024-10-01 16:00",
            unreadMessages: 0,
            searchFiltered: true,
        }),
    ],
    messages: [
        {
            image: "assets/images/default-avatar.jpg",
            text: "Hello, how are you?",
            time: "12:34",
            sentByYou: true,
            status: "sent",
            edited: false,
        },
        {
            image: "assets/images/default-avatar.jpg",
            text: "I'm good, thanks! How about you?",
            time: "12:35",
            sentByYou: false,
            status: "read",
            edited: false,
        },
        {
            image: "assets/images/default-avatar.jpg",
            text: "Just finishing up some work.",
            time: "12:36",
            sentByYou: true,
            status: "delivered",
            edited: false,
        },
        {
            image: "assets/images/default-avatar.jpg",
            text: "By the way, did you check the document I sent?",
            time: "12:37",
            sentByYou: true,
            status: "read",
            edited: true,
        },
        {
            image: "assets/images/default-avatar.jpg",
            text: "Yes, looks good. I'll get back to you with my comments soon.",
            time: "12:38",
            sentByYou: false,
            status: "read",
            edited: false,
        },
        {
            image: "assets/images/default-avatar.jpg",
            text: "Great, looking forward to your feedback!",
            time: "12:39",
            sentByYou: true,
            status: "delivered",
            edited: false,
        },
        {
            image: "assets/images/default-avatar.jpg",
            text: "Also, are we still on for the meeting at 3 PM?",
            time: "12:40",
            sentByYou: true,
            status: "sent",
            edited: false,
        },
        {
            image: "assets/images/default-avatar.jpg",
            text: "Yes, see you then!",
            time: "12:41",
            sentByYou: false,
            status: "read",
            edited: false,
        },
        {
            image: "assets/images/default-avatar.jpg",
            text: "Have you seen the latest updates in the project?",
            time: "12:42",
            sentByYou: false,
            status: "read",
            edited: false,
        },
        {
            image: "assets/images/default-avatar.jpg",
            text: "Not yet, but I'll check them out after lunch.",
            time: "12:43",
            sentByYou: true,
            status: "sent",
            edited: false,
        },
        {
            image: "assets/images/default-avatar.jpg",
            text: "Sounds good! Let's discuss it later.",
            time: "12:44",
            sentByYou: false,
            status: "received",
            edited: false,
        },
        {
            image: "assets/images/default-avatar.jpg",
            text: "I have some ideas I want to share with you.",
            time: "12:45",
            sentByYou: false,
            status: "delivered",
            edited: false,
        },
        {
            image: "assets/images/default-avatar.jpg",
            text: "Looking forward to hearing them!",
            time: "12:46",
            sentByYou: true,
            status: "sent",
            edited: false,
        },
    ],
    binaryConditionalRender: function (
        condition: boolean,
        ...elements: (Element | null)[]
    ) {
        if (elements.length === 1) {
            condition
                ? elements[0]?.classList.remove("hidden")
                : elements[0]?.classList.add("hidden");
        } else if (elements.length === 2) {
            const [firstElement, secondElement] = elements;
            if (condition) {
                firstElement?.classList.remove("hidden");
                secondElement?.classList.add("hidden");
            } else {
                firstElement?.classList.add("hidden");
                secondElement?.classList.remove("hidden");
            }
        } else {
            console.warn("binaryConditionalRender expects 1 or 2 elements.");
        }
    },
});

export { globalContextData };
