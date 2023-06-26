const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')

const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

//Set timeout before calling the function >> after 1.5 s
setTimeout(getData, 1500)


//This code could have come from API 
// Adding the header of image and replacing with nbsp;
function getData() {
    header.innerHTML = ('<img src="https://images.unsplash.com/photo-1481608726045-7407244fb7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="">')

    title.innerHTML = 'Web front-end developer with good talent'
    excerpt.innerHTML = "Web front-end development involves creating the user interface of a website or web application. It uses HTML for structure, CSS for styling, and JavaScript for interactivity. Front-end developers ensure the site is accessible, responsive, and performant, often using frameworks like React or Angula"
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="">'
    name.innerHTML = 'Yosef Eng'
    date.innerHTML = 'Jul 07,2023'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))

    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}
