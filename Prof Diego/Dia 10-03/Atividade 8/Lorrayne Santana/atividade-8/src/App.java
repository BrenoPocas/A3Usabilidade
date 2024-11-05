public class App {
    public static void main(String[] args) {
        Cadastro cadastro = new Cadastro(10);

        PessoaFisica pf = new PessoaFisica();
        pf.setNome("João da Silva");
        pf.setCPF("12345678901");
        cadastro.cadastrar(pf);

        PessoaJuridica pj = new PessoaJuridica();
        pj.setNome("Empresa X");
        pj.setCNPJ("12.345.678/0001-99");
        cadastro.cadastrar(pj);

        cadastro.imprimir();
    }
}