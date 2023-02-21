function Card({$target,initialState}){
    const $container = document.createElement('div')
    $target.appendChild($container)

    this.state = initialState;

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }
    
    this.render = () => {
        $container.innerHTML =`
            <ul>
                ${this.state.map(({attribute,name,logo}) =>`
                <div id = 'attribute'>${attribute}</div>
                <div id = 'name'>${name}</div>
                <div id = 'logo'>${logo}</div>`).join('')}
            </ul>
            `               
    }
    
    this.render()
}