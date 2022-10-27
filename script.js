const form = document.querySelector("form");
const formData = {};

form.elements.btn.addEventListener("click", submit);

function submit() {
  formData.name = form.elements.name.value;
  formData.genres = form.elements.genre.value.split(" ");
  formData.seasons = form.elements.season.value;
  formData.director = form.elements.director.value;
  for (i = 0; i < form.elements.rating.length; i++) {
    if (form.elements.rating[i].checked) {
      formData.rating = i;
    }
  }
  formData.ongoing = form.elements.ongoing.checked ? true : false;
  addShow();
  console.log(JSON.stringify(formData));
}

function addShow() {
  const options = {
    method: "POST",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsaW5hdmZ5aWN3bHBoeHFjdWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MzgsImV4cCI6MTk4MjE3NDczOH0.sH39fs77wgV-iX0uDQcTTVPsRNaadl5fNTNB25rpZOo",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsaW5hdmZ5aWN3bHBoeHFjdWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MzgsImV4cCI6MTk4MjE3NDczOH0.sH39fs77wgV-iX0uDQcTTVPsRNaadl5fNTNB25rpZOo",
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(formData),
  };

  fetch("https://clinavfyicwlphxqcudl.supabase.co/rest/v1/tvshows", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
