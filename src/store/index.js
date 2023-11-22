import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


const numberOptions={
    namespaced:true,
    actions:{
        add(context,num){
            console.log('add方法被调用');
            context.commit('add',num);
        }
    },
    mutations:{
        add(state,num){
            state.number+=num;
        }
    },
    state:{
        number:0
    },
    getters:{
        bigSum(state){
            return state.number*10;
        }
    }
}

export default new Vuex.Store({
    modules:{
        numberOptions
    }
})