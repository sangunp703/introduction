var slideToggle = true
var slideTimer
var slideFrequecy = 3000

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

const toggleSlide = () => {
  if (slideToggle) {
    clearInterval(slideTimer)
    slideToggle = false
  } else {
    slideTimer = setInterval(() => {
      moveNext()
    }, slideFrequecy)
    slideToggle = true
  }
}
