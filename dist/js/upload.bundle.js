(self.webpackChunkellen_kelley_github_io=self.webpackChunkellen_kelley_github_io||[]).push([[650],{522:()=>{const r=["","filter-app","filter-card","filter-web"];document.querySelector(".uploader").addEventListener("change",e=>{const t=["image/png","image/jpeg"];let l=Array.from(e.target.files),o="";l.forEach(e=>{e&&t.includes(e.type)?(o+=`
      <div>
        <img src="${URL.createObjectURL(e)}">
        <select class="form-select" aria-label="Default select example">
          <option selected>Ընտրեք filter</option>
          <option>Filter 1</option>
          <option>Filter 2</option>
          <option>Filter 3</option>
        </select>
      </div>
      `,e.filter=r[0]):alert("Please select an image file (png or jpg)")}),n(o,l)});const n=(e,t)=>{e&&(document.querySelector(".upload-btn").style.display="none",document.querySelector(".container").innerHTML=e,document.querySelector(".container").style.display="flex",document.querySelector(".confirm").style.display="block",l(t),document.querySelector(".sumbit-btn").addEventListener("click",e=>{o(t)}))},l=o=>{const e=document.querySelectorAll(".form-select");e.forEach((t,l)=>{t.addEventListener("change",e=>{o[l].filter=r[t.selectedIndex],console.log(o)})})},o=e=>{e.forEach(o=>{const r=projectStorage.ref("gallery/"+o.name),e=projectFirestore.ref("images/"),n=e.push();r.put(o).on("state_changed",e=>{},e=>{console.log(e),document.querySelector(".message h2").textContent="Գործողությունը ձախողվեց!",document.querySelector(".message").style.display="block"},async()=>{var e=await r.getDownloadURL(),t=o.name,l=o.filter;await n.set({url:e,name:t,filter:l}),document.querySelector(".message").style.display="block",document.querySelector(".message h2").textContent="Նկարները հաջողությամբ տեղադրվել են!"})})}}},e=>{"use strict";e(e.s=522)}]);