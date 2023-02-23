export default function Popup(btnModal,initialState){
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
    
    this.render()

    // btnModal.addEventListener("click", e => {
    //     $modal_bg.style.display = "flex"
    // })

    const closeBtn = document.querySelectorAll(".close-area")
    const modal = document.querySelectorAll("#modal")
    for(let i=0;i<modal.length;i++){
        closeBtn[i].addEventListener("click", e => {
            modal[i].style.visibility = "hidden" //display = 'none'??
    })}
}