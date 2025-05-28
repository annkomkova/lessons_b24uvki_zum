document.addEventListener('DOMContentLoaded', () => {
  addNewRow()
})

function addNewRow() {
  const button = document.querySelector('button')

  button.addEventListener('click', () => {
    let week = document.querySelector('input[name="week"]').value
    let theme = document.querySelector('input[name="theme"]').value
    let date = document.querySelector('input[name="date"]').value
    let subject = document.querySelector('select[name="subject"]').value
    let type = document.querySelector('select[name="type"]').value

    const weekTag = document.createElement('td')
    weekTag.innerHTML = week

    const themeTag = document.createElement('td')
    themeTag.innerHTML = theme

    const dateTag = document.createElement('td')
    dateTag.innerHTML = date

    let subSpanColor
    if (subject === 'Технологии') {
      subSpanColor = 'spanRed'
    } else if (subject === 'Арт-практика') {
      subSpanColor = 'spanBlue'
    }

    let typeSpanColor
    if (type === 'Лекция') {
      typeSpanColor = 'spanGold'
    } else if (type === 'Воркшоп') {
      typeSpanColor = 'spanGreen'
    } else if (type === 'Домашка') {
      typeSpanColor = 'spanPink'
    } else if (type === 'Ревью') {
      typeSpanColor = 'spanRed'
    }

    const subjectTag = document.createElement('td')
    const subjectSpan = document.createElement('span')
    subjectSpan.classList.add(`${subSpanColor}`)
    subjectSpan.innerHTML = subject
    subjectTag.appendChild(subjectSpan)

    const typeTag = document.createElement('td')
    const typeSpan = document.createElement('span')
    typeSpan.classList.add(`${typeSpanColor}`)
    typeSpan.innerHTML = type
    typeTag.appendChild(typeSpan)

    const row = document.createElement('tr')

    row.appendChild(weekTag)
    row.appendChild(themeTag)
    row.appendChild(subjectTag)
    row.appendChild(dateTag)
    row.appendChild(typeTag)
    row.appendChild(document.createElement('td'))

    const tbody = document.querySelector('tbody')
    tbody.appendChild(row)

    document.querySelectorAll('input').forEach((input) => {
      input.value = ''
    })
  })
}
