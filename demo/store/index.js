import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		username:'',
		userHeaderPhoto:'',
		userBgImg:'',
		isLogin:false,
		topicList:[],
		detailTopicList:[],
		detailTopicPL:[]
	},
	mutations:{
		change(state,time){
			state.time = time;
		},
		getUserBgImg(state){
			return state.userBgImg
		},
		changeStep(state,data){
			console.log(state.topicList[data].count)
			state.topicList[data].count -= 1;
		},
		getList(state,data){
			console.log(data);
			state.topicList = data;
		}
	}
})

export default store