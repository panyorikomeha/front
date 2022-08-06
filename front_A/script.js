const url = "https://catfact.ninja/fact";

function onButtonClick(){
  $.getJSON(url, (data) => {
    let fact = data.fact;
    document.getElementById("sentence").innerText = fact;
  });
}
