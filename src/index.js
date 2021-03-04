const baseDom = document.createElement('div')
baseDom.id = "akashi-chrome-extension-history-table"
document.querySelector(".c-column__wrapper").append(baseDom)

async function getHtml(path) {
  const res = await fetch(path);
  const html = await res.text();
  return html;
}

function updateTable() {
  const dt = new Date()
  const yyyy_mm_dd = (dt.getFullYear() + '-' + ('00' + (dt.getMonth()+1)).slice(-2) + '-' + ('00' + dt.getDate()).slice(-2))
  getHtml("https://atnd.ak4.jp/requests/new?date=" + yyyy_mm_dd)
    .then(html => {
      let parser = new DOMParser()
      const dom = parser.parseFromString(html, "text/html")
      let tableDom = dom.querySelector(".p-application-modal__table--blue");
      if (tableDom == null) {
        tableDom = dom.querySelector(".p-application-modal__table--small");
        tableDom.querySelectorAll(".p-application-modal__table__delete").forEach(function(elem, i) {
          elem.remove();
        })
      }
      baseDom.replaceChildren(tableDom);
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