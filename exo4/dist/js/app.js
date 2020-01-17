window.onload = init;

function init() {
    var maTC = Object.create(Telecommande)
    maTC.init('#tableau')
    // console.log()


    // return color 
    var radio = document.querySelectorAll("input[type='radio']")
    radio.forEach(function (elInpRad) {
        if (elInpRad.defaultChecked) maTC.setColor(elInpRad.value)
        elInpRad.onclick = function () {
            maTC.setColor(elInpRad.value)
        }
    })

    // set a data in html to identify click
    var btn = document.querySelectorAll("button, input[type='button']")
    btn.forEach(function (elBtn, i) {
        elBtn.dataset.clickTel = i + 1;
        elBtn.onclick = function () {
            maTC.telClick(this.dataset.clickTel)
        }
    })

    // delete maTC.getColorTxt()[0];
}
var Telecommande = {
    tableau: {
        tab: {},
        elTD: []
    },
    color: '',

    init: function (_name_tab) {
        this.setTableau(document.querySelector(_name_tab))
        this.getTD(this.getTableau(), [])
    },
    setTableau: function (_tab) {
        this.tableau.tab = _tab;

    },
    getTableau: function () {
        return this.tableau.tab

    },
    setColor: function (_color) {
        this.color = _color
    },

    getColor: function () {
        return this.color
    },

    telClick: function (p_id_click) {
        if (p_id_click == 1) {
            this.addId();
        } if (p_id_click == 2) {
            this.delAleatoire()
        }
        if (p_id_click == 3) {
            this.firstCase()
        }
        if (p_id_click == 4) {
            this.allCase()
        }
        console.log(this.tableau.elTD)
    },

    delAleatoire: function () {
        var halfTable = this.tableau.elTD.length / 2
        for (var j = 0; halfTable > j; j++) {
            var alea = Math.floor(Math.random() * Math.round(this.tableau.elTD.length));
            this.tableau.elTD[alea].innerText = "";
            this.tableau.elTD.splice(alea, 1);
        }
    },

    firstCase: function () {
        this.tableau.elTD = []
        this.init('#tableau');
        for (var i = 0; this.tableau.elTD.length > i; i++) {
            if (this.tableau.elTD[i].innerText == "") {
                console.log("pass")
                this.tableau.elTD[i].style.color = this.getColor()
                this.tableau.elTD[i].innerText = this.tableau.elTD[i].id;
                i = this.tableau.elTD.length
            }
        }
    },
    allCase: function () {
        this.tableau.elTD = []
        this.init('#tableau');
        for (var i = 0; this.tableau.elTD.length > i; i++) {
            if (this.tableau.elTD[i].innerText == "") {
                console.log("pass")
                this.tableau.elTD[i].style.color = this.getColor()
                this.tableau.elTD[i].innerText = this.tableau.elTD[i].id;
            }
        }
    },

    addId: function () {
        this.tableau.elTD = []
        this.init('#tableau');
        for (var i = 0; this.tableau.elTD.length > i; i++) {
            this.tableau.elTD[i].style.color = this.getColor()
            this.tableau.elTD[i].innerText = this.tableau.elTD[i].id
        }
    },

    getTD(elTab, arrEl) {
        for (var i = (elTab.childNodes.length - 1); i >= 0; i--) {
            if (elTab.childNodes[i].tagName === "TD") {
                this.tableau.elTD.push(elTab.childNodes[-i + (elTab.childNodes.length - 1)])
            } else {
                this.getTD(elTab.childNodes[i], arrEl)
            }
        }
    }
}