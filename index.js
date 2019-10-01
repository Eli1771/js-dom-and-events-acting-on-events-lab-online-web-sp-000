function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()



function retrieveEmployeeInformation() {
  return $('input:first-child').value;
}

function addNewElementAsLi() {
  
}

function addNewLiOnClick() {
  
}

function clearEmployeeListOnLinkClick() {
  
}