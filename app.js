let ul = document.getElementById('ul');
let home = document.getElementById('home');
let project = document.getElementById('project');
let contact = document.getElementById('contact');
let check = document.getElementById('check')

function myHome() {
    check.checked = false;
}
home.addEventListener('click', myHome)
project.addEventListener('click', myHome)
contact.addEventListener('click', myHome)

function activeHome() {
    home.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
    home.style.transition = '0.1s';
    project.style.backgroundColor = 'none';
    contact.style.backgroundColor = 'none'

}

window.onload = activeHome()
function activeProject() {
    project.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'
    project.style.transition = '0.1s';
    home.style.backgroundColor = 'transparent';
    contact.style.backgroundColor = 'transparent'

}

project.addEventListener('click', activeProject)

function activeContact() {
    contact.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'
    contact.style.transition = '0.1s';
    home.style.backgroundColor = 'transparent';
    project.style.backgroundColor = 'transparent'

}

contact.addEventListener('click', activeContact)

// VIDEO DATA
document.addEventListener("DOMContentLoaded", () => {

    // VIDEO DATA
    const videoData = [
        { title: "Fast Food Add", videoSrc: "./videos/FAST FOOD AD.mp4" },
        { title: "Milk Shake Add", videoSrc: "./videos/MILK SHAKE AD.mp4" },
        { title: "Nescafe Coffee Add", videoSrc: "./videos/Nescafe Coffee Motion Ad.mp4" },
        { title: "Refrigerator Shop Add", videoSrc: "./videos/REFRIGERATION SHOP AD..mp4" }
    ];

    const cardsContainer = document.getElementById('cardRander');

    videoData.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card-1");
        card.dataset.type = "video";
        card.dataset.src = item.videoSrc;
        card.dataset.title = item.title;

        card.innerHTML = `
            <div class="card-img">
                <video src="${item.videoSrc}" loop muted playsinline controls></video>
            </div>
            <div class="card-title">${item.title}</div>
        `;
        cardsContainer.appendChild(card);
    });

    // IMAGE DATA
    const imageData = [
        { src: "./images/anime-logo.jpg", title: "Anime Logo" },
        { src: "./images/profile-pic.jpg", title: "Profile Picture" },
        { src: "./images/service.jpg", title: "My Services" }
    ];

    const imageContainer = document.getElementById("imageRander");
    imageData.forEach(img => {
        const card = document.createElement("div");
        card.classList.add("gallery-card");
        card.dataset.type = "image";
        card.dataset.src = img.src;
        card.dataset.title = img.title;

        card.innerHTML = `
            <img src="${img.src}" alt="${img.title}">
            <div class="title">${img.title}</div>
        `;
        imageContainer.appendChild(card);
    });

    // MODAL
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-btn">&times;</button>
            <img class="modal-image" src="" alt="" style="display:none;">
            <video class="modal-video" controls style="display:none;"></video>
            <div class="caption"></div>
        </div>
    `;
    document.body.appendChild(modal);

    const modalImage = modal.querySelector(".modal-image");
    const modalVideo = modal.querySelector(".modal-video");
    const captionEl = modal.querySelector(".caption");
    const closeBtn = modal.querySelector(".close-btn");

    // OPEN MODAL VIDEO
    cardsContainer.addEventListener("click", e => {
        const card = e.target.closest(".card-1");
        if(!card) return;
        modalVideo.src = card.dataset.src;
        modalVideo.style.display = "block";
        modalVideo.play();

        modalImage.style.display = "none";
        captionEl.textContent = card.dataset.title;

        modal.classList.add("open");
        document.body.style.overflow = "hidden";
    });

    // OPEN MODAL IMAGE
    imageContainer.addEventListener("click", e => {
        const card = e.target.closest(".gallery-card");
        if(!card) return;
        modalImage.src = card.dataset.src;
        modalImage.style.display = "block";

        modalVideo.pause();
        modalVideo.style.display = "none";

        captionEl.textContent = card.dataset.title;
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
    });

    // CLOSE MODAL
    function closeModal() {
        modal.classList.remove("open");
        modalVideo.pause();
        modalVideo.src = "";
        modalVideo.style.display = "none";

        modalImage.src = "";
        modalImage.style.display = "none";

        document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", e => {
        if(e.target === modal) closeModal();
    });
});
