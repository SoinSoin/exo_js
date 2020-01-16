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


// var Telecommande = {
//     elTD: {
//         el: [],
//         color: "",
//         counter: 0
//     },
//     elTdDOM: document.querySelectorAll("td"),



//     // set color at init
//     init: function (p_color_txt) {
//         this.setColor(p_color_txt)
//     },

//     // set color
//     setColor(_color) {
//         this.elTD.color = _color;
//     },
//     // getColorTxt
//     getColorTxt: function () {
//         return this.elTD
//     },
//     // add text id
//     addId: function () {
//         var self = this
//         this.getTD(document.getElementById("tableau"), [], 0).forEach(function (elTD) {
//             elTD.el.style.color = self.elTD.color
//             elTD.el.innerText = elTD.el.id
//             self.elTD.el.push(elTD) ²
//         })
//         this.elTD.counter = this.elTD.el.length
//     },

//     delAleatoire: function () {
//         this.elDOM()
//     },
//     telClick: function (p_id_click) {
//         if (p_id_click === 1) {
//             this.addId();
//         } if (p_id_click === 2) {
//             this.delAleatoire()
//         }
//     },

//     getTD(elTab, arrEl, place) {
//         var self = this;
//         elTab.childNodes.forEach(function (eltd) {
//             if (eltd.tagName === "TD") {
//                 arrEl.push({ el: eltd })
//             } else {
//                 self.getTD(eltd, arrEl, place)
//             }
//         })
//         for (var index = 0; index < arrEl.length; index++) {
//             arrEl[index].place = index

//         }
//         return arrEl.reverse()
//     }

// }




var Telecommande = {
    tableau: {
        tab: {},
        elTD: []
    },
    deletes: 0,
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
    },

    delAleatoire: function () {
        // cons
        var arr = []
        for (var i = 0; this.tableau.elTD.length > i; i++) {
            arr.push(i)
        }

        for (var j = 0; (this.tableau.elTD.length/2) > j; j++) {
            var alea = Math.floor(Math.random() * Math.floor((this.tableau.elTD.length/2)));
            this.tableau.elTD[arr[alea]].innerText = "";
            this.tableau.elTD.splice(arr[alea], 1);
            arr.splice(alea, 1);
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