const app = new Vue({
    el:"#app",
    data:{
        emails:[],
    },
    methods:{},
    created(){},
    mounted(){

        for(i=0; i<10; i++){
            const self = this;
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(function(answer){
                   
                    self.emails.push( answer.data.response);
                   
                });

        }
            
    }
});

