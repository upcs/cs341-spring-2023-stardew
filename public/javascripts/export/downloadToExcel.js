function downloadToExcel() {
    document.getElementById("download").addEventListener('click', function() {
    var table2excel = new Table2Excel();
    var str = document.getElementById("data").getAttribute("value");
	var str2 = document.getElementById("datatwo").getAttribute("value");

    table2excel.export(document.querySelectorAll("#levelandsection", "cool table"));
    });
}