function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()



function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let list = document.querySelector('.employee-list');
}

function addNewLiOnClick() {
  
}

function clearEmployeeListOnLinkClick() {
  
}