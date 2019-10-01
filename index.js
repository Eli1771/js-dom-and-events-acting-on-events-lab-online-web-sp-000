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
  let list = document.querySelector('ul.employee-list');
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  
  list.appendChild(li);
}

function addNewLiOnClick() {
  let input = document.querySelector('input');
  
  document.addEventListener('click', function() {
    addNewElementAsLi();
    input.value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  let list = document.querySelector('ul.employee-list');
  let clear = document.querySelector('a');
  
  clear.addEventListener('click', function() {
    for (let i = 0; i < list.children.length; i++) {
      list.children.remove();
    }
  });
}