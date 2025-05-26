


//CREATE CONFIRMATION WINDOW TO DELETE RECORD. RECORD DELETION ON PASSING DATA-LINK ATTRIBUTE  AND GOING TO THE LINK




function createConfirmWindowDeleteRow(){
    const deleteButton = document.querySelectorAll(".delete_button")

    const modalContainer = document.querySelector(".modal-window-container");
    const confirmationModalLiteral = `
     <div class="confirmationWindowModal">
        <img class="cross_modal_admin exit-modal exit_modal_trigger"src="../public/imgs/icons/cross.svg" alt="">

        <div class="buttons-message-container">
            <p>Are you sure you want to delete this record?</p>
            <div class="buttons-ok-cancel">
                <button class="accept_button btn btn-primary btn-round">OK</button>
                <button class="exit-modal btn btn-primary btn-round exit_modal_trigger">Cancel</button>
            </div>

        </div>
    </div>

    `

    deleteButton.forEach(button => {

        button.addEventListener("click", ()=>{

            modalContainer.innerHTML=confirmationModalLiteral;

            const acceptButton = document.querySelector(".accept_button")
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    let selectedDeleteLink = button.getAttribute("data-link");

                    window.location.href = `${selectedDeleteLink}`;
                }

            })

            acceptButton.addEventListener("click", ()=>{
                let selectedDeleteLink = button.getAttribute("data-link");

                window.location.href = `${selectedDeleteLink}`;
            })



            closeModal()
        })
    });





}
createConfirmWindowDeleteRow()

// ------------change comment status-----------
function changeStatusComments(){
    const allButtons = document.querySelectorAll(".change_status_button");
    allButtons.forEach(changeButton=>{
        changeButton.addEventListener("click", ()=>{
            let selectedchangeLink = changeButton.getAttribute("data-link");

            window.location.href = `${selectedchangeLink}`;
        })
    })


}

changeStatusComments()


function closeModal(){
    const modalContainer = document.querySelector(".modal-window-container");
    const modalExits = document.querySelectorAll(".exit_modal_trigger");
    modalExits.forEach(ele=>ele.addEventListener("click", ()=>{

        modalContainer.innerHTML="";

    }))
}

function SendDataAjax(sendData, file) {
    return new Promise((resolve, reject) => {
        $.post(file, {data: sendData}, function(data) {
            resolve(data);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            reject(errorThrown);
        });
    });
  }


function createTeamMemberContentWindow(){
    const postButtons = document.querySelectorAll(".work_link")
    const modalContainer = document.querySelector(".modal-window-container");

    postButtons.forEach(button => {

        button.addEventListener("click", ()=>{
            const teamMemberId = button.getAttribute("work_id");
            SendDataAjax(teamMemberId, "./ajax/work_modal.php")
            .then(data => {
                modalContainer.innerHTML=data;
                expandWindowModal()
                closeModal()


            })
            .catch(error => {
                console.error('Error:', error);
            });



        })
    });





}
createTeamMemberContentWindow()





// ------------------expand modal window------------------------
function expandWindowModal(){
    const expandIcon = document.querySelector(".expand-icon");
    const windowModal = document.querySelector(".confirmationWindowModal");
    expandIcon&&expandIcon.addEventListener("click", ()=>{
        windowModal.classList.contains("expanedWindow")?
        windowModal.classList.remove("expanedWindow"):
        windowModal.classList.add("expanedWindow");
    })
}
