// Menu hamburguer
var hamburguer = document.querySelector(".hamburguer");
hamburguer.addEventListener("click", function(){
  let sidebar = document.querySelector(".sidebar").classList.toggle("show-menu");
})
// document.querySelector(".hamburguer").addEventListener("click", () =>
//     document.querySelector(".container").classList.toggle("show-menu")
// );

document.querySelector("#qtde").addEventListener("change", atualizarPreco);
document.querySelector("#js").addEventListener("change", atualizarPreco);
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco);
document.querySelector("#layout-não").addEventListener("change", atualizarPreco);

document.querySelector("#prazo").addEventListener("change", function () {
  const prazo = document.querySelector("#prazo").value
  document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
  atualizarPreco()
})

function atualizarPreco(){
  const qtde = document.querySelector("#qtde").value
  const temJS = document.querySelector("#js").checked
  const incluiLayout = document.querySelector("#layout-sim").checked
  const prazo = document.querySelector("#prazo").value

  let preco = qtde * 100;
  if (temJS) preco *= 1.1
  if (incluiLayout) preco += 500

 
  document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`;
}