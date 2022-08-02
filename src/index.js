const baseDom = document.createElement('div')
baseDom.id = "akashi-chrome-extension-history-table"
document.querySelector(".c-column__wrapper").append(baseDom)

function updateTable() {
  const dt = new Date()
  const yyyy_mm_dd = (dt.getFullYear() + '-' + ('00' + (dt.getMonth()+1)).slice(-2) + '-' + ('00' + dt.getDate()).slice(-2))
  const html = $.get(
    "https://atnd.ak4.jp/attendance/get_punches_list?_=1659434245152&date=" + yyyy_mm_dd,
    function(res){
      const html = res.replace('$("#punches_list_table").html("', '').replace('");', '').replaceAll("\\\\", '\\').replaceAll("\\n", '').replaceAll("\\", '').replaceAll("showTimeZoneTooltip();", '')
      baseDom.innerHTML = html
    }
  );
}

document.querySelectorAll(".c-circle-button").forEach(function(elem, i) {
  elem.addEventListener("click", function() {
    setTimeout(updateTable, 500);
  }, false);
})
updateTable();