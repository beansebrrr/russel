const horizontalScroller = document.querySelector("ul.horizontal-scroller")
const cloneCard = () => horizontalScroller.querySelector("li").cloneNode(true)

for (let i = 0; i < 8; i++) {
  horizontalScroller.appendChild(cloneCard())
}