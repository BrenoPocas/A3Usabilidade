import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: Home()));

class Home extends StatefulWidget {
  @override
  HomeState createState() {
    return HomeState();
  }
}

class HomeState extends State<Home> {
  TextEditingController comprimentoController = TextEditingController();
  TextEditingController alturaController = TextEditingController();
  TextEditingController larguraController = TextEditingController();
  String resp = "";

  calcularVolume() {
    if (comprimentoController.text.isNotEmpty &&
        alturaController.text.isNotEmpty &&
        larguraController.text.isNotEmpty) {
      double comprimento =
          double.parse(comprimentoController.text.replaceAll(',', '.'));
      double altura = double.parse(alturaController.text.replaceAll(',', '.'));
      double largura =
          double.parse(larguraController.text.replaceAll(',', '.'));
      double volume = comprimento * altura * largura;
      String volumeFormatado = volume.toStringAsFixed(2);
      resp = 'Volume = $volumeFormatado cm³';
      return resp;
    }
    return;
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
              controller: comprimentoController,
              decoration: InputDecoration(
                suffixIcon: IconButton(
                  onPressed: () => comprimentoController.clear(),
                  icon: const Icon(Icons.clear),
                ),
                border: const OutlineInputBorder(),
                labelText: 'Informe o comprimento em cm',
              ),
            ),
          ),
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
                labelText: 'Informe a altura em cm',
              ),
            ),
          ),
          Container(
            margin: const EdgeInsets.all(10),
            child: TextField(
              controller: larguraController,
              decoration: InputDecoration(
                suffixIcon: IconButton(
                  onPressed: () => larguraController.clear(),
                  icon: const Icon(Icons.clear),
                ),
                border: const OutlineInputBorder(),
                labelText: 'Informe a largura em cm',
              ),
            ),
          ),
          ElevatedButton(
            onPressed: () {
              setState(calcularVolume);
            },
            child: const Text(
              'Calcular volume',
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
