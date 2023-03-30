import App from './App.js'

export const dummy_data = [
    {
      name: '청년 창업 지원 정책',
      tag: '청년',
      logo: "고용노동부.svg", 
      description: '부가 설명 1',
      policyLink: 'https://www.moel.go.kr/index.do',
      favor: false
    },
    {
      name: '중년 창업 지원 정책',
      tag: '중년',
      logo: "국토교통부.svg", 
      description: '부가 설명 2',
      policyLink: 'http://www.molit.go.kr/portal.do',
      favor: false
    },
    {
      name: '노년 창업 지원 정책',
      tag: '노년',
      logo: "보건복지부.svg", 
      description: '부가 설명 3',
      policyLink: 'https://www.mohw.go.kr/react/index.jsp',
      favor: false
    }
]

const $target = document.querySelector('.App')
new App({ 
  $target, 
  initialState: dummy_data })
