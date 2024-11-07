import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: Home()));

class Home extends StatefulWidget {
  @override
  HomeState createState() {
    return HomeState();
  }
}

class HomeState extends State<Home> {
  TextEditingController alturaController = TextEditingController();
  TextEditingController pesoController = TextEditingController();
  String resp = "";
  calcularIMC() {
    double altura = double.parse(alturaController.text.replaceAll(',', '.'));
    double peso = double.parse(pesoController.text.replaceAll(',', '.'));
    double imc = peso / (altura * altura);
    String imcFormatado = imc.toStringAsFixed(2);
    if (imc < 16) {
      resp = 'Magreza grave, IMC = $imcFormatado';
    } else if (imc < 17) {
      resp = 'Magreza moderada, IMC = $imcFormatado';
    } else if (imc < 18.5) {
      resp = 'Magreza leve, IMC = $imcFormatado';
    } else if (imc < 25) {
      resp = 'Saudável, IMC = $imcFormatado';
    } else if (imc < 30) {
      resp = 'Sobrepeso, IMC = $imcFormatado';
    } else if (imc < 35) {
      resp = 'Obesidade Grau I, IMC = $imcFormatado';
    } else if (imc < 40) {
      resp = 'Obesidade Grau II (severa), IMC = $imcFormatado';
    } else {
      resp = 'Obesidade Grau III (mórbida), IMC = $imcFormatado';
    }

    return resp;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Página Inicial'),
      ),
      body: Column(
        children: [
          Container(
            margin: const EdgeInsets.all(10),
            child: TextField(
              controller: alturaController,
              decoration: InputDecoration(
                suffixIcon: IconButton(
                  onPressed: () => alturaController.clear(),
                  icon: const Icon(Icons.clear),
                ),
                border: const OutlineInputBorder(),
                labelText: 'Informe sua altura em metros',
              ),
            ),
          ),
          Container(
            margin: const EdgeInsets.all(10),
            child: TextField(
              controller: pesoController,
              decoration: InputDecoration(
                suffixIcon: IconButton(
                  onPressed: () => pesoController.clear(),
                  icon: const Icon(Icons.clear),
                ),
                border: const OutlineInputBorder(),
                labelText: 'Informe seu peso em quilogramas',
              ),
            ),
          ),
          ElevatedButton(
            onPressed: () {
              setState(calcularIMC);
            },
            child: const Text(
              'Calcular IMC',
              style: TextStyle(
                fontSize: 20,
              ),
            ),
          ),
          Text(
            resp,
            style: const TextStyle(
              fontSize: 20,
              color: Colors.green,
              fontWeight: FontWeight.bold,
            ),
          )
        ],
      ),
    );
  }
}
