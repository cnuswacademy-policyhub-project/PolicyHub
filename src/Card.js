export default function Card({$target,initialState,openPopup}){
    const $container = document.createElement('div')
    $target.appendChild($container)
    $container.setAttribute("id","card_container")

    this.state = initialState;
  

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }
    
    this.render = () => {
        $container.innerHTML =
                this.state.map(({tag,name,logo}) =>`
                <div id='card'>
                    <ul class="card_ul">
                        <div id = 'tag'>${tag}</div>
                        <button id="btn-modal"  type = "button">${name}</button>
                        <div id ='logo'>
                            <img src="./src/svg/${logo}"></img>
                        </div>
                    </ul>
                </div>`).join('')
    }
    this.render()

    const $card = document.getElementById("card")

    // $card.addEventListener('click', (e) => {
    //     const btnModal = e.target.closest('#btn-modal')
    //     console.log(btnModal)
    //     if(btnModal){
    //         openPopup(btnModal)
    //     }
    // })

    const btnModal = document.querySelectorAll("#btn-modal")

    for(let i=0;i<btnModal.length;i++){
        btnModal[i].addEventListener("click", e => {
            openPopup(e.target)
        })  
    }
}
