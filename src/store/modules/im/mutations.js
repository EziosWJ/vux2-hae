import Vue from 'vue';
export default{

    pushMsg(state,playload){
        // state.msgs.a = playload.msg

        let sessionId = playload.msg.sessionId;
        if (!Array.isArray(playload.msg)) { playload.msg = [playload.msg]; }
        state.msgs = state.msgs || {};
        // state.msgs[sessionId] = nim.mergeMsgs(state.msgs[sessionId], playload.msg);
        // state.msgs[sessionId].push(playload.msg) //error
        let tempMsgs = nim.mergeMsgs(state.msgs[sessionId], playload.msg);
        Vue.set(state.msgs,sessionId,tempMsgs)
    }

}