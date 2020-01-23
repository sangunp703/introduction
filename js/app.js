var slideToggle = true
var slideTimer
var slideFrequecy = 4000

window.onload = () => {
  // header hover 효과
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

  // about section 아이콘 움직임
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

  var isScrolling, start, end, distance
  const scroll_box = document.querySelector('.scroll-box')
  const header_progress = document.querySelector('.header__progress')

  window.addEventListener(
    'scroll',
    e => {
      if (!start) {
        start = window.pageYOffset
      }

      window.clearTimeout(isScrolling)

      isScrolling = setTimeout(() => {
        end = window.pageYOffset
        distance = end - start

        const screenPercentage = 100 - (window.innerHeight / document.body.clientHeight) * 100
        const progressPercentage = (window.scrollY / document.body.clientHeight) * 100

        header_progress.style.width = (progressPercentage / screenPercentage) * 100 + '%'
        if (window.pageYOffset >= 10) {
          scroll_box.style.opacity = '0'
        } else {
          scroll_box.style.opacity = '1'
        }

        start = null
        end = null
        distance = null
      }, 66)
    },
    false
  )

  // work section 슬라이드 이벤트
  const left_arrow = document.querySelector('.arrow-box__left-arrow')
  const right_arrow = document.querySelector('.arrow-box__right-arrow')
  const slides = document.querySelectorAll('.work-box')
  const control = document.querySelector('.arrow-box__control')

  const movePrev = e => {
    var index = 0
    for (var i = 0; i < slides.length; i++) {
      // 현재 슬라이드가 몇번 째인지 기억
      if (slides[i].classList.contains('current-slide')) {
        index = i
      }
    }
    // 슬라이드 정보 모두 삭제
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove('prev-slide', 'current-slide', 'next-slide')
    }

    // 슬라이드 정보 부여
    if (index === 0) {
      slides[slides.length - 1].classList.add('current-slide')
      slides[slides.length - 2].classList.add('prev-slide')
      slides[index].classList.add('next-slide')
    } else if (index === 1) {
      slides[index - 1].classList.add('current-slide')
      slides[slides.length - 1].classList.add('prev-slide')
      slides[index].classList.add('next-slide')
    } else {
      slides[index - 1].classList.add('current-slide')
      slides[index - 2].classList.add('prev-slide')
      slides[index].classList.add('next-slide')
    }
  }

  const moveNext = e => {
    var index = 0
    for (var i = 0; i < slides.length; i++) {
      // 현재 슬라이드가 몇번 째인지 기억
      if (slides[i].classList.contains('current-slide')) {
        index = i
      }
    }
    // 슬라이드 정보 모두 삭제
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove('prev-slide', 'current-slide', 'next-slide')
    }

    // 슬라이드 정보 부여
    if (index === slides.length - 1) {
      slides[0].classList.add('current-slide')
      slides[index].classList.add('prev-slide')
      slides[1].classList.add('next-slide')
    } else if (index === slides.length - 2) {
      slides[index + 1].classList.add('current-slide')
      slides[index].classList.add('prev-slide')
      slides[0].classList.add('next-slide')
    } else {
      slides[index + 1].classList.add('current-slide')
      slides[index].classList.add('prev-slide')
      slides[index + 2].classList.add('next-slide')
    }
  }

  slideTimer = setInterval(() => {
    moveNext()
  }, slideFrequecy)

  const arrow_box_control = document.querySelector('.arrow-box__control')

  const toggleSlide = () => {
    if (slideToggle) {
      arrow_box_control.src = '../assets/image/play.png'
      clearInterval(slideTimer)
      slideToggle = false
    } else {
      arrow_box_control.src = '../assets/image/pause.png'
      slideTimer = setInterval(() => {
        moveNext()
      }, slideFrequecy)
      slideToggle = true
    }
  }

  left_arrow.addEventListener('click', movePrev)
  right_arrow.addEventListener('click', moveNext)
  control.addEventListener('click', toggleSlide)

  // work 사진 변경 이벤트
  const screenshot_box_smalls = document.querySelectorAll('.screenshot-box__small')

  for (var i = 0; i < screenshot_box_smalls.length; i++) {
    screenshot_box_smalls[i].addEventListener('click', e => {
      const screenshot_box_big = e.currentTarget.parentNode.parentNode.querySelector('.screenshot-box__big')
      const temp = screenshot_box_big.src
      screenshot_box_big.src = e.currentTarget.src
      e.currentTarget.src = temp
    })
  }
}
