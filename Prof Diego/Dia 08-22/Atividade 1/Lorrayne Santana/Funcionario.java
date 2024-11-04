public class Pessoa {
    private String nome;
    private String sobrenome;

    // Construtor sem parâmetros
    public Pessoa() {}

    // Construtor com parâmetros
    public Pessoa(String nome, String sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Métodos get e set
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    // Método para obter o nome completo
    public String getNomeCompleto() {
        return nome + " " + sobrenome;
    }
}

public class Funcionario extends Pessoa {
    private int matricula;
    private double salario;

    // Construtor (pode ser adicionado outros construtores conforme necessidade)
    public Funcionario(String nome, String sobrenome, int matricula, double salario) {
        super(nome, sobrenome);
        this.matricula = matricula;
        this.salario = salario;
    }

    // Métodos get e set
    public int getMatricula() {
        return matricula;
    }

    public void setMatricula(int matricula) {
        this.matricula = matricula;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        if (salario >= 0) {
            this.salario = salario;
        } else {
            System.out.println("Salário inválido. O valor deve ser positivo.");
        }
    }

    // Métodos para calcular as parcelas do salário
    public double getSalarioPrimeiraParcela() {
        return salario * 0.6;
    }

    public double getSalarioSegundaParcela() {
        return salario * 0.4;
    }
}

public class Professor extends Funcionario {
    // Construtor (pode ser adicionado outros construtores conforme necessidade)
    public Professor(String nome, String sobrenome, int matricula, double salario) {
        super(nome, sobrenome, matricula, salario);
    }

    // Sobrescrita dos métodos para calcular as parcelas do salário
    @Override
    public double getSalarioPrimeiraParcela() {
        return getSalario();
    }

    @Override
    public double getSalarioSegundaParcela() {
        return 0;
    }
}

public class Main {
    public static void main(String[] args) {
        // Criando um funcionário
        Funcionario funcionario = new Funcionario("João", "Silva", 123, 5000);
        System.out.println("Nome completo: " + funcionario.getNomeCompleto());
        System.out.println("Primeira parcela: " + funcionario.getSalarioPrimeiraParcela());
        System.out.println("Segunda parcela: " + funcionario.getSalarioSegundaParcela());

        // Criando um professor
        Professor professor = new Professor("Maria", "Santos", 456, 6000);
        System.out.println("Nome completo: " + professor.getNomeCompleto());
        System.out.println("Primeira parcela: " + professor.getSalarioPrimeiraParcela());
        System.out.println("Segunda parcela: " + professor.getSalarioSegundaParcela());
    }
}