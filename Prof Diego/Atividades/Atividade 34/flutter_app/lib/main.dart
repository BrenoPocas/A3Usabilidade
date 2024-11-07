import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(
      home: Home(),
    ));

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  HomeState createState() {
    return HomeState();
  }
}

class HomeState extends State<Home> {
  int numeroVezes = 0;
  String parOuImpar = "par";
  void cliqueDoBotao() {
    numeroVezes = numeroVezes + 1;
    // 1) Altere o exemplo desta prática, para que ele informe se o número de vezes em que o botão foi pressionado é par ou ímpar. 
    parOuImpar = numeroVezes % 2 == 0 ? "par" : "impar";
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Página Inicial"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
                "Número de vezes em que o botão foi pressionado: $numeroVezes."),
                // 1) Altere o exemplo desta prática, para que ele informe se o número de vezes em que o botão foi pressionado é par ou ímpar. 
            Text("Esse numero é $parOuImpar"),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          setState(cliqueDoBotao);
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
