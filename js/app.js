window.onload = () => {
  const nav_items = document.querySelectorAll('.section-nav__item a')

  for (let i = 0; i < nav_items.length; i++) {
    nav_items[i].addEventListener('mouseover', e => {
      const choice = e.currentTarget.parentNode.querySelector('.section-nav__choice').style

      choice.height = '30%'
    })
    nav_items[i].addEventListener('mouseout', e => {
      const choice = e.currentTarget.parentNode.querySelector('.section-nav__choice').style

      choice.height = '0%'
    })
  }

  const details = document.querySelectorAll('.detail')

  for (let i = 0; i < details.length; i++) {
    details[i].addEventListener('mouseenter', e => {
      details[i].style.transform = 'rotate(-10deg)'
      setTimeout(e => {
        details[i].style.transform = 'rotate(10deg)'
        setTimeout(e => {
          details[i].style.transform = 'rotate(0deg)'
        }, 200)
      }, 200)
    })
    details[i].addEventListener('mouseleave', e => {
      details[i].style.transform = 'rotate(0deg)'
    })
  }
}
