import { createApp } from 'vue'
import DanmaItem from '../components/DanmaItem.vue'

const comment = (text, my, tx, nickname, stunum) => {
    return {
        render: function () {
            let $div = document.createElement('div')
            const danmaItem = createApp(DanmaItem, { text, my: my ? my : false, tx, nickname, stunum })
            danmaItem.mount($div)
            // danmaItem.unmount()
            setTimeout(() => { $div = null }, 20000)
            return $div
        },
    }
}

const commentMy = (text, userinfo) => {
    return comment(text, true, userinfo.value.avatar, userinfo.value.nickname, userinfo.value.stu_num)
}

const commentOther = (resultDanma) => {
    // todo
    return comment(resultDanma.text, false, resultDanma.avatar, resultDanma.nickname, resultDanma.stu_num)
}



export { commentMy, commentOther }