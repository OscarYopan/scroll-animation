const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(scroll){
  const TriggerBottom = window.innerHeight / 5 * 4 //Para saber o ponto do scoll para ativar animação
  
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect()
  })
}
