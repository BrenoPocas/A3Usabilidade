
public class App {
    public static void main(String[] args) throws Exception {
        Professor professor = new Professor("João", "Silva", 123, 5000);

        System.out.println("Nome completo: " + professor.getNomeCompleto());
        System.out.println("Salário primeira parcela: " + professor.getSalarioPrimeiraParcela());
        System.out.println("Salário segunda parcela: " + professor.getSalarioSegundaParcela());
    }
}
