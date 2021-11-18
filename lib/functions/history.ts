const back = () => {
  window.history.state?.url !== "/" && window.history.back()
}
const forward = () => {
  window.history.forward()
}

export { back, forward }
