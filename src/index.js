const baseDom = document.createElement('div')
baseDom.id = "akashi-chrome-extension-history-table"
document.querySelector(".c-column__wrapper").append(baseDom)

async function getHtml(path) {
  const res = await fetch(path, {headers: {
    "x-requested-with": "XMLHttpRequest",
  }});
  const html = await res.text();
  return html;
}

function updateTable() {
  const dt = new Date()
  const yyyy_mm_dd = (dt.getFullYear() + '-' + ('00' + (dt.getMonth()+1)).slice(-2) + '-' + ('00' + dt.getDate()).slice(-2))
  getHtml("https://atnd.ak4.jp/attendance/get_punches_list?date=" + yyyy_mm_dd)
    .then(res => {
      const table = res.replace('$("#punches_list_table").html("', '').replace('");', '').replaceAll("\\\\", '\\').replaceAll("\\n", '').replaceAll("\\", '').replaceAll("showTimeZoneTooltip();", '')
      baseDom.innerHTML = table
    })
    .catch(err => {
      console.log(err);
    })
}

document.querySelectorAll(".c-circle-button").forEach(function(elem, i) {
  elem.addEventListener("click", function() {
    setTimeout(updateTable, 500);
  }, false);
})
updateTable();