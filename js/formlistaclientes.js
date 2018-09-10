var botaocad = document.querySelector("#botaocadastrar");

botaocad.addEventListener("click", function (event) {
	event.preventDefault();

	var form = document.querySelector("#cadcliente");

	var nome = form.nome.value;
	var data = form.data.value;

	var user = document.createElement("tr");

	var nometd = document.createElement("td");
	var datatd = document.createElement("td");

	nometd.textContent = nome;
	datatd.textContent = data;

	user.appendChild(nometd);
	user.appendChild(datatd);

	var tabela = document.querySelector("#tableuser");

	tabela.appendChild(user);
});