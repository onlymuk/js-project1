// do something
// 요소 가져와라
// 처음 초기화 단계의 상태를 나타내라
// 버튼이 눌릴때 click 함수 생성
//click함수는 초기화 단계를 true로 변경해주고 그게 참이면 active 클래스 추가
//새로고침 관련 localStorage 사용
//바디스타일 보이게 바꿔주기
//저장 상태에 따라 active인지 아닌지 보여주기
const toggle = document.querySelector('i');
const nav = document.querySelector('nav');
const body = document.querySelector('body');
let isNavOpen = false;

toggle.addEventListener('click', () => {
    isNavOpen = !isNavOpen;
    if (isNavOpen) {
      nav.classList.add('active');
    } else {
      nav.classList.remove('active');
    }

   localStorage.setItem('isNavOpen', isNavOpen);
});

const navSave = localStorage.getItem('isNavOpen');

if (navSave === 'true') {
  nav.classList.add('active');
}

body.style.visibility = 'visible';