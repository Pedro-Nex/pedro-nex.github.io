var projects = [
  {
    nome: "Controle de Gastos",
    descricao: "Aplicação backend para gestão e categorização de finanças pessoais, desenvolvida para praticar arquitetura em camadas, persistência de dados e rotas REST na prática.",
    tecnologias: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Git"],
    status: "Projeto de aprendizado",
    links: [{ texto: "Ver código", url: "https://github.com/Pedro-Nex/controle-gastos" }]
  },
  {
    nome: "TabelaFipe",
    descricao: "Aplicação de console em Java 21 e Spring Boot que consulta os valores da Tabela FIPE por meio da API pública de terceiros mantida por Deivid Fortuna. Permite buscar carros, motos e caminhões por marca e modelo e consultar os anos e valores disponíveis.",
    tecnologias: ["Java 21", "Spring Boot", "Maven", "Consumo de API HTTP", "Git"],
    status: "Projeto de aprendizado",
    exemplo: {
      titulo: "Exemplo de saída (consulta feita em 05/11/2026)",
      saida: "Valor: R$ 24.382,00 | Marca: Fiat | Modelo: Palio 1.0 Cel. ECON./ITALIA F.Flex 8V 4p | Ano: 2009 | Combustível: Flex"
    },
    links: [
      { texto: "Ver código", url: "https://github.com/Pedro-Nex/TabelaFipe" },
      { texto: "Ler documentação", url: "https://github.com/Pedro-Nex/TabelaFipe#consulta-tabela-fipe" }
    ]
  }
];
