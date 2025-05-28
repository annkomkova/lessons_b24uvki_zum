const afisha = [
  {
    date: '17 апреля (четверг)',
    events: [
      {
        time: '18:00',
        description: 'МАСТЕР-КЛАССЫ для индивидуальных посетителей.'
      },
      {
        time: '18:30',
        description:
          'ЭКСКУРСИЯ по музею. Красиво и увлекательно об истории освещения Москвы. Вы прогуляетесь по вечерним улицам столицы разных эпох. Интересно и взрослым, и детям. Длительность: 1 час.'
      }
    ]
  },
  {
    date: '18 апреля (пятница)',
    events: [
      {
        time: '19:30',
        description: 'МАСТЕР-КЛАССЫ для индивидуальных посетителей.'
      },
      {
        time: '20:00',
        description:
          'ЭКСКУРСИЯ по музею. Красиво и увлекательно об истории освещения Москвы. Вы прогуляетесь по вечерним улицам столицы разных эпох. Интересно и взрослым, и детям. Длительность: 1 час.'
      }
    ]
  },
  {
    date: '19 апреля (суббота)',
    events: [
      {
        time: '12:30',
        description: 'МАСТЕР-КЛАССЫ для индивидуальных посетителей.'
      },
      {
        time: '13:00',
        description:
          'ЭКСКУРСИЯ по музею. Красиво и увлекательно об истории освещения Москвы. Вы прогуляетесь по вечерним улицам столицы разных эпох. Интересно и взрослым, и детям. Длительность: 1 час.'
      },
      {
        time: '17:00',
        description: 'Дополнительная ЭКСКУРСИЯ по музею.'
      }
    ]
  }
]

document.addEventListener('DOMContentLoaded', () => {
  createAfishaCards()
})

function createAfishaCards() {
  afisha.forEach((day) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const header = document.createElement('h3')
    header.innerHTML = day.date

    const events = document.createElement('div')
    events.classList.add('events')

    day.events.forEach((event) => {
      const eventTag = document.createElement('div')
      eventTag.classList.add('event')

      const eventTime = document.createElement('p')
      eventTime.classList.add('event-time')
      eventTime.innerHTML = event.time

      const eventDescription = document.createElement('p')
      eventDescription.classList.add('event-description')
      eventDescription.innerHTML = event.description

      eventTag.appendChild(eventTime)
      eventTag.appendChild(eventDescription)
      events.appendChild(eventTag)
    })

    card.appendChild(header)
    card.appendChild(events)

    document.querySelector('#afisha').appendChild(card)
  })
}
