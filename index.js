const display=document.getElementById("display");
function appendtodisplay(input){
    display.value+=input;
}
function cleared(){
    display.value="";
    window.alert("ARE U SURE U GONNA CLEAR");

}
function calculate(){
    try{    display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
    finally{
        window.alert("ARE U FINESHED ENTERING");
    }



}