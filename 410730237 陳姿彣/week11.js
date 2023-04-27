var vm = new Vue({
    el: "#app",
    data: {
      keyword: "",
      cards: [
        {
          
          title: "About Me" ,
          words:"410730237 陳姿彣",
          width: "100%" ,
          height: "100%" 
       
        },
        {
          
          title: "Tamsui",
          words:"淡水是我的家。",
          width: "100%" ,
          height: "100%" 


          },
          {
            
            title: "Travel",
            words:"喜歡到處旅行，無論近遠。",
            width: "100%" ,
            height: "100%" 

            
          },
          {
            
            title: "Water Blue",
            words:"水藍色是我最喜歡的顏色。",
            width: "100%" ,
            height: "100%" 

          },


          
		],
    },
    
    mounted:function(){        
        swiper = new Swiper('.carousel', {
            
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination'
            }
        })     

        }
  });