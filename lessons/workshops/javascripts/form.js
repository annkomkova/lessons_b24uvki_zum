document.addEventListener('DOMContentLoaded', () => {
  placeholder()
})

function placeholder() {
  const placeholders = document.querySelectorAll('.placeholder::before')

  placeholders.forEach((placeholder) => {
    placeholder.addEventListener('click', () => {
      placeholder.classList.toggle('anim')
    })
  })
}
