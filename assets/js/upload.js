const filters = ["", "filter-app", "filter-card", "filter-web"];
document.querySelector(".uploader").addEventListener("change", (e) => {
  const typesAllowed = ["image/png", "image/jpeg"];
  let selectedImages = Array.from(e.target.files);
  let template = ``;
  selectedImages.forEach((file) => {
    if (file && typesAllowed.includes(file.type)) {
      template += `
      <div>
        <img src="${URL.createObjectURL(file)}">
        <select class="form-select" aria-label="Default select example">
          <option selected>Ընտրեք filter</option>
          <option>Filter 1</option>
          <option>Filter 2</option>
          <option>Filter 3</option>
        </select>
      </div>
      `;
      file.filter = filters[0];
    } else {
      alert("Please select an image file (png or jpg)");
    }
  });
  previewData(template, selectedImages);
});

const previewData = (template, selectedImages) => {
  if (template) {
    document.querySelector(".upload-btn").style.display = "none";
    document.querySelector(".container").innerHTML = template;
    document.querySelector(".container").style.display = "flex";
    document.querySelector(".confirm").style.display = "block";
    getFilters(selectedImages);
    document.querySelector(".sumbit-btn").addEventListener("click", (e) => {
      sendToDatabase(selectedImages);
    });
  }
};

const getFilters = (selectedImages) => {
  const select = document.querySelectorAll(".form-select");
  select.forEach((item, index) => {
    item.addEventListener("change", (e) => {
      selectedImages[index].filter = filters[item.selectedIndex];
      console.log(selectedImages);
    });
  });
};

const sendToDatabase = (selectedImages) => {
  selectedImages.forEach((file) => {
    const storageRef = projectStorage.ref("gallery/" + file.name);
    const databaseRef = projectFirestore.ref("images/");
    const newImageRef = databaseRef.push();

    storageRef.put(file).on(
      "state_changed",
      (snap) => {},
      (err) => {
        console.log(err);
        document.querySelector(".message h2").textContent = "Գործողությունը ձախողվեց!";
        document.querySelector(".message").style.display = "block";
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const name = file.name;
        const filter = file.filter;
        await newImageRef.set({ url, name, filter });
        document.querySelector(".message").style.display = "block";
        document.querySelector(".message h2").textContent = "Նկարները հաջողությամբ տեղադրվել են!";
      }
    );
  });
};
