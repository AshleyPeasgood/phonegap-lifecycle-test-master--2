var paused_count =0;
var resumed_count = 0;
var launched_count = 0;





    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
        
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }
{
var itemone = "pen";
var valueone = "blue";

    window.localStorage.setItem (itemone, valueone);
var valueone= window.localStorage.getItem(itemone);

    window.alert(itemone + valueone);
}
{"Freddo":[
    {"Calories":"95kcal"},
    {"Sugars":"10g"},
    {"Fat":"5.5g"},
    {"Saturates":"3.3g"},
    {"Salt":"0.04g"}
Console.log(
    Freddo.Calories + "also has high fats of" + Freddo.fat);
]}