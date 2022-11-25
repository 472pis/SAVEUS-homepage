//character-slide bt
let chipBox = document.getElementsByClassName('chipbox')[0];
let charBt = document.getElementsByClassName('chip');
let charBg = document.getElementsByClassName('char_bg')[0];
let mainContBt = document.getElementsByClassName("main_cont_bt")[0];
let lineBox = document.getElementsByClassName("linebox")[0];
let selectBox = document.getElementsByClassName("selectbox")[0];
var info = document.getElementsByClassName("char_info");

function clickChip(e){
    var thisId = Number(this.id);
    for(var i=0; i<info.length; i++){
        if(i != thisId){
            if(info[i].classList.contains('show')){
                info[i].classList.replace('show','hidden');
                charBox.children[i].classList.replace('unroll','roll');
            }else{
                //첫 오픈 시
                open();
            }
        }
    }
    info[thisId].classList.replace('hidden','show');
    charBox.children[thisId].classList.replace('roll','unroll');
};

function open(){
    charInfo.classList.add('show');
    charBox.classList.add('char_unroll');
    charBg.classList.add('left50');
    charBg.children[0].classList.add('left15');
    charBg.children[1].classList.add('left10');
    lineBox.classList.add('right88');
    selectBox.classList.add('right88');
    selectBox.classList.add('opacity0');
    chipBox.classList.add('right28');
    mainContBt.classList.add('right28');
    mainContBt.removeEventListener('click', pageMove);
    mainContBt.addEventListener('click', close);
};

function close(){
    charInfo.classList.remove('show');
    charBox.classList.remove('char_unroll');
    charBg.classList.remove('left50');
    charBg.children[0].classList.remove('left15');
    charBg.children[1].classList.remove('left10');
    lineBox.classList.remove('right88');
    selectBox.classList.remove('right88');
    selectBox.classList.remove('opacity0');
    chipBox.classList.remove('right28');
    mainContBt.classList.remove('right28');

    mainContBt.removeEventListener('click', close);
    mainContBt.addEventListener('click', pageMove);
};