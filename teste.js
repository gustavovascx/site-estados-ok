
async function carregarEstados() {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const estados = await response.json();

    const estadoSelect = document.getElementById('estado');
    estados.sort((a, b) => a.nome.localeCompare(b.nome)); 

    estados.forEach(estado => {
      const option = document.createElement('option');
      option.value = estado.id;
      option.textContent = estado.nome;
      estadoSelect.appendChild(option);
    });
  }


  async function carregarCidades() {
    const estadoId = document.getElementById('estado').value;
    const cidadeSelect = document.getElementById('cidade');
    cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>'; 

    if (estadoId) {
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`);
      const cidades = await response.json();

      cidades.sort((a, b) => a.nome.localeCompare(b.nome)); 

      cidades.forEach(cidade => {
        const option = document.createElement('option');
        option.value = cidade.id;
        option.textContent = cidade.nome;
        cidadeSelect.appendChild(option);
      });
    }
  }


  window.onload = carregarEstados;