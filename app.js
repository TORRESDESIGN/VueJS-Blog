new Vue({
	el:'#vue-app',
	data: {
		age:20,
		a:0,
		b:0
	},
	methods: {
		//adding "()" at the end of function name in the index file makes them read the methods
		/*addToA: function(){
			console.log("addToA")
			return this.a + this.age;
		},
		addToB: function(){
			console.log("addToB")
			return this.b + this.age;
		}*/
	},
	computed: {
		//removing "()" at the end of function name in the index file makes them read the methods
		addToA: function(){
			console.log("addToA")
			return this.a + this.age;
		},
		addToB: function(){
			console.log("addToB")
			return this.b + this.age;
		}
	}
});