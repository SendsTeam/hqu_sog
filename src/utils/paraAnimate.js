const animate = (prefix, aniClass) => {
    const ParaList = document.querySelectorAll(prefix + ' .shouldAni')
    if (!ParaList) return
    ParaList.forEach((element) => {
        const delay = element.getAttribute('delayTime')
        if (delay) {
            setTimeout(() => {
                if (aniClass) {
                    element.classList.add(aniClass)
                } else {
                    element.classList.add('paraAniDefault')
                }

            }, parseInt(delay))
        }
    })

}

export {
    animate
}