// spreadsheet ID
const spreadsheetId = '13Ung0o2rsVUqBBWg93qLTPoT9_RiyVgXE0Dv-Zn36DI';
// nama Sheet (default adalah Sheet1)
const sheetName = 'Sheet1';

function loadFormResponses() {
    const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;
    fetch(url)
        .then(response => response.text())
        .then(responseText => {
            const data = JSON.parse(responseText.substring(47).slice(0, -2));
            const carouselInner = document.querySelector('.carousel-inner');
            let columnsPerRow = 2; // Jumlah kolom per baris

            const createCarouselItem = (startIndex) => {
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');

                const container = document.createElement('div');
                container.classList.add('container');

                const row = document.createElement('div');
                row.classList.add('row', 'mx-md-5', 'mx-5');

                for (let j = startIndex; j < startIndex + columnsPerRow; j++) {
                    const dataIndex = j;
                    if (dataIndex >= data.table.rows.length) {
                        break; // Jika sudah melebihi jumlah data, hentikan perulangan
                    }

                    const col = document.createElement('div');
                    col.classList.add('col-md-6', 'text-white');
                    console.log(responseText)
                    const komentar = data.table.rows[dataIndex].c[17].v;
                    const nama = data.table.rows[dataIndex].c[2].v;
                    const pekerjaan = data.table.rows[dataIndex].c[4].v;

                    col.innerHTML = `
                        <div class="d-flex flex-column gap-3">
                            <img src="assets/img/icons/petik-dua.png" width="30" alt="">
                            <p>${komentar}</p>
                            <div class="d-flex gap-4 align-items-center">
                                <img src="assets/img/img-responden.png" class="d-block" width="70" height="70" alt="">
                                <div>
                                    <h5>${nama}</h5>
                                    <p>${pekerjaan}</p>
                                </div>
                            </div>
                        </div>
                    `;

                    row.appendChild(col);
                }

                container.appendChild(row);
                carouselItem.appendChild(container);

                if (startIndex === 0) {
                    carouselItem.classList.add('active');
                }

                return carouselItem;
            };

            // Tambahkan kode untuk menampilkan jumlah total
            const totalResponses = data.table.rows.length;
            const jumResponses = document.querySelector('#jumRespon');
            const totalElement = document.createElement('h1');
            const textBiasa = document.createElement('h3');
            totalElement.classList.add('bg-primary', 'text-white', 'text-center', 'rounded', 'p-3');
            textBiasa.innerHTML = 'orang bergabung dalam program ini!';
            totalElement.innerHTML = `${totalResponses}`;
            jumResponses.appendChild(totalElement);
            jumResponses.appendChild(textBiasa);

            const updateCarouselItems = () => {
                carouselInner.innerHTML = '';

                for (let i = 0; i < data.table.rows.length; i += columnsPerRow) {
                    const carouselItem = createCarouselItem(i);
                    carouselInner.appendChild(carouselItem);

                }
            };

            const handleResize = () => {
                if (window.innerWidth < 992) {
                    columnsPerRow = 1;
                } else {
                    columnsPerRow = 2;
                }

                updateCarouselItems();
            };

            handleResize();

            window.addEventListener('resize', handleResize);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

window.onload = loadFormResponses;