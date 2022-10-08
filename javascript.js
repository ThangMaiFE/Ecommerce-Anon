'strict mode'

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var sidebarTask = $$(".sidebar-category__task");
var sidebarList = $$(".sidebar-category__list");

var mobileTask = $$(".mobile-nav-menu__item-label")
var mobileList = $$(".mobile-nav-menu__submenu-list")

var mobileTask2 = $$(".mobile-nav-menu__bottom-item-label")
var mobileList2 = $$(".mobile-nav-menu__bottom-submenu-list")


function showDown(tasks, lists){
    tasks.forEach( parent => {
      parent.onclick = function() {
        var checkAct = parent.nextElementSibling.classList.contains("active")
    
        lists.forEach( children => {
          if(checkAct){ return;}
          if(children.classList.contains("active")){
            children.classList.remove("active");
            children.previousElementSibling.classList.remove("active")
          }
        })
    
        parent.classList.toggle("active")
        parent.nextElementSibling.classList.toggle("active")
      }
    })
}

showDown(sidebarTask,sidebarList)
showDown(mobileTask,mobileList)
showDown(mobileTask2,mobileList2)


var btnItem = $$(".mobile-bottom-nav__item")
var btnMenu = $(".mobile-bottom-nav__item:nth-child(1)")
var btnCategory = $(".mobile-bottom-nav__item:nth-child(5)")
var showMenu = $(".mobile-nav-menu-main")
var showCategory = $(".mobile-nav-menu-category")
var overlay = $(".overlay")
var mobileSidebar = $(".mobile-nav-menu") 
var btnCloseMenu = $('.mobile-nav-menu__heading-btn') 
var btnCloseCategory = $('.sidebar-category__label-btn') 
var html = $('html')
var modalBtn = $(".modal-box__btn")
var modalOverlay = $(".modal-overlay")
var modalDisplay = $(".modal")
var notifiDisplay = $(".notifi-toast")
var notifiBtn = $(".notifi-toast-btn")


var toggleAction =  {
    add(action, show){
      action.onclick = function(){
        mobileSidebar.classList.add("active")
        overlay.classList.add("active")
        show.classList.add("active")
        html.style.overflowY = 'hidden'
      }
    },

    delete(action){
      action.onclick = function(){
        showMenu.classList.remove("active")
        showCategory.classList.remove("active")
        overlay.classList.remove("active")
        mobileSidebar.classList.remove("active")
        if(!modalDisplay.classList.contains("active")){
          html.style.overflowY = 'auto'
        }
        sidebarList.forEach( (children,index) => {
          children.classList.remove("active")
          sidebarTask[index].classList.remove("active")
        })
        mobileList.forEach( (children,index) => {
          children.classList.remove("active")
          mobileTask[index].classList.remove("active")
        })
        mobileList2.forEach( (children,index) => {
          children.classList.remove("active")
          mobileTask2[index].classList.remove("active")
        })  
      }
    },

    closedModal(action){
      action.onclick = function(){
        modalDisplay.classList.remove('active')
        html.style.overflowY = 'auto'
      }
    },

    addModal(){
      modalDisplay.classList.add("active")
      html.style.overflowY = 'hidden'
    },

    closedNotifi(action){
      action.onclick = function(){
        notifiDisplay.classList.add("closed")
      }
    }

}



const setTime = setTimeout(toggleAction.addModal,5000)


toggleAction.closedNotifi(notifiBtn)
toggleAction.add(btnMenu, showMenu)
toggleAction.add(btnCategory, showCategory)
toggleAction.delete(overlay)
toggleAction.delete(btnCloseMenu)
toggleAction.delete(btnCloseCategory)
toggleAction.closedModal(modalBtn)
toggleAction.closedModal(modalOverlay)

var sliderList = $(".slider-container")
var sliderItem = $$(".slider-container_item")
var sliderPrev = $(".slider-container__icon-prev")
var sliderNext = $(".slider-container__icon-next")


sliderNext.onclick = function(){
  sliderList.scrollBy(500,0)
}
sliderPrev.onclick = function(){
  sliderList.scrollBy(-500,0)
}





