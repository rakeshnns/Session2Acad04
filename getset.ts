//Onclick Function ..
let allowedage = 18;
let rresult = 0;
function Onclickk(){
    //Input value from HTML page  
    let name = (<HTMLInputElement>document.getElementById("Ename")).value;
    let age = parseInt((<HTMLInputElement>document.getElementById("Eage")).value); 
// Class and constructor     
class Suxbmit{
    //Constructor
    private _access: number;
    //Get
    get authoriser(): number {
        
           if (this._access == 1){
               alert(`Hi ${name} as your ${age} years aged your are welcome to this site.`)
               return this._access;
           }else{
            alert(`Hi ${name} as your ${age} years aged only,sorry we cannot grant you access. `)
            return this._access;
           }
        }
    //Set
    set authoriser(AAge: number) {
        //User Age checking writing i.e setting.
        if(AAge >= allowedage){
        this._access = 1;
 
        }else{
            this._access = 0

        }

    }

}

//Creating Instance of Submit.
let Ssubmit = new Suxbmit();
Ssubmit.authoriser = age;       //Sets
let result = Ssubmit.authoriser;// Gets
//
if (result == 1){

    let msg = `Welcome ${name}`
//Result display in HTMl page.
let el:HTMLElement = document.getElementById('Result');
el.innerHTML = msg;
}
}
