//
// //
const $ = document.querySelector.bind(document); //dom cho nhanh
const $$ = document.querySelectorAll.bind(document); //dom cho nhanh
//đăng xuất - đăng nhập
const registration = $('#has--modal-registration')
const singIn = $('#has--modal-sign-in')
const Modal = $('#modal')
const hasRegistration = $('#registration')
const hasSingIn = $('#sing-in')
//
registration.onclick = () => {
    Modal.style.display = 'flex'
    hasRegistration.style.display = 'block'
}

singIn.onclick = () => {
    Modal.style.display = 'flex'
    hasSingIn.style.display = 'block'
}

function lostModal() {
    Modal.style.display = 'none'
    hasRegistration.style.display = 'none'
    hasSingIn.style.display = 'none'
}

function transferSingIn() {
    hasRegistration.style.display = 'none'
    hasSingIn.style.display = 'block'
}

function transferRegistration() {
    hasRegistration.style.display = 'block'
    hasSingIn.style.display = 'none'
}
//
// //địa điểm trong ngoài shop
const laberTransfer = $('.label--transfer')
const transferNgoaiShop = $('#transfer--two')
const transferTrongShop = $('#transfer--one')
const selectionLable = $('.header__search-selection-label')
const iconCheckTrongShop = $('#check-one')
const iconCheckNgoaiShop = $('#check-two')

transferTrongShop.onclick = function() {
    laberTransfer.innerHTML = 'Trong Shop'
    iconCheckTrongShop.style.display = 'inline'
    iconCheckTrongShop.style.marginLeft = '5px'
    iconCheckNgoaiShop.style.display = 'none'

}

transferNgoaiShop.onclick = function() {
    laberTransfer.innerHTML = 'Ngoài Shop'
    iconCheckNgoaiShop.style.display = 'inline'
    iconCheckTrongShop.style.display = 'none'

}
//
// //danh mục
const categorys = $$('.category-item')

categorys.forEach ( category => 
    category.onclick = () => {
        
        categorys.forEach ( categori =>
            categori.classList.contains('category-item--active') ? categori.classList.remove('category-item--active') : null
                               
        )
        category.classList.toggle("category-item--active")
    }
)
//
// //filter
let click = 1
let startPage = 1
let endPage = 4
const changePage = $('.home-filter__page-current')
const disabledBtnChangePage = $$('.home-filter__page-btn')
function nextPage() {
    click--
    if(click <= startPage) 
    {
    click = startPage
    disabledBtnChangePage[0].classList.add('btn--disabled')
        }
    else if(click != startPage || click != endPage) {
    disabledBtnChangePage[0].classList.remove('btn--disabled')
    disabledBtnChangePage[1].classList.remove('btn--disabled')
        }

    changePage.innerText = click
}

function backPage() {
    click++
    if(click >= endPage) 
    {
    click = endPage
    disabledBtnChangePage[1].classList.add('btn--disabled')
        }
    else if(click != startPage || click != endPage) {
        disabledBtnChangePage[0].classList.remove('btn--disabled')
        disabledBtnChangePage[1].classList.remove('btn--disabled')
        }

    changePage.innerText = click

}
//
// //
const heartColor = $$('.product--item__like')
heartColor.forEach(heartcolor => 
    heartcolor.onclick = () =>
    heartcolor.classList.toggle('product--item__like-liked')
    
    )




