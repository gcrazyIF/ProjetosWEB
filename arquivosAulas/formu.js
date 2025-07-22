const userForm = document.getElementById("user-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const tableBody = document.getElementById("user-list-body");


userForm.addEventListener("submit", function (event){
    //Desativar o funcionamento padrão do formulário
    event.preventDefault();


    //verificar se os dados foram preenchidos
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();


    if(name === "" || email === ""){
        alert("Por favor, preencha todos os campos");
        return;
    }


    //criar uma nova linha
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td> <button class="delete-btn">Excluir</button> </td>
    `
    tableBody.appendChild(newRow);
});

// Excluir linha da tabela
tableBody.addEventListener("click", function(event){
    if (event.target.classList.contains("delete-btn")){
        const rowToDelete = event.target.closest("tr");
        rowToDelete.remove();
    }
});