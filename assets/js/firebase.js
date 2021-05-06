const instance = axios.create({
  baseURL: "https://shs-advertising-default-rtdb.europe-west1.firebasedatabase.app/", 
});

const container = document.querySelector(".portfolio-container");
// const loading = document.querySelector('.loading');

// store last document retrieved
let latestDoc = null;

const getNextReviews = () => {
  return instance

    .get("images.json")
    .then((res) => res)
    .then((data) => {
      data.data;
      // let data = data.data;
      let files = data.data;
      console.log(files);

      // output docs
      let template = "";
      for (const key in data) {
        const { url } = data[key];
        template += `
        <div class="card">
          <h2>${url}</h2>
        </div>
      `;
      }
      container.innerHTML += template;

      // update latest doc
      let lastDataKey = Object.keys(files)[Object.keys(files).length - 1];
      console.log(lastDataKey);
    });
  const databaseRef = projectFirestore.ref("images/").limitToFirst(5);

  // databaseRef.get().then((snapshot) => {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   }
  // });

  // const data = await fetch("https://shs-advertising-default-rtdb.europe-west1.firebasedatabase.app/");

  // const data = await databaseRef.get((snapshot) => snapshot.val());
  // console.log(data);

  // unattach event listeners if no more docs
  if (data.empty) {
    loadMore.removeEventListener("click", handleClick);
    // container.removeEventListener('scroll', handleScroll);
  }
};

// load data on DOM loaded
window.addEventListener("DOMContentLoaded", () => getNextReviews());

// load more docs (button)
const loadMore = document.querySelector(".display-more-imgs");

const handleClick = () => {
  getNextReviews(latestDoc);
};

loadMore.addEventListener("click", handleClick);
