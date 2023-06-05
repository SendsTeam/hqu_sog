import { createApp } from 'vue'
import DanmaItem from '../components/DanmaItem.vue'

const comment = (text, my, tx) => {
    return {
        render: function () {
            let $div = document.createElement('div')
            const danmaItem = createApp(DanmaItem, { text, my: my ? my : false, tx })
            const instance = danmaItem.mount($div)
            return $div
        },
    }
}

const commentMy = (text, userinfo) => {
    return comment(text, true, userinfo.value.avatar)
}

const commentOther = () => {
    // todo
}



export { commentMy, commentOther }