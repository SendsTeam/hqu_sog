<template>
    <div class="login-box">
        <div class="title">管理员登录</div>
        <form>
            <div class="user-box">
                <input type="text" name="" required v-model="name" autocomplete>
                <label>Username</label>
            </div>
            <div class="user-box">
                <input type="password" name="" required v-model="password">
                <label>Password</label>
            </div>
            <center>
                <a @click="login">
                    登录
                    <span></span>
                </a>
            </center>
        </form>
    </div>
</template>
    
<script setup>
import { ref } from 'vue'
import { adminLogin } from '../../service/axios'
import { useRouter } from 'vue-router'
const name = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
    const loginStatus = await adminLogin(name.value, password.value)
    if (loginStatus) {
        document.querySelector('.login-box').classList.add('leave')
        setTimeout(() => { router.push('/adminmanage') }, 1000)
    }
}

</script>
    
<style scoped>
.title {
    font-size: 2rem;
    color: snow;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
}

.leave {
    animation: 1s fadeOut ease forwards !important;
}

.login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    padding: 40px;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: #522B29;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
    box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
    border-radius: 10px;
}

.login-box .user-box {
    position: relative;
}

.login-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
}

.login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    -webkit-transition: .5s;
    transition: .5s;
}

.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label {
    top: -20px;
    left: 0;
    color: #bdb8b8;
    font-size: 12px;
}

.login-box form a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #ffffff;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    -webkit-transition: .5s;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px
}

.login-box a:active {
    background: #51D6FF;
    color: #fff;
    border-radius: 5px;
    -webkit-box-shadow: 0 0 5px #51D6FF,
        0 0 25px #51D6FF,
        0 0 50px #51D6FF,
        0 0 100px #51D6FF;
    box-shadow: 0 0 5px #51D6FF,
        0 0 25px #51D6FF,
        0 0 50px #51D6FF,
        0 0 100px #51D6FF;
}

.login-box a span {
    position: absolute;
    display: block;
}

@-webkit-keyframes btn-anim1 {
    0% {
        left: -100%;
    }

    50%,
    100% {
        left: 100%;
    }
}

@keyframes btn-anim1 {
    0% {
        left: -100%;
    }

    50%,
    100% {
        left: 100%;
    }
}

.login-box a span:nth-child(1) {
    bottom: 2px;
    left: -100%;
    width: 100%;
    height: 2px;
    background: -webkit-gradient(linear, left top, right top, from(transparent), to(#51D6FF));
    background: linear-gradient(90deg, transparent, #51D6FF);
    -webkit-animation: btn-anim1 2s linear infinite;
    animation: btn-anim1 2s linear infinite;
}
</style>