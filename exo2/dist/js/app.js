window.onload = init;

function init() {
    document.getElementById("send").onclick = getForm
}
function setArrForm() {
    var DOMForms = document.querySelectorAll("FORM");
    var objForm = {}
    var arrForm = []
    DOMForms.forEach(function (elForm, i) {
        objForm.el = elForm
        objForm.id = i
        arrForm.push(objForm)
    });
    return arrForm
}
function getForm() {
    setArrForm().forEach(function (elForm) {
        verifyInput(getInputForm(elForm.el, []))
    })
}
function getInputForm(forms, arrInputForm) {
    forms.childNodes.forEach(function (elChildForm) {
        if (elChildForm.tagName === "INPUT" || elChildForm.tagName === "TEXTAREA") {
            arrInputForm.push({ el: elChildForm, name: elChildForm.name })
        }
        if (forms.childNodes.length > 0) {
            getInputForm(elChildForm, arrInputForm)
        }
    })
    return arrInputForm
}
function verifyInput(arrInput) {
    var NameOfTel = "tel".trim().toUpperCase();
    var NameOfMail = "mail".trim().toUpperCase();
    arrInput.forEach(function (elInput) {
        console.log(elInput)
        if (elInput.name.trim().toUpperCase() == NameOfMail) elInput.isValid = (isEmail(elInput.el.value.trim()));
        else if  (elInput.name.trim().toUpperCase() == NameOfTel) elInput.isValid = isNumerique(elInput.el.value.trim());
        else elInput.isValid = isAlpha(elInput.el.value.trim());
    })
    isSuccess(arrInput)
}

function isSuccess(elInputVerify) {
    var isSuccess = true;
    elInputVerify.forEach(function (elInput) {
        if (elInput.isValid) {
            elInput.el.style.border = "1px solid green"
        } else {
            elInput.el.style.border = "1px solid red"
            isSuccess = false
        }
    })
     if(isSuccess){
        toSend(elInputVerify)
     }else{
        document.getElementById("value").innerHTML =""
     }
}


function toSend(els){
    els.forEach(function(el){
        var p = document.createElement("p")
        p.innerText = el.el.value
        document.getElementById("value").appendChild(p)
    })
}


function isAlpha(val) {
    var ok = false;
    if (val != '') {
        var regex = /^[a-zA-Z\-]*$/;
        ok = regex.test(val);

    }
    return ok;
}
function isNumerique(val) {
    var ok = false;
    if (val != '') {
        var regex = /^[0-9\.]*$/;
        ok = regex.test(val);
    }
    return ok;
}
function isEmail(val) {
    var ok = false;
    if (val != '') {
        var regex = /^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/i;
        ok = regex.test(val);
    }
    return ok;
}