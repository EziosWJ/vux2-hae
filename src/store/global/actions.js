import axios from 'axios';
import Qs from 'qs';
axios.defaults.transformRequest = function (data) {
  data = Qs.stringify(data);
  return data;
};
axios.defaults.headers = {'Content-Type': 'application/x-www-form-urlencoded'}

export default {
    setRole({commit},playload){
        commit('setUSER_ROLE',playload)
    },
    setUcId({commit},ucId){
        commit('setUc_Id',ucId)
    },
    setByTheHelperList({commit}){
        axios.post('/api/com/getByTheHelperList').then(resp => {
            console.log(resp.data);
            let list = resp.data.content.byTheHelperList
            for (let index = 0; index < list.length; index++) {
                const element = list[index]
                list[index].value = list[index].value.toString()
            }
            console.log(list);
            commit('setByTheHelperList',list)
        }).catch(error => {
            console.log(error);
            alert(`发生内部错误${error}`)
        })
    },


    putRiskForm({commit},risk){
        axios.post('/api/eduplan/putRisk',risk).then(resp => {
            let code = resp.data.code
            if(code === 200){
                alert('成功提交！')
            }
        }).catch(error=>{
            console.log(error);
            
        })
    },
    putForm({commit},playload){
        axios.put(playload.url,playload.formData).then(resp => {
            let data = resp.data
            if(data.code === 200){
                alert("提交成功！")
            }else if(data.code === 555){
               alert("发生错误！") 
            }
        }).catch(error =>{
            alert(`发生内部错误：${error}`)
        })
    }
}