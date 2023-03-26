export default function Keyword({$target, initialState, onKeywordInput, onEnter}) {
    const $keyword = document.createElement('input')
    $keyword.className = 'Keyword'
    $keyword.placeholder = '찾고 싶은 정책을 검색하세요'

    $target.appendChild($keyword)

    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        $keyword.value = this.state.value
    }

    $keyword.addEventListener('keyup', e => {
        $keyword.placeholder = "";
        if(e.key === 'Enter') {
            e.preventDefault()
            onEnter()
        } else {
            onKeywordInput(e.target.value)
        }
    })
}