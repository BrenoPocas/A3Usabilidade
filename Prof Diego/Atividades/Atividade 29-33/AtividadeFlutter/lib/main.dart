import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    // 5) Centralize a mensagem na tela.
    return const Center(
      // 3) Apresente uma mensagem na tela.
      child: Text(
        'Texto centralizado e estilizado.',
        textDirection: TextDirection.ltr,
        // 4) Aplique estilos de formatação à mensagem impressa.
        style: TextStyle(color: Colors.amber, fontSize: 24),
      ),
    );
  }
}

// 1) Possua uma classe para armazenar os dados dos clientes de uma loja.
class Cliente {
  String nome;
  String sobrenome;
  String endereco;
  String telefone;
  String email;

  Cliente({
    required this.nome,
    required this.sobrenome,
    required this.endereco,
    required this.telefone,
    required this.email,
  });
}

// 2) Possua uma classe para armazenar os dados dos produtos de uma fábrica.
class Produto {
  int codigo;
  String nome;
  String descricao;
  double preco;
  int quantidadeEstoque;

  Produto({
    required this.codigo,
    required this.nome,
    required this.descricao,
    required this.preco,
    required this.quantidadeEstoque,
  });
}
