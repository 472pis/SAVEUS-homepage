
//bt_script
//let
let front = document.getElementsByClassName("front")[0];
let back = document.getElementsByClassName("back")[0];
let creditbt = document.getElementsByClassName("creditbt")[0];
let storybt = document.getElementsByClassName("storybt")[0];
let creditbox = document.getElementsByClassName("creditbox")[0];
let storybox = document.getElementsByClassName("storybox")[0];
let logo = document.getElementsByClassName("logo")[0];
let mainbt = document.getElementsByClassName("main_bt")[0];
let main_box = document.getElementsByClassName("box")[1];

creditbt.onclick = function(){
    main_box.style.background = "linear-gradient(to bottom, rgb(45,48,73), rgb(71,84,128))";
    front.style.webkitFilter = "blur(0px)";
    back.style.webkitFilter = "blur(0px)";
    logo.style.webkitFilter = "blur(0px)";
    storybox.style.visibility="collapse";
    storybox.style.opacity="0";
    creditbox.style.top="-3%";
    logo.style.top="100%";
    back.style.top="75%";
    front.style.top="75%";
    mainbt.style.visibility="visible";
    mainbt.style.opacity="1";
};
storybt.onclick = function(){
    creditbox.style.top="-100%";
    front.style.webkitFilter = "blur(20px)";
    front.style.top="30%";
    back.style.webkitFilter = "blur(5px)";
    back.style.top="-100%";
    logo.style.top="-100%";
    logo.style.webkitFilter = "blur(5px)";
    storybox.style.visibility="visible";
    storybox.style.opacity="1";
    mainbt.style.visibility="visible";
    mainbt.style.opacity="1";
}

mainbt.onclick = function(){
    creditbox.style.top="-100%";
    front.style.webkitFilter = "blur(0px)";
    front.style.top="0";
    back.style.webkitFilter = "blur(0px)";
    back.style.top="-22%";
    logo.style.top="10%";
    logo.style.webkitFilter = "blur(0px)";
    storybox.style.visibility="collapse";
    storybox.style.opacity="0";
    mainbt.style.visibility="collapse";
    mainbt.style.opacity="0";
}

//story content script
let box = document.getElementsByClassName("story")[0];
var cdn = `https://vfgzkrmpegux14861758.gcdn.ntruss.com/image/`;
let imgs = ["1.png","2.gif","3.gif","3-2.png","4.gif"];
let text = [
"평화로운 하루...",
"새로 구입한 VR이 도착했습니다!<br><br>지금은 하이테크놀로지 시대,<br>집 안에 이런 것 하나 정도는 키워도 되겠지요!<br><span style='font-size:0.8em; color:darkgray;'>가상현실 재생 외에는 아무런 쓸모가 없긴 하지만요.</span><br>통장이 박살나는 소리를 애써 무시하며<br>멋진 새 가족을 사용해 보기로 했어요.",
"...어라?",
"택배 상자 안에 무언가가 있습니다.<br>꺼내보니 종이군요.<br><br><span id='textblue' style='font-size:1.1em;font-weight:bold; color:skyblue'>지금껏 경험하지 못했던 뭐시기 어쩌구 저쩌구를 체험하라!</span><br><br>VR게임 광고지였나봐요. <span style='font-size:0.5em; color:darkgray;'>그것도 진부한...</span><br>마침 할만한 것도 없고, 더 읽어볼까요?<br><br>...",
"아직 오픈하지 않은 VR게임의 베타테스트 안내였습니다.<br>지금 신청을 받고 있는 것 같아요.<br><br>마침...VR도 있고...<br>마침...할 일도 없는데...<br><br>한 번...<br><br>신청해볼까요?"
];
//이 밑에 세이브어스의 간단한 소개와 로고 적어두기!!!!
let imgnum = 0;
let textnum = 0;
let imghtml=`<img src='${cdn}${imgs[imgnum]}' alt=''>`;
    let texthtml=`<div class='textbox'>
                    <img src='${cdn}textboxtop.png' alt=''>
                    <div class='text'>${text[textnum]}</div>
                    <img src='${cdn}textboxbottom.png' alt=''>
                </div>`;


for(let i=0; textnum<text.length; i++){
    
    box.insertAdjacentHTML(
            "beforeend",
            `<img src='${cdn}${imgs[imgnum]}' alt=''>
            <div class='textbox'>
                <img src='${cdn}textboxtop.png' alt=''>
                <div class='text'>${text[textnum]}</div>
                <img src='${cdn}textboxbottom.png' alt=''>
            </div>`
        );
    if(i==1){
        textnum++;
        box.insertAdjacentHTML(
            "beforeend",
            `<div class='textbox'>
                <img src='${cdn}textboxtop.png' alt=''>
                <div class='text'>${text[textnum]}</div>
                <img src='${cdn}textboxbottom.png' alt=''>
            </div>`
        );
    }else if(i==2){
        imgnum++;
        box.insertAdjacentHTML(
            "beforeend",
            `<img src='${cdn}${imgs[imgnum]}' alt=''>`
        );
    };
    imgnum++;
    textnum++;
};


//pagebt script
let top_container = document.getElementsByClassName("container")[0];
let main_container = document.getElementsByClassName("container")[1];
let bottom_container = document.getElementsByClassName("container")[2];

let character_bt = document.querySelector(".character_bt");
let album_bt = document.querySelector(".album_bt");
let main_cont_bt = document.querySelectorAll(".main_cont_bt");

character_bt.onclick = function(){
    top_container.style.top="0";
    main_container.style.top="200vh";
    bottom_container.style.top="300vh";
    //top_container.scrollIntoView({behavior: "smooth", block: "start"});
};
album_bt.onclick = function(){
    top_container.style.top="-300vh";
    main_container.style.top="-200vh";
    bottom_container.style.top="0";
    //bottom_container.scrollIntoView({behavior: "smooth", block: "end"});
};

for(let i=0; i < main_cont_bt.length; i++){
    main_cont_bt[i].addEventListener('click',pageMove);
}

function pageMove(){
    top_container.style.top="-200vh";
    main_container.style.top="0";
    bottom_container.style.top="200vh";
    //main_container.scrollIntoView({behavior:"smooth", block:"center"});
}

var loading = document.querySelector('.loading');
var line = document.getElementsByClassName('line');
loading.addEventListener('ended', (event) => {
        loading.style.opacity = '0%';
        loading.addEventListener('transitionend', (event)=>{
            loading.remove();
        });
});
loading.addEventListener('timeupdate', (event) => {
        if(loading.currentTime >= 3.8){
            document.querySelector('.logo').style.opacity='100%';
            line[1].style.opacity='100%';
            line[2].style.opacity='100%';
        }
});