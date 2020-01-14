window.onload = function () {
    this.clickBtn(this.childBtn())
};
function childBtn() {
    var arrBtn = [];
    var btn = document.querySelectorAll(".btn");
    btn.forEach(function (element, i) {
        arrBtn.push(element)
    });
    return arrBtn
}
function clickBtn(childBtn) {
    childBtn.forEach(function (el, i) {
        var toggle = { isClick: false }
        if (i === 0) el.onclick = function () {
            toggle.isClick = !toggle.isClick ? true : false;
            toggleColor(el.parentNode, toggle.isClick, "red")

        }
        if (i === 1) el.onclick = function () {
            toggle.isClick = !toggle.isClick ? true : false;
            toggleColor(el.parentNode.parentNode, toggle.isClick, "red")
        }
    })
}
function toggleColor(element, isClick, color) {
    if (isClick) element.style.backgroundColor = color;
    else element.style.backgroundColor = "";
}