
    var albumImageSrc = `https://i.postimg.cc/cHNg0hr3/2P.gif
https://i.postimg.cc/HWXcZfvt/2p-idle2.gif
https://i.postimg.cc/TYcyGn6L/2p-walk2.gif
https://i.postimg.cc/pdkbLXdB/image.gif
https://i.postimg.cc/nryNPXdn/image.gif
https://i.postimg.cc/WzGddkqy/idle2.gif
https://i.postimg.cc/m24c080W/walk2.gif
https://i.postimg.cc/GhZbW2B8/2.gif
https://i.postimg.cc/bwNZvdy6/idle2.gif
https://i.postimg.cc/Jz6GHmtR/walk2.gif
https://i.postimg.cc/NfZyHFcq/idle2.gif
https://i.postimg.cc/rmyzktSW/walk2.gif`;

//챕터별로 변수 만들기! 굿
var split = albumImageSrc.split('\n');
    let gallery = document.querySelector('#gallery');
    for(var i=0; i<split.length; i++){
        gallery.insertAdjacentHTML(
            "beforeend",
            `<img src="${split[i]}" data-image="${split[i]}">`
        );
    }


    window.onload = function(){
        $(function(){
            $("#gallery").unitegallery({
                tile_width:150,
                tile_height:100,
                theme_gallery_padding:0,
                grid_padding:10,
                grid_space_between_cols:20,
                grid_space_between_rows:20,
                theme_auto_open:null,

                gallery_theme:"tilesgrid",
                gallery_width:"100%",
                gallery_min_width:150,
                gallery_background_color:"",

                //tile design options:
															
					tile_enable_border:false,			//enable border of the tile				
					tile_enable_outline: false,			//enable outline of the tile (works only together with the border)
					tile_enable_shadow:false,			//enable shadow of the tile
					
					tile_enable_action:	true,			//enable tile action on click like lightbox
					tile_as_link: false,				//act the tile as link, no lightbox will appear
					tile_link_newpage: true,			//open the tile link in new page
		
					tile_enable_overlay: true,			//enable tile color overlay (on mouseover)
					tile_overlay_opacity: 0.4,			//tile overlay opacity
					tile_overlay_color: "#000000",		//tile overlay color
					
					tile_enable_icons: true,			//enable icons in mouseover mode
					tile_show_link_icon: false,			//show link icon (if the tile has a link). In case of tile_as_link this option not enabled
					tile_space_between_icons: 26,		//initial space between icons, (on small tiles it may change)
					
					tile_enable_image_effect:false,		//enable tile image effect
					tile_image_effect_type: "bw",		//bw, blur, sepia - tile effect type
					tile_image_effect_reverse: false,	//reverce the image, set only on mouseover state
            });
        });
    };
    