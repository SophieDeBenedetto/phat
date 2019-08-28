// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

import "phoenix_html"

import LiveSocket from "phoenix_live_view"

const targetNode = document.getElementsByClassName("messages")[0]
document.addEventListener("DOMContentLoaded", function() {
  targetNode.scrollTop = targetNode.scrollHeight
});

let Hooks = {}
Hooks.NewChatMessage = {
  updated(){
    this.el.scrollTop = this.el.scrollHeight
  }
}

let liveSocket = new LiveSocket("/live", {hooks: Hooks})
liveSocket.connect()
