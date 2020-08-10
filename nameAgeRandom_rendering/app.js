new Vue({
    el: "#name-age-random-app",
    data:{
        name: 'Leo',
        age: '15',
        imagePath: '20150604_182935.jpg'
    },
    methods:{
        ageBy3(){
            return this.age*3
        },
        randomN(){
            return Math.random()
        }
    }
})