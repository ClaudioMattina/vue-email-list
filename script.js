const app = new Vue({
    el:"#app",
    data:{
        email:"",
    },
    methods:{
        api(){
            const self = this;
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(function(answer){
                    /* const result= answer; */
                    self.email=answer.data.response;
                });

        }
    },
});

