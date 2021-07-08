const $ulElement = document.querySelector('ul');


$ulElement.addEventListener("click",(e)=>{
    const $target = e.target;
    if($target.classList.contains('close')){
        const $parentTarget = $target.parentElement;
        $parentTarget.style.display = "none";
        console.dir($parentTarget)
        const deleteItem = $parentTarget.childNodes[1].innerText;
        deleteTodoList('todoList', deleteItem);
    }
    $target.classList.toggle('checked');
})

function newElement() {
    const inputValue = document.getElementById("myInput") .value;
    const $liElement = `
        <li>
            <span>${inputValue}</span>
            <span class="close">&#215;</span>
        </li>
    `

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $ulElement.insertAdjacentHTML('beforeend', $liElement);
        addTodoList('todoList', inputValue)
    }
    document.getElementById("myInput").value = "";
}


// 두번째 실습

//로컬 스토리지 확인 - 데이터 있으면 for문 돌려서 li 객체들 만들어주기
function init() {
    let todoList = getTodoList('todoList');
    for(let i=0; i<todoList.length; i++){
        $liElement = `
            <li>
                <span>${todoList[i]}</span>
                <span class="close">&#215;</span>
            </li>
        `
        $ulElement.insertAdjacentHTML('beforeend', $liElement);
    }
}

//로컬 스토리지에 key 값을 통해 value 리턴햊는 함수
//getItem 함tn
function getTodoList(key) {
    return localStorage.getItem(key) ? localStorage.getItem(key).split(',') : [];
}
//return 값은 추가된 새 배열
function addTodoList(key, value) {
    const todoList = getTodoList(key)
    return localStorage.setItem(key,[...todoList, value])
}


// key-> local storage 정보를 가져옴 -> array 내에서 value 에 해당되는 값은 지운 새로운 값을 가져옴 


function deleteTodoList(key,value) {
    const todoList = getTodoList(key)
    return localStorage.setItem(key,todoList.filter(todo => todo !== value))
}

init()

// function deleteTodoList(key,value) {
//     const todoList = getTodoList(key);
//     let newArray = []
//     for (let i=0; i<todoList.length; i++){
//         if (todoList.length !== value){
//             newArray
//         }
//     }
// }

//모달창
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = ()=> {
  modal.style.display = "block";
}

span.onclick = ()=> {
  modal.style.display = "none";
}

window.onclick = (e)=> {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

//dark mode
function myFunction() {
    const element = document.header;
    element.classList.toggle("dark-mode");
 }
 