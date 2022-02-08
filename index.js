const tagsEl=document.getElementById('tags')
const textarea= document.getElementById('textarea')

textarea.focus()

// setting enter as the trigger point to run our pragramme
textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)
    if(e.key=='Enter'){
        setTimeout(()=>{
            e.target.value=''
        },10)
    randomSelect()
    }
})


// This below function will remove white space and will seperate the choices with commas
function createTags(input){
    const tags = input.split(',').filter(tag=> tag.trim()!=='').map(tag => tag.trim())
    // At first choices are empty
    tagsEl.innerHTML=''
    // Now adding the styles class for each tag that user made.
    tags.forEach(tag=>{
        // forEach will call a function for each element of a list
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText= tag
        
        tagsEl.appendChild(tagEl)

    })
}

function randomSelect(){
    const times = 30
// this below interval will keep on shifting the highlight button within the choices
    const interval= setInterval(() => {
        const randomTag = pickRandomTag()
        


        highlightTag(randomTag)

        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100);

    }, 100);

    // Now this below function will stop highlighting infinitely and chose a random choice to be picked
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag=pickRandomTag()
            highlightTag(randomTag)
        }, 100);

    }, times *100);
}

// THis below function will pick a random tag whenever it is called
function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*(tags.length))]
}
// adding and removing highlight class that we made
function highlightTag(tag){
    tag.classList.add('highlight')
}
function unhighlightTag(tag){
    tag.classList.remove('highlight')
}