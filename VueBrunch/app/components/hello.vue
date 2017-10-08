<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>

    </div>
</template>

<script>
    export default {
        name: 'hello',
        data: function () {
            return {
                msg: 'Welcom to Your Vue.js App'
            }
        },


        created (){
            /*   var s = Seneca().test('print')

       s.client({type:'browser', pin:'a:*'})
       s.client({type:'browser', pin:'b:*'})


       s.act('a:1,x:1', console.log)*/
        },

        mounted () {
            const self = this;

            const seneca = self.$root.$options.seneca;

            seneca.add('cm:blue', function(msg, reply) {
                blue.res = msg.res.x
                reply()
            })

        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>