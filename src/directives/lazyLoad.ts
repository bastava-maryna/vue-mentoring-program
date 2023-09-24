export default function (Vue) {
  Vue.directive("lazyLoad", {
    mounted(elem, { value }) {
      const observer: IntersectionObserver = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]): void => {
          entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry && entry.isIntersecting) {
              if (elem.tagName === "IMG") {
                elem.src = value
              } else {
                elem.style.backgroundImage = `url("${value})`
              }
              observer.disconnect()
            }
          })
        }
      )
      observer.observe(elem)
      elem.$lazy = observer
      // }
    },
    beforeUnmount(elem) {
      if (elem.$lazy) {
        elem.$lazy.unobserve(elem)
      }
    }
  })
}
