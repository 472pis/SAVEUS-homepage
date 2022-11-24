//character info box
const charName = ['leada','twop','tes','hana'];
var cdn = `https://vfgzkrmpegux14861758.gcdn.ntruss.com/character/`;
const charSrc = ['%EB%A6%AC%EB%8B%A4.gif','2P.gif','%ED%85%8C%EC%8A%A4.gif','%ED%95%98%EB%82%982.gif'];
const names = [['LEADA','리다'],['2P','투피'],['TES','테스'],['HANA','하나']];
const workPos = [['Team Leader','구조대의 리더'],
                ['Information Collector  ','정보원'],
                ['Inspector','감독관'],
                ['Researcher','연구원']];
const phy = ['Female · 180cm','Male ·175cm','Male ·165cm','Female ·147cm'];
const desc = [
    [`쾌활하고 자신감이 넘친다.<br>
    팀원들을 자식처럼 아끼는데, 팀원들은 그것을 싫어한다.<br>
    평소에는 여유가 넘치지만, 화가 나면 살벌해진다.`,
    `She is cheerful and confident.<br>
    She cares about her teammates like a child, and they hate it.<br>
    Usually she is laid back, but when she's angry, she’ll be menace.`],
    [`소심하고, 조용히 자기 할 일을 하는 타입<br>
    메모하는 것이 습관이라 여기저기 포스트잇을 붙이고 다닌다.<br>
    복장을 대충 입고 다녀서 자주 혼난다.`,
    `A timid, quiet type of person who does his job<br>
    He has a habit of taking notes, so he has sticky memo everywhere.<br>
    He is often scolded for his sloppy uniform.`],
    [`엄격하고 무뚝뚝하다.<br>
    원칙을 중시하며, 복장 불량에 예민하다.<br>
    늘 주머니에 치료 도구를 가지고 다닌다.`,
    `He is strict and blunt.<br>
    He values principles and is sensitive to bad uniform.<br>
    always carries a treatment tool in his pocket.`],
    [`예민하고 괴팍하다.  감정에 자주 휘둘린다.<br>
    의외로 마음 약한 면도 있다.<br>
    연구 능력이 뛰어나 구조대에 유용한 물건들을 자주 만든다.`,
    `She is sensitive and eccentric. often swayed by emotions.<br>
    often makes things useful for rescue teams <br>
    because of her excellent research skills.`]];
    
    //넣을 박스
    let charInfo = document.getElementsByClassName('char_info_box')[0];
    let charBox = document.getElementsByClassName('char_box')[0];
    if('content' in document.createElement('template')){
        //템플릿 틀
        var infoBox = document.querySelector('#infoBox');
        var charB = document.querySelector('#charBox');
        
        for(var i=0; i<4; i++){
            //템플릿 생성
            var clone = document.importNode(infoBox.content, true);
            var clone2 = document.importNode(charB.content, true);
            //템플릿 내용물
            var table = clone.querySelectorAll("div");
            var table2 = clone2.querySelectorAll("div");
            table[0].setAttribute("class",`char_info hidden ${charName[i]}`);
            table2[0].setAttribute("class",`char ${charName[i]} roll`);
            //name
            table[0].children[0].children[0].innerHTML = names[i][0];
            table[0].children[0].children[1].innerHTML = names[i][1];
            //descbox
            //workPos
            var workPosition = table[0].children[1].children[0];
            workPosition.children[0].innerHTML = workPos[i][0];
            workPosition.children[1].innerHTML = workPos[i][1];
            //physical
            table[0].children[1].children[1].innerHTML = phy[i];
            //desc
            table[0].children[1].children[2].children[0].innerHTML = desc[i][0];
            table[0].children[1].children[2].children[1].innerHTML = desc[i][1];
            
            //charBox
            table2[0].children[0].setAttribute('src', cdn+charSrc[i]);
            table2[0].children[1].setAttribute('src', cdn+charSrc[i]);

            charInfo.appendChild(clone);
            charBox.appendChild(clone2);
            //charInfoArr.push(clone);
        }
    };



