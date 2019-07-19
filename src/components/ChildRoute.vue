<template>
    <div id="childRoute">
        <h1>params: {{childRoute}}</h1>
        <h3>this is a child vue</h3>
    </div>
</template>

<script>
    export default {
        name: "ChildRoute",
        props:['childRoute'],
        // data(){
        //     return {
        //         childMsg: ''
        //     }
        // },
        // created() {
        //     this.childMsg = this.$route.params.msg
        // }
    }
</script>

<style scoped>

</style>