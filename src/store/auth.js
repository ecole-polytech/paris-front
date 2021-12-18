const EMPTY_USER_INFO = {
    id : -1, username : 'non-connected', description: "non-connected descr"
}

const auth = {
    namespaced: true,


    state: {

        isConnected: false,
        userInfo: {...EMPTY_USER_INFO},

    },

    mutations: {
        CONNECTED(state){
            state.isConnected = true;
        },

        DISCONNECTED(state){
            state.isConnected = false;
            state.userInfo = {...EMPTY_USER_INFO};
        },


        FILL_USER_INFO(state, {id, username, description}){
            state.userInfo.id = id;
            state.userInfo.username = username;
            state.userInfo.description = description;
        },
    },


    actions: {

        login(context, userInfo){

            context.commit("CONNECTED");
            context.commit("FILL_USER_INFO", userInfo)

        },

        logout(context){
            context.commit("DISCONNECTED");
        }

    }
}


export default auth;