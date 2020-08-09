//making the page a single page application and alson the control of the active buttons













$(function(){
$('#dashboard').addClass('clicked_purple')
   $('#dashboard').click(function(){

      $('#dashboard').addClass('clicked_purple')
      $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
      $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
      $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
      $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
      $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
      $('#spa').load("http://localhost/voltin/pages/spa/dashboard.php");
   })

$('#chat').click(function(){
   chat()
   $(this).addClass('clicked_purple')
   
   $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#spa').load("http://localhost/voltin/pages/spa/chat.php");
 
})

$('#user_profile').click(function(){
   user_profile()
   $(this).addClass('clicked_purple')
   $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#spa').load("http://localhost/voltin/pages/spa/profile.php");
 
})

$('#library').click(function(){
   $(this).addClass("clicked_purple")
   library()
   $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#spa').load("http://localhost/voltin/pages/spa/library.php");
 
})

$('#icons').click(function(){
   $(this).addClass("clicked_purple")
   icons()
   $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#spa').load("http://localhost/voltin/pages/spa/icons.php");
})

$('#discover').click(function(){
   $(this).addClass("clicked_purple")
   discover()
   $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
   $('#spa').load("http://localhost/voltin/pages/spa/map.php");
 
})

$('#addcontact').click(function(){
   $('#sidepanel').load("http://localhost/voltin/user_management/friend_list_for_request.php");
})

$('#all_friends_btn').click(function(){
   $('#show_freinds').load("http://localhost/voltin/user_management/friend_list_for_request.php");
})


//control active


})
function chat(){
   $('#red').click(function(){
      //COlor active
       $('.red').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.skyblue').css({'border':'0'})
    $('.purple').css({'border':'0'})
    $('.orange').css({'border':'0'})
       $('#chat').addClass('clicked_red').removeClass('clicked_purple').removeClass('clicked_skyblue').removeClass('clicked_orange')
       $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       
    })
    
    
    $('#skyblue').click(function(){
       $('.skyblue').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.red').css({'border':'0'})
    $('.purple').css({'border':'0'})
    $('.orange').css({'border':'0'})
 
       $('#chat').addClass('clicked_skyblue').removeClass('clicked_purple').removeClass('clicked_red').removeClass('clicked_orange')
       $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
     
     })
    
     $('#purple').click(function(){
       $('.purple').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.red').css({'border':'0'})
    $('.skyblue').css({'border':'0'})
    $('.orange').css({'border':'0'})
 
       $('#chat').addClass('clicked_purple').removeClass('clicked_skyblue').removeClass('clicked_red').removeClass('clicked_orange')
       $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
     })
    
     $('#orange').click(function(){
       $('.orange').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.red').css({'border':'0'})
    $('.purple').css({'border':'0'})
    $('.skyblue').css({'border':'0'})
       $('#chat').addClass('clicked_orange').removeClass('clicked_skyblue').removeClass('clicked_red').removeClass('clicked_purple')
       $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
     })
}

function user_profile() {
   $('#red').click(function(){
      //COlor active
       $('.red').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.skyblue').css({'border':'0'})
    $('.purple').css({'border':'0'})
    $('.orange').css({'border':'0'})
       $('#user_profile').addClass('clicked_red').removeClass('clicked_purple').removeClass('clicked_skyblue').removeClass('clicked_orange')
       $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
    })
    
    
    $('#skyblue').click(function(){
       $('.skyblue').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.red').css({'border':'0'})
    $('.purple').css({'border':'0'})
    $('.orange').css({'border':'0'})
 
       $('#user_profile').addClass('clicked_skyblue').removeClass('clicked_purple').removeClass('clicked_red').removeClass('clicked_orange')
       $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
     })
    
     $('#purple').click(function(){
       $('.purple').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.red').css({'border':'0'})
    $('.skyblue').css({'border':'0'})
    $('.orange').css({'border':'0'})
 
       $('#user_profile').addClass('clicked_purple').removeClass('clicked_skyblue').removeClass('clicked_red').removeClass('clicked_orange')
       $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       
     })
    
     $('#orange').click(function(){
       $('.orange').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.red').css({'border':'0'})
    $('.purple').css({'border':'0'})
    $('.skyblue').css({'border':'0'})
       $('#user_profile').addClass('clicked_orange').removeClass('clicked_skyblue').removeClass('clicked_red').removeClass('clicked_purple')
       $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
     })
}



function library() {
   $('#red').click(function(){
      //COlor active
       $('.red').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.skyblue').css({'border':'0'})
    $('.purple').css({'border':'0'})
    $('.orange').css({'border':'0'})
       $('#library').addClass('clicked_red').removeClass('clicked_purple').removeClass('clicked_skyblue').removeClass('clicked_orange')
       $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
    })
    
    
    $('#skyblue').click(function(){
       $('.skyblue').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.red').css({'border':'0'})
    $('.purple').css({'border':'0'})
    $('.orange').css({'border':'0'})
 
       $('#library').addClass('clicked_skyblue').removeClass('clicked_purple').removeClass('clicked_red').removeClass('clicked_orange')
       $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
     })
    
     $('#purple').click(function(){
       $('.purple').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.red').css({'border':'0'})
    $('.skyblue').css({'border':'0'})
    $('.orange').css({'border':'0'})
 
       $('#library').addClass('clicked_purple').removeClass('clicked_skyblue').removeClass('clicked_red').removeClass('clicked_orange')
       $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
     })
    
     $('#orange').click(function(){
       $('.orange').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.red').css({'border':'0'})
    $('.purple').css({'border':'0'})
    $('.skyblue').css({'border':'0'})
       $('#library').addClass('clicked_orange').removeClass('clicked_skyblue').removeClass('clicked_red').removeClass('clicked_purple')
       $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
     })
}



function icons() {
   $('#red').click(function(){
      //COlor active
       $('.red').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.skyblue').css({'border':'0'})
    $('.purple').css({'border':'0'})
    $('.orange').css({'border':'0'})
       $('#icons').addClass('clicked_red').removeClass('clicked_purple').removeClass('clicked_skyblue').removeClass('clicked_orange')
       $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
    })
    
    
    $('#skyblue').click(function(){
       $('.skyblue').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.red').css({'border':'0'})
    $('.purple').css({'border':'0'})
    $('.orange').css({'border':'0'})
 
       $('#icons').addClass('clicked_skyblue').removeClass('clicked_purple').removeClass('clicked_red').removeClass('clicked_orange')
       $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
    
     })
    
     $('#purple').click(function(){
       $('.purple').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.red').css({'border':'0'})
    $('.skyblue').css({'border':'0'})
    $('.orange').css({'border':'0'})
 
       $('#icons').addClass('clicked_purple').removeClass('clicked_skyblue').removeClass('clicked_red').removeClass('clicked_orange')
       $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
     })
    
     $('#orange').click(function(){
       $('.orange').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.red').css({'border':'0'})
    $('.purple').css({'border':'0'})
    $('.skyblue').css({'border':'0'})
       $('#icons').addClass('clicked_orange').removeClass('clicked_skyblue').removeClass('clicked_red').removeClass('clicked_purple')
       $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#discover').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
     })
}



function discover() {
   $('#red').click(function(){
      //COlor active
       $('.red').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.skyblue').css({'border':'0'})
    $('.purple').css({'border':'0'})
    $('.orange').css({'border':'0'})
       $('#discover').addClass('clicked_red').removeClass('clicked_purple').removeClass('clicked_skyblue').removeClass('clicked_orange')
       $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
    })
    
    
    $('#skyblue').click(function(){
       $('.skyblue').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.red').css({'border':'0'})
    $('.purple').css({'border':'0'})
    $('.orange').css({'border':'0'})
 
       $('#discover').addClass('clicked_skyblue').removeClass('clicked_purple').removeClass('clicked_red').removeClass('clicked_orange')
       $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
    
     })
    
     $('#purple').click(function(){
       $('.purple').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.red').css({'border':'0'})
    $('.skyblue').css({'border':'0'})
    $('.orange').css({'border':'0'})
 
       $('#discover').addClass('clicked_purple').removeClass('clicked_skyblue').removeClass('clicked_red').removeClass('clicked_orange')
       $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
     })
    
     $('#orange').click(function(){
       $('.orange').css({'border':'3px solid #596d9c',
       'width':'20px',
       'height': '20px',
       'border-radius': '100%'
    })
    $('.red').css({'border':'0'})
    $('.purple').css({'border':'0'})
    $('.skyblue').css({'border':'0'})
       $('#discover').addClass('clicked_orange').removeClass('clicked_skyblue').removeClass('clicked_red').removeClass('clicked_purple')
       $('#chat').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#user_profile').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#library').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#dashboard').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
       $('#icons').removeClass('clicked_purple clicked_red clicked_skyblue clicked_orange')
     })
}

//modes
//Dark mode
$('#dark').click(function(){
   $('#spa').addClass('dark_maode_txt dark_mode_bkg')
   $('#spa').removeClass('light_maode_txt light_mode_bkg')
   $('body').addClass('dark-edition')
   $('.dark').css('border','3px solid azure')
   $('.light').css('border','0')
   $('.defult').css('border','0')
})

//defult

$('#defult').click(function(){
   $('body').addClass('dark-edition')
   $('#spa').removeClass('dark_maode_txt dark_mode_bkg')
    $('#spa').removeClass('light_maode_txt light_mode_bkg')
   $('.defult').css('border','3px solid azure')
   $('.light').css('border','0')
   $('.dark').css('border','0')
})

//light
$('#light').click(function(){
   $('body').removeClass('dark-edition')
    $('#spa').addClass('light_maode_txt light_mode_bkg')
   $('.light').css('border','3px solid azure')
   $('.defult').css('border','0')
   $('.dark').css('border','0')
})
