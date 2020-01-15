window.onload = init;

function init() {
    document.getElementById("send").onclick = function () {
        var newContact = Object.create(contact)
        newContact.setForm("#contact")
        console.log(JSON.stringify(newContact.getData()))
    }
}

var contact = {

    data: {},

    setData: function (_data) {
        this.data = _data
    },
    getData: function () {
        return this.data;
    },

    // set Element Form
    setForm: function (elForm) {
        this.verifyInput(this.getInputForm(document.querySelector(elForm), []))
    },

    // verify text type of value input
    verifyInput: function (arrInput) {
        var NameOfTel = "tel".trim().toUpperCase();
        var NameOfMail = "mail".trim().toUpperCase();
        arrInput.forEach(function (elInput) {
            if (elInput.name.trim().toUpperCase() == NameOfMail) elInput.isValid = this.contact.isEmail(elInput.el.value.trim());
            else if (elInput.name.trim().toUpperCase() == NameOfTel) elInput.isValid = this.contact.isNumerique(elInput.el.value.trim());
            else elInput.isValid = this.contact.isAlpha(elInput.el.value.trim());
        })
        this.isSuccess(arrInput)
    },

    // return all input text content in form
    getInputForm: function (forms, arrInputForm) {
        forms.childNodes.forEach(function (elChildForm) {
            if (elChildForm.tagName === "INPUT" && elChildForm.type!=='button' || elChildForm.tagName === "TEXTAREA") {
                arrInputForm.push({ el: elChildForm, name: elChildForm.name })
            }
            if (forms.childNodes.length > 0) {
                this.contact.getInputForm(elChildForm, arrInputForm);
            }
        })
        return arrInputForm
    },

    // is success is ready to go
    isSuccess: function (elInputVerify) {
        var isSuccess = true;
        elInputVerify.forEach(function (elInput) {
            if (elInput.isValid) {
                elInput.el.style.border = "1px solid green"
            } else {
                elInput.el.style.border = "1px solid red"
                isSuccess = false
            }
        })
        if (isSuccess) {
            this.acceptData(elInputVerify)

        } else {
            document.getElementById("value").innerHTML = ""
        }
    },

    acceptData: function (arrValue) {
        var objValue = {}
        arrValue.forEach(element => {
            objValue[element.name] = element.el.value
        });

        this.setData(objValue)
    },

    // verify if alpha
    isAlpha: function (val) {
        var ok = false;
        if (val != '') {
            var regex = /^[a-zA-Z\-]*$/;
            ok = regex.test(val);
        }
        return ok;
    },
    isNumerique: function (val) {
        var ok = false;
        if (val != '') {
            var regex = /^[0-9\.]*$/;
            ok = regex.test(val);
        }
        return ok;
    },
    isEmail: function (val) {
        var ok = false;
        if (val != '') {
            var regex = /^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/i;
            ok = regex.test(val);
        }
        return ok;
    },
}

    // nom: "",
    // prenom: "",
    // tel: "",
    // mail: "",

    // // setter
    // setNom: function (_nom) {
    //     this.nom = _nom;
    // },
    // setPrenom: function (_prenom) {
    //     this.prenom = _prenom;
    // },
    // setTel: function (_tel) {
    //     this.tel = _tel;
    // },
    // setMail: function (_mail) {
    //     this.mail = _mail;
    // },
    // // getter
    // getNom: function (_nom) {
    //     return this.nom
    // },
    // getPrenom: function (_prenom) {
    //     return this.prenom
    // },
    // getTel: function (_tel) {
    //     return this.tel
    // },
    // getMail: function (_mail) {
    //     return this.mail
    // },