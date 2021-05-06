const initialamount = 10; //how many images to fetch initially
const loadAmount = 7; //how many images to fetch when clicking 'load more'

// Get initial images
const getData = async () => {
  const databaseRef = projectFirestore.ref("images/").limitToFirst(initialamount);
  queryForData(databaseRef);
};

window.addEventListener("DOMContentLoaded", () => getData());

// Get more images as needed
const handleClick = () => {
  lastDataKey = localStorage.getItem("lastKey");
  loadMoreData(lastDataKey);
};

const loadMore = document.querySelector(".display-more-imgs");
loadMore.addEventListener("click", handleClick);

const loadMoreData = (lastDataKey) => {
  const databaseRef = projectFirestore.ref("images/").limitToFirst(loadAmount).startAfter(null, lastDataKey);
  queryForData(databaseRef);
};

// Fetch data from the database
const queryForData = (databaseRef) => {
  const query = databaseRef.on("value", (snapshot) => {
    const data = snapshot.val();
    if (data) {
      displayData(data);

      const lastDataKey = Object.keys(data)[Object.keys(data).length - 1];
      localStorage.setItem("lastKey", lastDataKey);

      if (Object.keys(data).length < loadAmount) {
        loadMore.removeEventListener("click", handleClick);
        loadMore.style.display = "none";
      }
    } else {
      loadMore.removeEventListener("click", handleClick);
      loadMore.style.display = "none";
    }
  });
};

// Display data on the page
const displayData = (data) => {
  let template = "";
  for (const key in data) {
    const { url, filter } = data[key];
    template += ` 
    <div class="col-lg-4 col-md-6 portfolio-item ${filter} hidden">
      <div class="portfolio-wrap">
        <img src="${url + ".png"}" class="img-fluid" alt="" >
        <div class="portfolio-info">
        </div>
        <div class="portfolio-links">
          <a href="${url + ".png"}" data-gallery="portfolioGallery"
            class="portfolio-lightbox"><i class="bi bi-zoom-in"></i></a>
        </div>
      </div>
    </div>`;
  }
  document.querySelector(".portfolio-container").innerHTML += template;

  Promise.all(
    Array.from(document.images).map((img) => {
      if (img.complete) return Promise.resolve(img.naturalHeight !== 0);
      return new Promise((resolve) => {
        img.addEventListener("load", () => resolve(true));
        img.addEventListener("error", () => resolve(false));
      });
    })
  ).then((results) => {
    if (results.every((res) => res)) {
      startPortfolio();
      removePreloader();
      document.querySelectorAll(".portfolio-item").forEach((item) => {
        item.classList.remove("hidden");
      });
    }
  });
};

const removePreloader = () => {
  let preloader = document.querySelector("#preloader");
  if (preloader) {
    preloader.remove();
  }
};

const startPortfolio = () => {
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
        portfolioIsotope.on("arrangeComplete", () => {
          AOS.refresh();
        });
      });
    });
  }
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });
};
