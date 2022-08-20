const api = "https://digimon-api.vercel.app/api/digimon";

async function getData(){
    try{
        const response = await fetch (api)
        const data = await response.json()
        printData(data)

        const v = Object.entries(data).map(m => m)
        console.log(v)
    }
    catch(e){
        console.log("Error:", e.message);
    }  
}


function  printData(data){
    console.log(data);
    const header = document.querySelector("#header")
    const content = document.querySelector("#content")

    header.innerHTML +=
    `<select class="form-control" onchange="getChar(this.value)">
        <option>Please choose a character</<option>
        ${data.map(character => `<option>${character.name}</<option>`)} 
    </select>
    `

    console.log(header);
}

async function getChar(name){
    if (name != "Please choose a character"){
    const response = await fetch(`${api}?name=${name}`)
    const data = await response.json()
    console.log(data [0].name);
    // console.log(V);

    content.innerHTML= `<h2>${data [0].name}</h2>
    <h4>(${data [0].level})</h4>
    <img src ="${data [0].img}" width="250">
    `;
    }
}

getChar();
getData();