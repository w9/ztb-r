var ZTB = ZTB || {};

ZTB.ZTB = function(el_) {
  /**
   * Borrowed from mustache.js
   */
  var _escape_html = function(string) {
    let entity_map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': '&quot;', "'": '&#39;', "/": '&#x2F;' };
    return String(string).replace(/[&<>"'\/]/g, s => entity_map[s]);
  }

  //var _table_display = document.createElement('pre');
  //_table_display.classList.add('table-display');
  //el_.appendChild(_table_display);
  
  el_.classList.add('table-display');
  var _render = function(data) {
    el_.innerHTML = '<pre>' + _escape_html(data.join('\n')) + '</pre>';
  }

  this.render = _render;
  
  //var _container = el_;

  //var _render = function(data_) {
  //  let content = '';
  //  content += '<table>';

  //  let colnames = Object.keys(data_);

  //  content += '<tr>';
  //  colnames.map(k => content += '<th>' + _escape_html(k) + '</th>');
  //  content += '</tr>';

  //  let flag = false;
  //  do {
  //    flag = false;
  //    let row_content = '<tr>';
  //    for (let c in data_) {
  //      let value = data_[c].shift();
  //      if (typeof value === 'undefined') {
  //        row_content += '<td>' + '&lt;NA&gt;' + '</td>';
  //      } else {
  //        flag = true;
  //        row_content += '<td>' + _escape_html(value) + '</td>';
  //      }
  //    }
  //    row_content += '</tr>';
  //    if (flag) content += row_content;
  //  } while (flag);
  //  
  //  content += '<table>';

  //  _container.innerHTML = content;
  //}

  //this.render = _render;
}

