const form = document.querySelector("form");
const formContainer = document.querySelector(".form-container")
const card = document.querySelector(".card");
const inputs = document.getElementsByTagName("input");

/*
Basic :
 form ke submit hone pe ek event chalega
        event form ka data local stprage pe sava karega
        aur data se ek card banake show karega,
        form ka display 'close' class lagake none kar dega.
    
*/

window.addEventListener("load", (e)=>{
    if(localStorage.getItem("data")){
        displayCard(JSON.parse(localStorage.getItem("data")));
    }
})

form.addEventListener("submit", (e) => {
//   e.preventDefault();
  let data = {
    "First Name : ": inputs[0].value,
    "Last Name : ": inputs[1].value,
    "Coutry : ": inputs[2].value,
    "Phone no. : ": inputs[3].value,
    "State : ": inputs[4].value,
    "City : ": inputs[5].value,
    "Village : ": inputs[6].value,
  };

  localStorage.setItem("data", JSON.stringify(data));
  displayCard(data);
});

function displayCard(obj) {
    formContainer.classList.add("close");
    

 const fragment = document.createDocumentFragment();
  for (let key in obj) {
    const detail = document.createElement("p");
    detail.innerText = key + obj[key];
    fragment.append(detail);
  }

  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.setAttribute("id", "edit");
  editButton.addEventListener("click", (e)=>{
    formContainer.classList.remove("close");
    card.classList.add("close");
  })

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete Card";
  deleteButton.setAttribute("id", "delete")
  deleteButton.addEventListener("click", (e)=>{
    formContainer.classList.remove("close");
    localStorage.removeItem("data");
    card.classList.add("close");
  })

  const buttonDiv = document.createElement("div");
  buttonDiv.append(editButton, deleteButton)
  buttonDiv.classList.add("button-div")

  card.append(fragment,buttonDiv);
}
