var sazi = (function () {
    $('#sup').tab('show')
  });

var startkaishi = function () {
    dictate.startListening();
    setTimeout(function () {dictate.stopListening(); }, 3000);
    
    setTimeout(function () {
        if (tt.toString() == "hello."|| tt.toString() == "hello hello."|| tt.toString() == "hello hello hello."|| tt.toString() == "hello hello hello hello.") {
				alert("Hello there,XDDDDDDDDDDD");
			} else if (tt.toString() == "mhm." || tt.toString() == "mhm mhm."|| tt.toString() == "mhm mhm mhm."|| tt.toString() == "name."|| tt.toString() == "name name.") {
				alert("WOW your name is AIDEN!");
			} else if (tt.toString() == "right."|| tt.toString() == "right right."|| tt.toString() == "right right right."|| tt.toString() == "right right right right.") {
				alert("wow, let me show you something");
                sazi();
			} else {
                alert("Sorry bubby, cannot recognize your voice T_T");
            }
        }, 12000);
}
$(document).ready(function () {
    $("#actclick").click(startkaishi);
});
