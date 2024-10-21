function storeData(data){
    localStorage.setItem(`postIt${localStorage.length+1}`, JSON.stringify(data));
    refreshPage();
}

function refreshPage(){
    location.reload();
};

document.addEventListener("DOMContentLoaded", () =>{
    const form = document.querySelector(".addPostItForm");
    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData);
        storeData(userData);
    })
})

