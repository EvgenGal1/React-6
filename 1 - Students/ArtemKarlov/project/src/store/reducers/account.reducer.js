

const initStore = {
    account: {
        id: "user-0",
        name: "Ivan",
        middleName: "Petrovich",
        surname: "Ivanov",
        avatarUrl: "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg",
        email: "IvanIvanov@gmail.com",
        tel: "+79271234567",
        contacts: ["user-1", "user-2", "user-3", "user-4", "user-5", "user-6"],
        chats: ["chatBot-0"],
    }
};


export default (store = initStore, action) => {
    switch(action.type) {
        default: 
            return store;
    }
}