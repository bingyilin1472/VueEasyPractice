//建立vue instance
new Vue({
    // 鎖定上很自由，可以class或any tag不過只會鎖定到第一個first符合的element
    // 接著就會針對他產生一個vue instance
    el: '#app',
    data: {
        name: 'Dante',
        classes: ['one', 'two'],
        link: 'https://www.google.com/',
        atag: '<a href="#">Yeahhhh!!!!</a>'
    },
    methods:{
        //這樣可以將事件物件作為parameter引入
        updateName(event){
            //將事件發生處的value取出來作為name
            this.name = event.target.value
        },
        changeName(event){
            this.name = event.target.value
        },
        greeting(){
            return 'Hello, Good morning!!!  ' + this.name
        },
        returnGoogleLink(){
            return this.link
        }
    }
})