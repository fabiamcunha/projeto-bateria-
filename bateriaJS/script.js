// evento que toca a musica quando as tecla e liberada
document.body.addEventListener('keyup',(event)=>{
   playSound(event.code.toLowerCase())
})
// evento de click que aciona o play no input
document.querySelector('.composer button').addEventListener('click',()=>{
    let song=document.querySelector('#input').value
 if(song !==''){
     let songArray=song.split('')
     playComposition(songArray)
 }
})
// função  que dar o play no son quando  o evento de teclado e chamado
function playSound(sound){
    let audioElement=document.querySelector(`#s_${sound}`)
    let keyElement=document.querySelector(`div[data-key="${sound}"]`)
    
    if(audioElement){
        audioElement.currentTime=0
        audioElement.play();
    }
    if(keyElement){
        keyElement.classList.add('active')
        setTimeout(()=>{
            keyElement.classList.remove('active')
        },300);
    }
}
// funcao que criar o toque do input
function playComposition(songArray){
    let wait=0;
    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`)
        },wait)
        wait+=250
    }
}