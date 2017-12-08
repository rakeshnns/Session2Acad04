//Onclick Function ..
var allowedage = 18;
var rresult = 0;
function Onclickk() {
    //Input value from HTML page  
    var name = document.getElementById("Ename").value;
    var age = parseInt(document.getElementById("Eage").value);
    // Class and constructor     
    var Suxbmit = /** @class */ (function () {
        function Suxbmit() {
        }
        Object.defineProperty(Suxbmit.prototype, "authoriser", {
            //Get
            get: function () {
                if (this._access == 1) {
                    alert("Hi " + name + " as your " + age + " years aged your are welcome to this site.");
                    return this._access;
                }
                else {
                    alert("Hi " + name + " as your " + age + " years aged only,sorry we cannot grant you access. ");
                    return this._access;
                }
            },
            //Set
            set: function (AAge) {
                //User Age checking writing i.e setting.
                if (AAge >= allowedage) {
                    this._access = 1;
                }
                else {
                    this._access = 0;
                }
            },
            enumerable: true,
            configurable: true
        });
        return Suxbmit;
    }());
    //Creating Instance of Submit.
    var Ssubmit = new Suxbmit();
    Ssubmit.authoriser = age; //Sets
    var result = Ssubmit.authoriser; // Gets
    //
    if (result == 1) {
        var msg = "Welcome " + name;
        //Result display in HTMl page.
        var el = document.getElementById('Result');
        el.innerHTML = msg;
    }
}
