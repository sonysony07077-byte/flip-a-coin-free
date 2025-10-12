/**
 * FlipACoinNow JavaScript SDK
 * Version: 1.0.0
 *
 * Usage:
 * const flipper = new CoinFlipper('#container', options);
 * flipper.flip();
 * flipper.on('result', (data) => console.log(data));
 */

;((window) => {
  class CoinFlipper {
    constructor(selector, options = {}) {
      this.container = typeof selector === "string" ? document.querySelector(selector) : selector

      this.options = {
        width: options.width || 400,
        height: options.height || 500,
        showHistory: options.showHistory !== false,
        soundEnabled: options.soundEnabled !== false,
        ...options,
      }

      this.listeners = {}
      this.init()
    }

    init() {
      const params = new URLSearchParams({
        history: this.options.showHistory,
        sound: this.options.soundEnabled,
      })

      const iframe = document.createElement("iframe")
      iframe.src = `https://flipacoinfree.com/widget?${params.toString()}`
      iframe.width = this.options.width
      iframe.height = this.options.height
      iframe.frameBorder = "0"
      iframe.title = "Coin Flip Widget"

      this.container.appendChild(iframe)
      this.iframe = iframe

      // Listen for messages from iframe
      window.addEventListener("message", (event) => {
        if (event.origin === "https://flipacoinfree.com") {
          this.handleMessage(event.data)
        }
      })
    }

    handleMessage(data) {
      if (data.type === "flip") {
        this.emit("flip", data.result)
      }
    }

    flip() {
      this.iframe.contentWindow.postMessage({ action: "flip" }, "*")
    }

    on(event, callback) {
      if (!this.listeners[event]) {
        this.listeners[event] = []
      }
      this.listeners[event].push(callback)
    }

    emit(event, data) {
      if (this.listeners[event]) {
        this.listeners[event].forEach((callback) => callback(data))
      }
    }
  }

  // Export to window
  window.CoinFlipper = CoinFlipper
})(window)
