const icons = document.querySelectorAll(".icons i");

icons.forEach((icon) => {
    icon.addEventListener("mouseover", mouseOver);
})

function mouseOver(event){
    const tooltipBox = createTooltip(this);
   
    mouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', mouseMove);

    mouseLeave.tooltipBox = tooltipBox;
    mouseLeave.icon = this;
    this.addEventListener('mouseleave', mouseLeave)
}
 
const mouseLeave = {
    handleEvent(){
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', onMouseLeave);
        this.element.removeEventListener('mousemove', onMouseMove); 
    }
}

const mouseMove = {
    handleEvent(event){
        this.tooltipBox.style.top = event.pageY + 20  + 'px';
        this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
}

function createTooltip(icon){
    tooltipBox = document.createElement("div");
    const txt = icon.getAttribute("aria-label");
    tooltipBox.classList.add("active");
    tooltipBox.innerHTML = txt;   
    document.body.appendChild(tooltipBox)
    return tooltipBox;
  }










