import App from './App.js'

const $target = document.querySelector('.App')
new App({ $target })

const dummy_data = [
    {
      name: '청년 창업 지원 정책',
      attribute: '청년',
      logo: "http://www.w3.org/2000/svg", 
      explain: '부가 설명 1',
      policyLink: 'link.kr',
      favor: false
    },
    {
        name: '청년 창업 지원 정책',
      attribute: '청년',
      logo: "http://www.w3.org/2000/svg", 
      explain: '부가 설명 1',
      policyLink: 'link.kr',
      favor: false
    }
]

new Card({
    $target,
    initialState: dummy_data
})