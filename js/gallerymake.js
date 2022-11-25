
  
      let urlList = [list1, list2];
      
      var cdn = `https://vfgzkrmpegux14861758.gcdn.ntruss.com`;
      const album_src = `/album/`;
      const chapter_src = `/image/chapter/`;
         //----- img list -----//
      
      let chapter = document.querySelector('#chapter_box');
      let slider = document.querySelector('#slide_box');
      
      for(var i=0; i<8; i++){
        var newItem = document.createElement('div');
        newItem.setAttribute("class","chapter");
        var url;
        if(i==3){
          url = `${cdn}${chapter_src}${i}.gif`;
        }else{
          url = `${cdn}${chapter_src}${i}.png`;
        }
        var img=new Image();
        img.src = url;
        newItem.appendChild(img);
        slider.appendChild(newItem);
      }
      
      let gallery = document.querySelector('#gallery');
  
      for(var k=0; k<urlList.length; k++){
        var split = urlList[k].split('\n');
        
        //makegallery//
          for(var i=0; i<split.length; i++){
              var newItem = document.createElement('div');
              var newImgcont = document.createElement('div');
              var newImg = document.createElement('img');
              newItem.setAttribute("class",`thumbnail album${k}`);
              newImgcont.setAttribute("class","imgcontainer");
              newImg.setAttribute("src",`${split[i]}`);
              newImgcont.appendChild(newImg);
              newItem.appendChild(newImgcont);
              gallery.appendChild(newItem);
              
          }
      };
  //makegallery//
  
  
      //방향버튼
      const leftArrow = document.querySelector('#left_arrow');
      const rightArrow = document.querySelector('#right_arrow');
      //챕터 이미지
      const slideItems = document.querySelectorAll('.chapter');
      //챕터 갯수
      const maxSlide = slideItems.length;
      //챕터 슬라이드 복사
      let newSlide = slideItems[2].cloneNode(true);
      slideItems[7].after(newSlide);
      newSlide = slideItems[1].cloneNode(true);
      slideItems[7].after(newSlide);
      newSlide = slideItems[0].cloneNode(true);
      slideItems[7].after(newSlide);
      newSlide = slideItems[5].cloneNode(true);
      slideItems[0].before(newSlide);
      newSlide = slideItems[6].cloneNode(true);
      slideItems[0].before(newSlide);
      newSlide = slideItems[7].cloneNode(true);
      slideItems[0].before(newSlide);

//로딩 후 이벤트 리스너 실행
window.addEventListener('DOMContentLoaded', function()
{
        for(var i=0; i<charBt.length; i++){
            charBt[i].addEventListener('click', clickChip);
        }

  
        let mainContBt2 = document.getElementsByClassName("main_cont_bt")[1];
        let chapterSize = slideItems[0].getBoundingClientRect().width;
        let chapterSize2 = slideItems[slideItems.length-1].getBoundingClientRect().width;
        let gap = slideItems[1].getBoundingClientRect().left - (slideItems[0].getBoundingClientRect().left + chapterSize);
        
        let bodySize = document.querySelector('body').offsetWidth/2;
        let offset = document.querySelector('#slide_box').children[3].getBoundingClientRect().left-bodySize+(chapterSize/2);
        let offset2 = document.querySelector('#slide_box').children[10].getBoundingClientRect().left-bodySize+(chapterSize2/2);
        chapter.scrollLeft = offset;
        var chapterIndex = 0;
        
  //윈도우 크기 변경하면 버튼 위치 바꿔주는 것 만들었다 실패한 흔적
  //다 괜찮은데 왜인진 모르겠지만 마지막 인덱스에서 처음 인덱스로 돌아가면 이상한 위치로 가버린다
  //오프셋 처음 인덱스로 변경 직전에 위치 다시 지정해줘도 똑같음 sad.
//이 기능이 없어도 창 크기가 변하면 인덱스 루프시 위치가 이상해진다
//모가문제야...
        
        var timer = null;
        window.addEventListener('resize', function(){
            clearTimeout(timer);
            timer = setTimeout(function(){
                bodySize = document.querySelector('#box_bottom').offsetWidth/2;
                chapterSize = slideItems[chapterIndex].getBoundingClientRect().width;
                offset = document.querySelector('#slide_box').children[chapterIndex+3].offsetLeft-bodySize+(chapterSize/2);
                
                chapterSize2 = slideItems[slideItems.length-1].getBoundingClientRect().width;
                offset2 = document.querySelector('#slide_box').children[10].getBoundingClientRect().left-bodySize+(chapterSize2/2);
                chapter.scrollLeft = offset;
            }, 300);
        });
        
  
      rightArrow.addEventListener('click',function rArr(){
        rightArrow.removeEventListener('click', rArr);
          chapterSize = slideItems[chapterIndex].getBoundingClientRect().width;
  
        if(chapterIndex < 7){
          var newChapSize = slideItems[chapterIndex+1].getBoundingClientRect().width;
          chapter.scrollLeft += (chapterSize/2)+(newChapSize/2)+gap;
          chapterIndex++;
        }else{
          chapterIndex = 0;
          var newChapSize = slideItems[chapterIndex].getBoundingClientRect().width;
          chapter.scrollLeft += (chapterSize/2)+(newChapSize/2)+gap;
          setTimeout(()=>{
            chapter.style.scrollBehavior = 'unset';
            bodySize = document.querySelector('#box_bottom').offsetWidth/2;
            chapterSize = slideItems[chapterIndex].getBoundingClientRect().width;
            offset = document.querySelector('#slide_box').children[chapterIndex+3].offsetLeft-bodySize+(chapterSize/2);
            chapter.scrollLeft = offset;
            chapter.style.scrollBehavior = 'smooth';
          },500);
          
          //스크롤 후 멈추고 다시 돌아감
        }
        setTimeout(()=>{
            rightArrow.addEventListener('click', rArr);
        },300);
        let albumIndex = document.querySelector(`.album${chapterIndex}`).offsetTop;
        gallery.scrollTop = albumIndex;
      });
  
      leftArrow.addEventListener('click',function lArr(){
        leftArrow.removeEventListener('click', lArr);
          chapterSize = slideItems[chapterIndex].getBoundingClientRect().width;
        if(chapterIndex > 0){
          var newChapSize = slideItems[chapterIndex-1].getBoundingClientRect().width;
          chapter.scrollLeft -= (chapterSize/2)+(newChapSize/2)+gap;
          chapterIndex--;
        }else{
          chapterIndex = 7;
          var newChapSize = slideItems[chapterIndex].getBoundingClientRect().width;
          chapter.scrollLeft -= (chapterSize/2)+(newChapSize/2)+gap;
          setTimeout(()=>{
            chapter.style.scrollBehavior = 'unset';
            bodySize = document.querySelector('#box_bottom').offsetWidth/2;
            chapterSize2 = document.querySelector('#slide_box').children[10].getBoundingClientRect().width;
            offset2 = document.querySelector('#slide_box').children[10].getBoundingClientRect().left;//-bodySize;//+(chapterSize2/2);
            chapter.scrollLeft = offset2;
            chapter.style.scrollBehavior = 'smooth';
          },500);
          
        }
        setTimeout(()=>{
            leftArrow.addEventListener('click', lArr);
        },300);
        let albumIndex = document.querySelector(`.album${chapterIndex}`).offsetTop;
        gallery.scrollTop = albumIndex;
      });
  
      /*//스크롤 연동 시스템... 인데 미완성 
      var isget = false;
      gallery.addEventListener('scroll',function(){
        
        let galleryIndex = document.querySelector(`.album${chapterIndex+2}`).offsetTop;
        console.log(galleryIndex);
        if(gallery.scrollTop >= galleryIndex && isget == false){
          chapterIndex++;
          chapter.scrollLeft = document.querySelector('#slide_box').children[4].offsetLeft-bodySize+(chapterSize/2);
          console.log(chapterIndex);
          //chapter.scrollLeft = chapPos;
          isget = true;
        }
      });
  */
  
  //lightbox event
      let galleryTop = document.querySelector('#gallery_top');
      let thumbnail = document.querySelectorAll('.thumbnail');
      let lightBox = document.querySelector('#light_box');
      let expandedImg = document.querySelector("#expandedImg");
      let lightBox_list = document.querySelector('.lightbox_list');
  //addevent
  
      for(var i = 0; i<gallery.children.length; i++){
        thumbnail[i].addEventListener('click', showLightBox);
        var clone = gallery.children[i].cloneNode(true);
        lightBox_list.append(clone);
      }
        
        for(var i=0; i<lightBox_list.children.length; i++){
          lightBox_list.children[i].addEventListener('click', showLightBox);
        }
  
      function showLightBox()
      { 
        //누른 아이템 인덱스 번호 가져오기
        var galleryItemIndex = this;
        var i=0;
        while(galleryItemIndex.previousElementSibling!=null){
            galleryItemIndex=galleryItemIndex.previousElementSibling;
            i++;
        }
        //해당 인덱스 번호 위치 가져오기
        var listItemPos = lightBox_list.children[i].offsetLeft;
        var listItemWidth = lightBox_list.children[i].offsetWidth;
        expandedImg.src = this.children[0].children[0].src;
        if(lightBox.style.visibility == 'visible'){
          lightBox_list.style.left = `calc(50% - ${listItemPos-(listItemWidth/2)+listItemWidth}px)`;
        }
  
        //gallery fadeout
        gallery.style.bottom = '-100%';
        galleryTop.style.top = '-100%';
        gallery.style.opacity = '0%';
        galleryTop.style.opacity = '0%';
        
  
        //lightbox fadein
        lightBox.style.visibility = 'visible'
        lightBox.children[0].style.left = '0%';//curtain left
        lightBox.children[2].style.right = '0%';//curtain right
        lightBox.children[1].style.opacity = '100%';//image box
  
        lightBox.children[0].addEventListener('transitionend', function collapse(){
          lightBox_list.style.left = `calc(50% - ${listItemPos-(listItemWidth/2)+listItemWidth}px)`;
          lightBox.children[0].removeEventListener('transitionend', collapse);
        });
  
        //메인 버튼 전환
        
        mainContBt2.addEventListener('click', closeLightBox);
        mainContBt2.removeEventListener('click', pageMove);
        }
  
      function closeLightBox(){
        //gallery fadein
        gallery.style.bottom = '0';
        galleryTop.style.top = '0';
        gallery.style.opacity = '100%';
        galleryTop.style.opacity = '100%';
  
        //lightbox fadeout
        lightBox.children[0].style.left = '-30%';//curtain left
        lightBox.children[2].style.right = '-30%';//curtain right
        lightBox.children[3].style.bottom = '-50%';
        lightBox.children[3].style.opacity= '0%';
        lightBox.children[1].style.opacity = '0%';//image box
        
        lightBox.children[1].addEventListener('transitionend', function collapse(){
          lightBox.style.visibility = 'collapse';
          lightBox.children[3].children[0].style.left = '120%';//lightbox_list
          lightBox.children[3].style.opacity='100%';
          lightBox.children[3].style.bottom = '0';
          lightBox.children[1].removeEventListener('transitionend', collapse);
        });
  
        //메인 버튼 전환
  
        mainContBt2.removeEventListener('click', closeLightBox);
        mainContBt2.addEventListener('click', pageMove);
      }
  
    });