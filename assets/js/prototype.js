document.getElementById('load-more-btn').addEventListener('click', function () {
    var container = document.getElementById('bengkel-container');
    var container2 = document.getElementById('bengkel-container2');
    var newBengkel = `
    <div class="bg-white shadow-sm p-3">
                            <div class="d-flex flex-md-row flex-column gap-4">
                                <a class="nav-link" href="#"><img src="../assets/img/bengkel/nusantara-motor.jpg"
                                        width="150" height="150" alt=""></a>
                                <div class="d-flex flex-column gap-2">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h5 class="fw-semibold mb-0"><a class="nav-link" href="#">Nusantara Motor</a>
                                        </h5>
                                        <button class="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">Detail</button>
                                    </div>
                                    <div class="d-flex" style="width: 20%; height: 20%;">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                    <p class="mb-0">JL. Letnan Jl. Jendral Suprapto No.21-22, Kauman Lama, Purwokerto
                                        Lor, Kec. Purwokerto Tim., Kabupaten Banyumas, Jawa Tengah 53114</p>
                                    <div class="d-flex gap-3">
                                        <div class="d-flex align-items-center justify-content-center gap-2">
                                            <svg width="18" height="13" viewBox="0 0 18 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.55001 13.0001L0.850006 7.3001L2.27501 5.8751L6.55001 10.1501L15.725 0.975098L17.15 2.4001L6.55001 13.0001Z"
                                                    fill="#EC1337" />
                                            </svg>
                                            <p class="mb-0">Montir Panggilan</p>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center gap-2">
                                            <svg width="18" height="13" viewBox="0 0 18 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.55001 13.0001L0.850006 7.3001L2.27501 5.8751L6.55001 10.1501L15.725 0.975098L17.15 2.4001L6.55001 13.0001Z"
                                                    fill="#EC1337" />
                                            </svg>
                                            <p class="mb-0">Service</p>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center gap-2">
                                            <svg width="18" height="13" viewBox="0 0 18 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.55001 13.0001L0.850006 7.3001L2.27501 5.8751L6.55001 10.1501L15.725 0.975098L17.15 2.4001L6.55001 13.0001Z"
                                                    fill="#EC1337" />
                                            </svg>
                                            <p class="mb-0">Buka 24 Jam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    `;
    container.innerHTML += newBengkel;
    container2.innerHTML += newBengkel;
});

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
