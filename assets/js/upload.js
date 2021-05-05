document.querySelector(".uploader").addEventListener("change", (e) => {
  const typesAllowed = ["image/png", "image/jpeg"];
  const selectedImages = e.target.files;
  Array.from(selectedImages).forEach((file) => {
    if (file && typesAllowed.includes(file.type)) {
      const storageRef = projectStorage.ref("gallery/" + file.name);
      const databaseRef = projectFirestore.ref("images/");
      const newImageRef = databaseRef.push();

      storageRef.put(file).on(
        "state_changed",
        (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          console.log(percentage);
        },
        (err) => {
          console.log(err);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          const name = file.name;
          const filter = "";
          await newImageRef.set({ url, name, filter });
          const imgElement = document.createElement("img");
          imgElement.src = url;
          document.body.appendChild(imgElement);
        }
      );
    } else {
      console.log("Please select an image file (png or jpg)");
    }
  });
});
