import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: Home()));

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  HomeState createState() {
    return HomeState();
  }
}

class HomeState extends State<Home> {
  TextEditingController num01Controller = TextEditingController();
  TextEditingController num02Controller = TextEditingController();
  String resposta = "";
  somar() {
    int num01 = int.parse(num01Controller.text);
    int num02 = int.parse(num02Controller.text);
    int resultado = num01 + num02;
    resposta = '$num01 + $num02 = $resultado';
    return resposta;
  }

  subtrair() {
    int num01 = int.parse(num01Controller.text);
    int num02 = int.parse(num02Controller.text);
    int resultado = num01 - num02;
    resposta = '$num01 - $num02 = $resultado';
    return resposta;
  }

  multiplicar() {
    int num01 = int.parse(num01Controller.text);
    int num02 = int.parse(num02Controller.text);
    int resultado = num01 * num02;
    resposta = '$num01 x $num02 = $resultado';
    return resposta;
  }

  dividir() {
    double num01 = double.parse(num01Controller.text);
    double num02 = double.parse(num02Controller.text);
    double resultado = num01 / num02;
    resposta = '$num01 ÷ $num02 = $resultado';
    return resposta;
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
              controller: num01Controller,
              decoration: InputDecoration(
                suffixIcon: IconButton(
                  onPressed: () => num01Controller.clear(),
                  icon: const Icon(Icons.clear),
                ),
                border: const OutlineInputBorder(),
                labelText: 'informe o primeiro número',
              ),
            ),
          ),
          Container(
            margin: const EdgeInsets.all(10),
            child: TextField(
              controller: num02Controller,
              decoration: InputDecoration(
                suffixIcon: IconButton(
                  onPressed: () => num02Controller.clear(),
                  icon: const Icon(Icons.clear),
                ),
                border: const OutlineInputBorder(),
                labelText: 'informe o segundo número',
              ),
            ),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,            
            children: [
              ElevatedButton(
                onPressed: () {
                  setState(somar);
                },
                child: const Text(
                  'Somar',
                  style: TextStyle(
                    fontSize: 20,
                  ),
                ),
              ),
              ElevatedButton(
                onPressed: () {
                  setState(multiplicar);
                },
                child: const Text(
                  'Multiplicar',
                  style: TextStyle(
                    fontSize: 20,
                  ),
                ),
              ),
              ElevatedButton(
                onPressed: () {
                  setState(subtrair);
                },
                child: const Text(
                  'Subtrair',
                  style: TextStyle(
                    fontSize: 20,
                  ),
                ),
              ),
              ElevatedButton(
                onPressed: () {
                  setState(dividir);
                },
                child: const Text(
                  'Dividir',
                  style: TextStyle(
                    fontSize: 20,
                  ),
                ),
              )
            ],
          ),
          Text(
            resposta,
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
