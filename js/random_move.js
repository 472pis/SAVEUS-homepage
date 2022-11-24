   
    //div 넓이/높이 구하기
    var containerSizeW = $('.chipbox').width();
    var containerSizeH = $('.chipbox').height();
    var characterSizeW = $('.chip').width();

    window.onresize = function(event){
        containerSizeW = $('.chipbox').width();
        containerSizeH = $('.chipbox').height();
        characterSizeW = $('.chip').width();
    }
   
    //칩 넘버
    var cdn = `https://vfgzkrmpegux14861758.gcdn.ntruss.com/character/`;
    var src = [['%EB%A6%AC%EB%8B%A4%EB%8F%84%ED%8A%B8-idle2.gif','%EB%A6%AC%EB%8B%A4%EB%8F%84%ED%8A%B8-walk2.gif'],
                ['2p%EB%8F%84%ED%8A%B8-idle2.gif','2p%EB%8F%84%ED%8A%B8-walk2.gif'],
                ['%ED%85%8C%EC%8A%A4%EB%8F%84%ED%8A%B8-idle2.gif','%ED%85%8C%EC%8A%A4%EB%8F%84%ED%8A%B8-walk2.gif'],
                ['%ED%95%98%EB%82%98%EB%8F%84%ED%8A%B8-idle2.gif','%ED%95%98%EB%82%98%EB%8F%84%ED%8A%B8-walk2.gif']];

    //최소값 지정 난수 - (Math.random()*max-min+1)+min
    //난수 생성 (움직임 여부/좌표 위치)
    function getNewrand(){
        var moveRand = Math.floor(Math.random()*2);
        var posRand = Math.floor(Math.random()*(containerSizeW-characterSizeW));
        return [moveRand,posRand];
    }
    
    //애니메이팅 함수
    function animateRand(character, id){
        //id 0-4까지, id=1/src=src[1][0,1] 이런식으루
        //난수 구하고
        var rand = getNewrand();
        //움직임여부 오케이이면
        if(rand[0]==0){
            //캐릭터 이미지 걷는걸로 바꾸고
            $(character).children().eq(1).css('display','block');
            $(character).children().eq(0).css('display','none');
            //현재거리 - 도착 좌표 한 후 절대값 처리 =거리
            var p = Math.abs($(character).position().left-rand[1])*20;
            //현재위치보다 도착좌표가 크면 뒤집고, 작으면 원래대로
            if($(character).position().left<rand[1]){
                $(character).removeClass('flipped');
            }else{
                $(character).addClass('flipped');
            }
            //도착 좌표로 애나메이팅, 걸리는 시간은 거리*20으로 일정하게 유지함
            //애니메이팅이 끝나면 애니메이팅 함수 재실행(재귀)
            $(character).animate({left:rand[1]},p,"linear",function(){animateRand(character, id);});
        }else{
            //움직임여부 노노이면
            //멈춤 이미지로 바꾸고
            $(character).children().eq(0).css('display','block');
            $(character).children().eq(1).css('display','none');
            //0~2000ms까지 랜덤한 시간동안 대기
            setTimeout(function(){animateRand(character, id);},Math.floor(Math.random()*2000));
        }
        
    }
    
    //로딩완료 후 캐릭터 중앙으로 이동
    $(document).ready(function(){
        //chip생성
        for(var i=0; i<src.length; i++){
            $('.chipbox').append(
                `<div class='chip' id="${i}"><img src="${cdn+src[i][0]}" alt=""><img src="${cdn+src[i][1]}" style="display:none;" alt=""></div>`
            );
        };
        var chips = $('.chip');
        characterSizeW = $('.chip').width();
        //id파악하기
        for(var i=0; i<chips.length; i++){
            var randnum = Math.floor(Math.random()*2);
            if(randnum != 1){
                chips.eq(i).addClass('flipped');
            }
            chips.eq(i).animate({left:(Math.floor(Math.random()*(containerSizeW-characterSizeW)))},0,function(){animateRand(this, i);});
        }
    });
    
    
    