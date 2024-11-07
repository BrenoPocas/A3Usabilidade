import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: Home()));

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
// 7a) Altere o icone
        leading: const Icon(Icons.android),
// 7b) Altere o titulo
        title: const Text('Android'),
      ),
      body: const Center(
        child: Text(
// 7c) Meu nome na cor amarela
          'Lorrayne Santana',
          textDirection: TextDirection.ltr,
          style:
              TextStyle(color: Color.fromARGB(255, 251, 255, 0), fontSize: 30),
        ),
      ),
      backgroundColor: Colors.blue[900],
      floatingActionButton: const FloatingActionButton(
        onPressed: null,
// 7e) Altere o tooltip
        tooltip: 'É UM CASTELOOOOOO!',
// 7d) Altere o ícone do botão
        child: Icon(Icons.castle),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.endDocked,
    );
  }
}
