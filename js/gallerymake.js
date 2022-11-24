
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
            `<img src="${split[i]}" data-image="${split[i]}" alt="">`
        );
    }

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

                grid_num_rows:100,
                //tile design options:
															
					tile_enable_border:false,			//enable border of the tile				
					tile_enable_outline: false,			//enable outline of the tile (works only together with the border)
					tile_enable_shadow:false,			//enable shadow of the tile
					
					tile_enable_action:	true,			//enable tile action on click like lightbox
					tile_as_link: false,				//act the tile as link, no lightbox will appear
					tile_link_newpage: false,			//open the tile link in new page
		
					tile_enable_overlay: true,			//enable tile color overlay (on mouseover)
					tile_overlay_opacity: 0.2,			//tile overlay opacity
					tile_overlay_color: "#000000",		//tile overlay color
					
					tile_enable_icons: false,			//enable icons in mouseover mode
					tile_show_link_icon: false,			//show link icon (if the tile has a link). In case of tile_as_link this option not enabled
					
					//마우스오버시 흑백
					tile_enable_image_effect:false,		//enable tile image effect
					tile_image_effect_type: "bw",		//bw, blur, sepia - tile effect type
					tile_image_effect_reverse: false,	//reverce the image, set only on mouseover state

		 			//lightbox options:
					
					lightbox_type: "wide",							//compact / wide - lightbox type
										
					lightbox_hide_arrows_onvideoplay: true,			//hide the arrows when video start playing and show when stop
					lightbox_arrows_position: "sides",				//sides, inside: position of the arrows, used on compact type			
					lightbox_arrows_offset: 50,						//The horizontal offset of the arrows
		
					lightbox_overlay_color:null,					//the color of the overlay. if null - will take from css
					lightbox_overlay_opacity:1,						//the opacity of the overlay. for compact type - 0.6
					lightbox_top_panel_opacity: null,				//the opacity of the top panel
					
					lightbox_close_on_emptyspace:true,				//close the lightbox on empty space
					
					lightbox_show_numbers: false,					//show numbers on the right side

				    lightbox_slider_image_border: false,				//enable border around the image (for compact type only)		   
				    lightbox_slider_image_shadow: false,				//enable border shadow the image
					
				    lightbox_slider_control_swipe:false,				//true,false - enable swiping control
				    lightbox_slider_control_zoom:false,				//true, false - enable zooming control
				    
		 			//lightbox text panel:
					
					lightbox_show_textpanel: false,						//show the text panel
					
					lightbox_textpanel_enable_title: false,				//enable the title text
					lightbox_textpanel_enable_description: false,		//enable the description text
                });
        });
