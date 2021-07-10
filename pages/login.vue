<template>
<div>
    <div class="row">
        <div class="col">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="text" v-model="memberId" class="form-control" placeholder="Email address" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" v-model="passWord" class="form-control" placeholder="Password" required>
            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="btn btn-primary" v-on:click="login">Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        </div>
    </div>
    <div class="row" v-show="member != ''">
        <div class="col">
            <h2>Login scucessful</h2>
            <h3>Hello {{ member.firstname}}</h3>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            memberId: "",
            passWord: "",
            member: ""
        }
    },
    methods: {
        async login() {
            console.log(this.memberId);
            console.log(this.passWord);
            this.member = await fetch(
                'http://localhost:3001/members/' + this.memberId
            ).then(res => res.json())
            console.log(this.member);
            this.$store.commit('getMember', this.member)
        }
    }

}
</script>

<style>

</style>
