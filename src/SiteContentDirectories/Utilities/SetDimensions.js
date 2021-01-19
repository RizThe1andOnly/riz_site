const DIV_HEIGTH_RATIO = 0.9;
const DIV_WIDTH_RATIO = 0.85;

export function setSlideDimensions(){
    let divHeight = window.innerHeight * DIV_HEIGTH_RATIO;
    let divWidth = window.innerWidth * DIV_WIDTH_RATIO;
    let leftMarginVal = (window.innerWidth - divWidth) * 0.5;
    let topMargin = (window.innerHeight - divHeight) * 0.5;

    let root = document.documentElement;
    root.style.setProperty("--divHeight",divHeight + "px");
    root.style.setProperty("--divWidth",divWidth + "px");
    root.style.setProperty("--leftMargin",leftMarginVal+"px");
    root.style.setProperty("--topMargin",topMargin+"px");
}


