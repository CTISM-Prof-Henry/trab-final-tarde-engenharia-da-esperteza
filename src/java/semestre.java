public class Professores {
    public static void main(String[] args) {

        String json = """
        {
          "professores": [
            {
              "id": 1,
              "nome": "Edmundo Gonzalez",
              "disciplina": "Introdução à Computação",
              "codigo": "CPINT321"
            },
            {
              "id": 2,
              "nome": "Maria Silva",
              "disciplina": "Engenharia de Software",
              "codigo": "CPESW129"
            },
            {
              "id": 3,
              "nome": "João Pereira",
              "disciplina": "Estruturas de Dados",
              "codigo": "CPESTR301"
            }
          ]
        }
        """;

        System.out.println(json);
    }
}
