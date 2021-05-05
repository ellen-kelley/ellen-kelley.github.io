const getData = async () => {
  const databaseRef = projectFirestore.ref("images/").limitToFirst(5);
  const query = databaseRef.on("value", (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    let lastDataKey = Object.keys(data)[Object.keys(data).length - 1];
    displayData(data);
    document.querySelector(".display-more-imgs").onclick = () => {
      getMoreData(lastDataKey);
    };
  });
};
getData();

const getMoreData = (lastDataKey) => {
  const databaseRef = projectFirestore.ref("images/").limitToFirst(5).startAfter(null, lastDataKey);
  databaseRef.on("value", (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    displayData(data);
  });
};

const displayData = (data) => {
  for (const key in data) {
    const { url } = data[key];
    document.querySelector(".portfolio-container").innerHTML += ` 
    <div class="col-lg-4 col-md-6 portfolio-item filter-app">
      <div class="portfolio-wrap">
        <img src="${url + ".png"}" class="img-fluid" alt="">
        <div class="portfolio-info">
        </div>
        <div class="portfolio-links">
          <a href="${url + ".png"}" data-gallery="portfolioGallery"
            class="portfolio-lightbox"><i class="bi bi-zoom-in"></i></a>
        </div>
      </div>
    </div>`;
  }
  setTimeout(function () {
    startPortfolio();
    removePreloader();
  }, 600);
};

const removePreloader = () => {
  let preloader = document.querySelector("#preloader");
  if (preloader) {
    preloader.remove();
  }
};

const startPortfolio = (callback) => {
  let portfolioContainer = document.querySelector(".portfolio-container");
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: ".portfolio-item",
    });
    let portfolioFilters = document.querySelectorAll("#portfolio-flters li");
    portfolioFilters.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        portfolioFilters.forEach((el) => {
          el.classList.remove("filter-active");
        });
        item.classList.add("filter-active");

        portfolioIsotope.arrange({
          filter: item.getAttribute("data-filter"),
        });
        portfolioIsotope.on("arrangeComplete", function () {
          AOS.refresh();
        });
      });
    });
  }
};
