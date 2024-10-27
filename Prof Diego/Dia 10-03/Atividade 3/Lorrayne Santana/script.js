class Veiculo {
    constructor(chassi, placa) {
        this._chassi = chassi;
        this._placa = placa;
    }

    get chassi() {
        return this._chassi;
    }

    get placa() {
        return this._placa;
    }
}

let veiculos = [];

function cadastrarVeiculo() {
    const chassi = document.getElementById("chassi").value;
    const placa = document.getElementById("placa").value;

    const novoVeiculo = new Veiculo(chassi, placa);
    veiculos.push(novoVeiculo);

    document.getElementById("chassi").value = "";
    document.getElementById("placa").value = "";

    exibirVeiculos();
}

function exibirVeiculos() {
    const veiculosContainer = document.getElementById("veiculos-container");
    veiculosContainer.innerHTML = "";

    veiculos.forEach(veiculo => {
        const p = document.createElement("p");
        p.textContent = `Chassi: ${veiculo.chassi} - Placa: ${veiculo.placa}`;
        veiculosContainer.appendChild(p);
    });
}