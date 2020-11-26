'use strict';

class TableTemplate {
    static fillIn(id, dict, columnName) {
        let table = document.getElementById(id);
        let header = table.rows.item(0);
        let proc = new Cs142TemplateProcessor(header.innerHTML);
        header.innerHTML = proc.fillIn(dict);

        if (columnName) {
            for (let i = 0; i < header.cells.length; i++) {
                if (header.cells[i].innerHTML === columnName) {
                    for (let j = 1; j < table.rows.length; j++) {
                        let cell = table.rows[j].cells[i];
                        let proc = new Cs142TemplateProcessor(cell.innerHTML);
                        cell.innerHTML = proc.fillIn(dict);
                    }
                }
            }
        } else {
            for (let i = 1; i < table.rows.length; i++) {
                for (let j = 0; j < table.rows[0].cells.length; j++) {
                    let cell = table.rows[i].cells[j];
                    let proc = new Cs142TemplateProcessor(cell.innerHTML);
                    cell.innerHTML = proc.fillIn(dict);
                }
            }
        }

        if (table.style.visibility === "hidden") {
            table.style.visibility = "visible";
        }
    }
}