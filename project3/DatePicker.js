"use strict";

class DatePicker {
	constructor(id, callback) {
		this.id = id;
		this.callback = callback;
	}

	render(date) {
		let calendar = document.getElementById(this.id);
		let table = document.createElement("table");

		calendar.appendChild(table);

		let header = table.createTHead();
		let headerRow = header.insertRow(0);

		let left = headerRow.insertCell(0);
		left.innerHTML = "<";
		left.setAttribute("class", "left");

		let month = headerRow.insertCell(1);
		let months = ["January", "February","March", "April","May", "June", "July", "August", "September",
			"October","November","December"];
		month.setAttribute("class", "Month");
		month.innerHTML = months[date.getMonth()] + "   " + date.getFullYear();
		month.colSpan = 5;

		let right = headerRow.insertCell(2);
		right.innerHTML = ">";
		right.setAttribute("class", "right");

		left.addEventListener("click", () => {
			table.remove();
			date.setMonth(date.getMonth() - 1);
			this.render(date);
		});

		right.addEventListener("click", () => {
			table.remove();
			date.setMonth(date.getMonth() + 1);
			this.render(date);
		});

		let weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
		let rowWeek = header.insertRow(1);
		for (let i = 0; i < 7; ++ i) {
			let cell = rowWeek.insertCell(i);
			cell.innerHTML = weekdays[i];
		}

		let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
		let currentDate = new Date(firstDay.getTime());
		currentDate.setDate(-firstDay.getDay() + 1);
		let index = 2;

		while (true) {
			let row = table.insertRow(index);
			index = index + 1;

			for (let i = 0; i < 7; ++ i) {
				let cell = row.insertCell(i);
				cell.innerHTML = currentDate.getDate();

				if (currentDate.getMonth() === date.getMonth()) {
					cell.setAttribute("class", "CurrentMonth");
					let x = {
						month: currentDate.getMonth() + 1,
						day: cell.innerHTML,
						year: currentDate.getFullYear()
					};
					cell.addEventListener("click", () => {
						document.getElementByClassName("CurrentMonth").style.background="#348ceb";
						// table.remove();
						date.setDate(x.day);
						// this.render(date);
						this.callback(this.id, x);
						cell.style.background = "#348ceb";
						cell.style.color = "white";
					});
					if (currentDate.getDate() === date.getDate()) {
						cell.style.background = "#348ceb";
						cell.style.color = "white";
					}

				} else {
					cell.setAttribute("class", "notMonth");
				}

				currentDate.setDate(currentDate.getDate() + 1);
			}

			if (currentDate.getMonth() !== date.getMonth()) {
				break;
			}
		}
	}
}