const vm = new Vue({
    el: '#vue_dev',
    data: {
        firstName: 'hai',
        lastName: 'nv'
    },
    methods: {
        getDetail: function() {
            return this.firstName + this.lastName;
        }
    }
});

console.log(vm.$data.firstName);
console.log(vm.$data.lastName);