const storeCurrentUser = {
    name: 'Kventin', id: 'cn_5', email: 'kventin@me.is', avatar: 'tarantino.jpg'
}

export default (store = storeCurrentUser, action) => {
    switch (action.type) {
        default:
            return store;
    }
}