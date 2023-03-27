export default function Popup({btnModal,initialState, onClose}){
    const $modal_bg = document.createElement('div')
    btnModal.appendChild($modal_bg)
    $modal_bg.setAttribute("class","modal-overlay")
    $modal_bg.setAttribute("id","modal")
    // btnModal.after($modal_bg)
    
      
    this.state = initialState;
  
    this.setState = nextState => {
        this.state = nextState
        this.render()
    }
    
    this.render = () => {
        if(this.state){
            const {name,explain} = this.state
            $modal_bg.innerHTML =`
                    <div class="modal-window">
                        <div class="title">
                            <h2>${name}</h2>
                        </div>
                        <div class="close-area">X</div>
                        <div class="content">
                            <p>${explain}</p>
                        </div>    
                        <div class = "detail">자세히 확인하기</div>
                    </div>
             ` 
        }  
        else{ 
            $modal_bg.remove()
        }    
    }  
    
    this.render()

    const closeBtn = document.querySelector(".close-area")
    console.log(closeBtn)
    closeBtn.addEventListener('click', (e) => {
        onClose()   
    })

    window.addEventListener('keyup', e => {
        if(e.key === 'Escape'){
            onClose()
        }
    })
}
