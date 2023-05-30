const leaveAni = async (className) => {
    document.querySelector('.' + className).classList.add(className + '-leave')
}
export {
    leaveAni
}