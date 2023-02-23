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
                this.state.map(({attribute,name,logo}) =>`
                <div id='card'>
                    <ul>
                        <div id = 'attribute'>${attribute}</div>
                        <button id="btn-modal"  type = "button">${name}</button>
                        <div id = 'logo'>${logo}</div>
                    </ul>
                </div>`).join('')          
    }
    this.render()

    const btnModal = document.querySelectorAll("#btn-modal")

    for(let i=0;i<btnModal.length;i++){
        btnModal[i].addEventListener("click", e => {
            openPopup(e.target)
        })  
    }
}