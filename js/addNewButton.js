document.addEventListener("DOMContentLoaded", () =>{
    const addPostItButton = document.querySelector(".addPostItButton");
    const postItFormContainer = document.querySelector(".postItFormContainer")
    const goBack = document.querySelector(".goBack")
    
    const openForm = () =>{
        postItFormContainer.classList.remove("hidden");
    }
    
    const manuallyCloseForm = () =>{
        postItFormContainer.classList.add("hidden");
    }
    
    addPostItButton.addEventListener("click", openForm)
    
    goBack.addEventListener("click", manuallyCloseForm)
})