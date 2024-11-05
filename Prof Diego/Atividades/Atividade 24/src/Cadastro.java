public class Cadastro{
    private Pessoa[] pessoas;
    private int indice = 0;

    public Cadastro(int capacidade) {
        pessoas = new Pessoa[capacidade];
    }

    public void cadastrar(Pessoa pessoa) {
        pessoas[indice++] = pessoa;
    }

    public void imprimir() {
        for (Pessoa pessoa : pessoas) {
            if (pessoa instanceof PessoaFisica) {
                PessoaFisica pf = (PessoaFisica) pessoa;
                System.out.println("Nome: " + pf.getNome() + ", CPF: " + pf.getCPF());
            } else if (pessoa instanceof PessoaJuridica) {
                PessoaJuridica pj = (PessoaJuridica) pessoa;
                System.out.println("Nome: " + pj.getNome() + ", CNPJ: " + pj.getCNPJ());

            }
        }
    }
}