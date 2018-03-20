


var app = new Vue({
    data:{
        entries:null
    },
    created: function(){
        this.loadFromJson();
    },
    methods:{
        loadFromJson: function(){
        var userLists = [];
        $.ajax({
            type: 'GET',
            url: "entries.json",
            dataType: 'json',
            success: (data) => {
                 this.entries = data.entries;
            }
        });
    }
    },
    computed:{
        
    }
});

app.$mount('#bodApp')