export default{
    setUSER_ROLE(state,playload){
        state.USER_ROLE = playload.ucRole
        state.USER_ID = playload.ucId
        state.USER_NAME = playload.ucAccid
        state.USER_TOKEN = playload.ucToken
    },
    setByTheHelperList(state,list){
        if(state.reciverList.length<1){
            state.reciverList.push(list)
        }else{
            state.reciverList.pop()
            state.reciverList.push(list)
        }
    },
    // setUSER_ID(state,ucid){
    //     state.USER_ID = ucid
    // }

}