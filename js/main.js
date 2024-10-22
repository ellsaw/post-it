import { postItFilter, postItStorageLength } from "./recieveData.js";


function postItObjectifyer(){
    let object = {};
    for(let i = 1; i <= postItStorageLength(); i++){
        object[`postIt${i}`] = JSON.parse(postItFilter()[`postIt${i}`]);
    }
    return object;
}

document.addEventListener("DOMContentLoaded", () =>{
    const main = document.getElementById("main");

    function HTMLApplyer(){
        const postItObject = postItObjectifyer();
        for(let i = 1; i <= postItStorageLength(); i++){
            main.insertAdjacentHTML("beforeend",
        `
        <article id="postit${i}" class="postIt postItColorYellow">
            <div class="postItHeader">
                <h2 class="postItTitle">${postItObject[`postIt${i}`].postItHeaderInput}</h2>
                <div class="deleteAndEdit">
                    <button class="postItEdit"><i class="bi bi-pen"></i></button>
                    <button class="postItDelete"><i class="bi bi-trash3"></i></button>
                </div>
            </div>
            <div class="postItBody">
                <p>${postItObject[`postIt${i}`].postItBodyInput}</p>
            </div>
        </article>
        `);
        }
    }
    HTMLApplyer();
})