// console.log("Script running...")
burger = document.querySelector('.burger')
navbar=document.querySelector('.navbar')
logo=document.querySelector('.logo')


burger.addEventListener('click',()=>{
    logo.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})


// burger = document.querySelector('.burger')
// navbar1=document.querySelector('.navbar1')
// logo=document.querySelector('.nav-list1')


// burger.addEventListener('click',()=>{
//     nav-list1.classList.toggle('v-class-resp'); 
//     navbar1.classList.toggle('h-nav-resp');
// })

// document.querySelector('.cross').style.display='none';
// document.querySelector('.hamburger').addEventListener("click", ()=>{
//     document.querySelector('.sidebar').classList.toggle('sidebargo')
//     if(document.querySelector('.sidebar').classList.contains('sidebargo')){
//         document.querySelector('.ham').style.display='inline'
//         document.querySelector('.cross').style.display='none'
//     }
//     else{
//         document.querySelector('.ham').style.display='none'
//         setTimeout(() => {
//             document.querySelector('.cross').style.display='inline'
//         }, 300);
//     }
// })