new Vue({
	el:'#vue-app',
	data: {
		name:'Daniel',
		job: 'Developer'
	},
	methods: {
		greet: function(time){
			return 'Good ' + time;
		}
	}
});