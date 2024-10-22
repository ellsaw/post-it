function storeData(data){
    const length = postItStorageLength();
    if(length){
        localStorage.setItem(`postIt${length + 1}`, JSON.stringify(data));
    }else{
        localStorage.setItem(`postIt1`, JSON.stringify(data));
    }
    refreshPage();
}

function refreshPage(){
    location.reload();
};

export function postItStorageLength(){
    return Object.keys(postItFilter()).length;
}

export function postItFilter(){
    return Object.fromEntries(
        Object.entries(localStorage).filter(([key]) => key.startsWith("postIt"))
    )
}

document.addEventListener("DOMContentLoaded", () =>{
    const form = document.querySelector(".addPostItForm");
    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData);
        storeData(userData);
    })
})

