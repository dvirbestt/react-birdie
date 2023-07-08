const initialData = {
    user : JSON.parse(localStorage.getItem("user")) || 0,
    token : localStorage.getItem("token") || ""
}



export function UserReducer(state = initialData,action){
    switch (action.type) {
        case "ADD" :

            return {user: action.payload.user,token: action.payload.token};
        case "REMOVE" :

            return {user: 0,token: ""}

        default :
            return state;
    }
}