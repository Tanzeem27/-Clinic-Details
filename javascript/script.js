let data = [];
const clinic1_Data = {
    name: "Fortis Hospital",
    address: "154, 9, Bannerghatta Main Rd, Opposite IIM, Sahyadri Layout, Panduranga Nagar, Bengaluru, Karnataka 560076",
    specialist: "Orthopedic",
    list_if_docs: ["Dr.Musharraf", "Dr.Touhid"]
}

const clinic2_Data = {
    name: "Vcare Hospital",
    address: " No.29, 1st Main Rd, A 1st, Adi Kabir Ashram Main Rd, RT Nagar, Bengaluru, Karnataka 560032",
    specialist: "Cardiologist",
    list_if_docs: ["Dr.Pradeep", "Dr.Maria"]
}

const clinic3_Data = {
    name: "Manipal Hospital",
    address: "98, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560017",
    specialist: "Cardiologist",
    list_if_docs: ["Dr.Arshad", "Dr.Aamir"]
}

function signup() {
    var username = getid("username").value;
    var password = getid("password").value;
    if (username && password) {
        var details = {
            id: Math.floor(Math.random() * 1000 + 1),
            name: username,
            password: password,
            dateSignedIn: Date().substr(0, 15)
        }
        data.push(details);
        localStorage.setItem("data", localStorage.getItem("data") === null ? "[" + JSON.stringify(details) + "]" : localStorage.getItem("data").slice(0, localStorage.getItem("data").length - 1) + "," + JSON.stringify(details) + "]");
        getid("error").classList.add("hide");
        getid("success").classList.toggle("hide");
    } else {
        getid("success").classList.add("hide");
        getid("error").classList.toggle("hide");
    }
}

function show(source) {
    getid("modal").classList.remove("hide");
    var name = document.querySelector(".name");
    var address = document.querySelector(".address");
    var specialist = document.querySelector(".specialist");
    var doc1 = getid("doc1");
    var doc2 = getid("doc2");
    switch (source) {
        case "modal1":
            name.innerHTML = clinic1_Data.name;
            address.innerHTML = clinic1_Data.address;
            specialist.innerHTML = clinic1_Data.specialist;
            doc1.innerHTML = clinic1_Data.list_if_docs[0];
            doc2.innerHTML = clinic1_Data.list_if_docs[1];
            break;
        case "modal2":
            name.innerHTML = clinic2_Data.name;
            address.innerHTML = clinic2_Data.address;
            specialist.innerHTML = clinic2_Data.specialist;
            doc1.innerHTML = clinic2_Data.list_if_docs[0];
            doc2.innerHTML = clinic2_Data.list_if_docs[1];
            break;
        case "modal3":
            name.innerHTML = clinic3_Data.name;
            address.innerHTML = clinic3_Data.address;
            specialist.innerHTML = clinic3_Data.specialist;
            doc1.innerHTML = clinic3_Data.list_if_docs[0];
            doc2.innerHTML = clinic3_Data.list_if_docs[1];
            break;
        default:
            console.log("default");
            break
    }
}

function removeModal() {
    getid("modal").classList.add("hide");
}

function admin() {
    // console.log(JSON.parse(localStorage.getItem("data")));
    let list = JSON.parse(localStorage.getItem("data"));
    list.forEach(user => {
        var tr = document.createElement("tr");
        var tbody = getid("tbody");
        tr.classList.add("row")
        var name = document.createElement("td");
        var date = document.createElement("td");
        name.classList.add("td");
        date.classList.add("td");
        name.innerHTML = user.name;
        date.innerHTML = user.dateSignedIn;
        tr.appendChild(name);
        tr.appendChild(date);
        tbody.appendChild(tr);
        getid("table").appendChild(tbody);
    });
}

function loadHome(){
    getid("clinic_1").innerHTML = clinic1_Data.name
    getid("clinic_2").innerHTML = clinic2_Data.name
    getid("clinic_3").innerHTML = clinic3_Data.name
}

function getid(id) {
    return document.getElementById(id);
}