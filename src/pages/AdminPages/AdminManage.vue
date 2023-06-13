<template>
    <div class="container">

        <div class="row" v-for="obj in list" :key="obj.id">

            <div class="left">
                <span class="stu_num">{{ obj.stu_num }}: </span>
                <span>{{ obj.text }}</span>
            </div>

            <div class="right">
                <div class="button-container">
                    <button type="button" class="btn" @click="passMessage(obj.id)">通过</button>
                    <button type="button" class="btn" @click="refuseMessage(obj.id)">不通过</button>
                </div>
            </div>
        </div>

    </div>
</template>
    
<script setup>
import { getallmessage, passmessage, refusemessage } from '../../service/axios'
import { onMounted, ref } from 'vue'


const getMessage = async () => {
    const result = await getallmessage()
    if (result) {
        result.forEach(element => {
            list.value.push(element)
        })
    } else {
        alert("暂无待审核弹幕")
    }
}

const passMessage = async (id) => {
    const result = await passmessage(id)
    console.log(result)
    if (result) {
        list.value = list.value.filter((ele) => ele.id !== id)
    }
}

const refuseMessage = async (id) => {
    const result = await refusemessage(id)
    console.log(result)
    if (result) {
        list.value = list.value.filter((ele) => ele.id !== id)
    }
}

const list = ref([])
onMounted(async () => {
    getMessage()
})

</script>
    
<style scoped>
.container {
    position: absolute;
    top: 4rem;
    left: 1rem;
    right: 1rem;
    bottom: 3rem;

    background: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    /* border-radius: 25px; */
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
    overflow-x: hidden;
    overflow-y: scroll;

    animation: .6s fadeInUp linear;
}

.row {
    padding: 1rem;
    width: 100%;
    height: 6rem;
    border-bottom: 1px solid rgba(58, 31, 156, 0.37);
    color: snow;
    font-size: 1rem;
}


.left {
    width: 70%;
    height: 100%;
    display: inline-block;
}

.left span {
    word-break: break-word;
    white-space: pre-line;
    font-size: 1.2rem;
    color:black;
}

.stu_num{
    color: rgb(219, 61, 82) !important;
    font-size: 1.5rem !important;
}

.right {
    width: 30%;
    height: 100%;
    display: inline-block;
}

.button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}


.btn {
    width: 4rem;
    height: 2rem;
    margin-top: .2rem;
    background-color: #7A5FFF;
    color: white;
    border: none;
    border-radius: .25rem
}

.click {
    transition: background .8s ease-out;
    background: #7A5FFF radial-gradient(circle, transparent 1%, #7A5FFF 1%) center/15000%;
}

.click:active {
    background-color: #c1b4ff;
    background-size: 100%;
    transition: background 0s;
}
</style>