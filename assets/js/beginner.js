let Layer = document.querySelector('.overlayLoading')
setInterval(()=>{
  Layer.style.display='none'
    },2000)

let dataBox = [
    'stop','many','Did','time','left','ago','Height','kind','for','found','show','next','we','without','girl','boy','second','mountain','miss','sea','man','hope','sad','happy','good','vary','too'
]
let box = document.querySelector('.box-show');
let inp = document.querySelector('.inputs')
let overLay = document.querySelector('.overlayStart')
let start = document.querySelector('.overlayStart button');
let user_name = document.querySelector('.overlayStart .userName');
let Name = document.querySelector('.beginner-page .box-setting .name span')
let timeLeft = document.querySelector('time-left')
let alert = document.querySelector('.overlayStart .alart')
start.onclick = () =>{
if (user_name.value != ''){
    start.remove();
    overLay.classList.add('removeWidth');
    inp.focus();
    user_name.remove();
    Name.innerHTML= user_name.value;

}else{
    alert.style.display='block'
    setInterval(()=>{
        alert.style.display='none'
    },10000)
}
}
function random(){
    const rando = dataBox[Math.floor(Math.random()* dataBox.length)]
    const index = dataBox.indexOf(rando);
    dataBox.splice(index,1);
    box.innerHTML = rando;
}
random()


function show(){
    if(dataBox.length > 0){
        if(inp.value.toLowerCase() ===  box.innerHTML.toLowerCase()){
            random()
            inp.value = ''
        }
}else{
    inp.remove()
    box.remove()
}
}
window.addEventListener('input',show);
function time(){
    let timedec = setInterval(()=>{
        timeLeft.innerHTML --
    },1000)
}




