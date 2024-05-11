const Body = document.querySelector("body");


Body.addEventListener("mousemove",(x)=>{
const PositionX = x.offsetX;
const PositionY = x.offsetY;
const RandomSize = Math.random() * 150;
const ElSpan = document.createElement("span");
Body.appendChild(ElSpan);
ElSpan.style.left = PositionX + "px";
ElSpan.style.top = PositionY + "px";
ElSpan.style.width = RandomSize + "px";
ElSpan.style.height = RandomSize + "px"
setTimeout(() => {
  ElSpan.remove();
}, 3000);
})