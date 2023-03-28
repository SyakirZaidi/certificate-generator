const formFirstPage = document.querySelector("form");
formFirstPage.addEventListener("submit", function (event) {
  // prevent default submit behavior
  event.preventDefault();

  // get values from inputs
  const nama = document.querySelector("#nama").value;
  // const sekolah = document.querySelector("#sekolah").value;
  const noKP = document.querySelector("#noKP").value;
  const namaProgram = document.querySelector("#namaProgram").value;
  const tarikh = document.querySelector("#tarikh").value;
  const tempat = document.querySelector("#tempat").value;

  // do some processing with the values, e.g. store them in localStorage
  localStorage.setItem("nama", nama);
  // localStorage.setItem("sekolah", sekolah);
  localStorage.setItem("noKP", noKP);
  localStorage.setItem("namaProgram", namaProgram);
  localStorage.setItem("tarikh", tarikh);
  localStorage.setItem("tempat", tempat);

  //   navigate to another page
  window.location.href = "paparSijil.html";
});
