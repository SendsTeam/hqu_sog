const nextPage = async (router) => {
    const nowIndex = router.currentRoute.value.path.match(/\/story\/(\d+)/)[1]
    router.push('/story/' + (parseInt(nowIndex) + 1))
}
const lastPage = async (router) => {
    const nowIndex = router.currentRoute.value.path.match(/\/story\/(\d+)/)[1]
    router.push('/story/' + (parseInt(nowIndex) - 1))
}

export {
    nextPage,
    lastPage
}