// task 1

fetch("https://reqres.in/api/unknown", {
    method: "GET"
})
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        getData(data);
    });

let ul = document.querySelector(".html_ul");

function getData(data) {
    data.data.forEach((element, index) => {
        let li = document.createElement("li");
        li.textContent = `${element.name} - ${element.color}`;
        ul.appendChild(li);
    })
};

// task 2

let http = new XMLHttpRequest();

http.open("GET", "https://reqres.in/api/users?page=2");

http.send();

http.onload = function (response) {
    let data = JSON.parse(response.target.response);
    renderData(data);
};

let ul2 = document.querySelector(".html_ul2");

function renderData(data) {
    data.data.forEach((element, index) => {
        let li2 = document.createElement("li");
        li2.textContent = `${data.data[index].first_name} - ${data.data[index].last_name} - ${data.data[index].avatar}`;
        let img = data.data[index].avatar;
        ul2.appendChild(li2);
    });
};










