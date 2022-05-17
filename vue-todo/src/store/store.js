import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch(){
        const arr = [];
        if(localStorage.length > 0){
            for(var i = 0; i < localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
                }
            }
        }
        return arr; 
    }
}

export const store = new Vuex.Store({
    state : { //state는 data
        todoItems : storage.fetch()
    },
    mutations :{
        //App.vue에서 정의해놓은것을 store에 옮김
        addOneItem(state, todoItem){
            var obj = {completed: false, item: todoItem};
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        }, 
        removeOneItem : function(){

        }, 
        toggleOneItem : function(){

        }, 
        clearAllItems : function(){

        }
    }
});