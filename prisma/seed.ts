const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Criação de categorias
  const categories = [
    { name: "Eletrônicos e Celulares" },
    { name: "Estética" },
    { name: "Bares e Restaurantes" },
    { name: "Vestuário" },
    { name: "Eletrodoméstico" },
    { name: "Supermercado" },
    { name: "Lazer" },
    { name: "Sorveteria" },
    { name: "Petshop" },
    { name: "Clínicas e Hospitais" },
    { name: "Fotografia" },
    { name: "Papelaria" },
    { name: "Assistência Técnica" },
    { name: "Academia" },
    { name: "Órgãos Públicos" },
    { name: "Ótica" },
    { name: "Materiais de Construção" },
    { name: "Provedor de Internet" },
    { name: "Floricultura" },
    { name: "Funilaria" },
    { name: "Funerária" },
  ];

  // Criar categorias no banco de dados
  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }

  // Criação de estabelecimentos (exemplo)
  const establishments = [
    // Hospital Municipal
    {
      name: "Hospital Municipal Paragominas",
      description:
        "Hospital que oferece atendimento de consultas e exames, além de maternidade.",
      operation: "24h",
      imageUrl:
        "https://utfs.io/f/30209b9d-e8d1-48a3-ac96-74a020a7366c-5r0hr5.jpg",
      address: "Av. Pres. Vargas, 345 - Centro",
      phones: ["(91) 3729-3758"],
      categories: {
        connect: [
          { name: "Órgãos Públicos" },
          { name: "Clínicas e Hospitais" },
        ],
      },
    },

    // UPA
    {
      name: "UPA 24h Paragominas",
      description:
        "Implantada em 25 de janeiro de 2016, a Unidade de Pronto Atendimento (UPA) de Paragominas vem sendo um dos pilares da saúde no município, trazendo cada vez mais melhorias e eficácia no atendimento de seus pacientes.",
      operation: "24h",
      imageUrl:
        "https://utfs.io/f/a3bd78c3-44fa-419e-9715-21af926db282-x6dpf9.jpg",
      address: "Av. Manoel Dias Corrêa, s/n - Uraim II",
      phones: ["(91) 3729-8058"],
      categories: {
        connect: [
          { name: "Órgãos Públicos" },
          { name: "Clínicas e Hospitais" },
        ],
      },
    },

    // Regional
    {
      name: "Hospital Regional Público do Leste do Pará",
      description:
        "O Hospital Regional Público do Leste de Paragominas o atendimento de Emergência e Ambulatorial ocorre de forma referenciada, encaminhada ao Hospital por meio da regulação Estadual, SAMU, Corpo de Bombeiro e Polícia Rodoviária, Militar ou outro processo regulatório definido pela SESPA.",
      operation: "24h",
      imageUrl:
        "https://utfs.io/f/771140a2-d072-4086-b00a-b0cb93ff1d24-vst2z6.jpg",
      address: "Rua Adelaide Bernardes, S/N - Bairro Nova Conquista",
      phones: ["(91) 3739-1046"],
      categories: {
        connect: [
          { name: "Órgãos Públicos" },
          { name: "Clínicas e Hospitais" },
        ],
      },
    },

    // HGP
    {
      name: "HGP - Hospital Geral de Paragominas",
      description:
        "Hospital Geral de Paragominas · Um hospital que dá e salva vidas! · Uma instituição multidisciplinar que oferece o mais alto nivel de atendimento médico.",
      operation: "24h",
      imageUrl:
        "https://utfs.io/f/6378cbbd-c367-4dce-bf27-e6b29d2dba77-1j5d.jpeg",
      address: "R. Santa Terezinha, 304 - Centro",
      phones: ["(91) 3729-3567"],
      categories: {
        connect: [
          { name: "Órgãos Públicos" },
          { name: "Clínicas e Hospitais" },
        ],
      },
    },

    // Caps II
    {
      name: "Caps II",
      description:
        "Atende prioritariamente pessoas em intenso sofrimento psíquico decorrente de problemas mentais graves e persistentes, incluindo aqueles relacionados ao uso decorrente de álcool e outras drogas, e outras situações clínicas que impossibilitem estabelecer laços sociais e realizar projetos de vida.",
      operation: "08:00 - 18:00",
      imageUrl:
        "https://utfs.io/f/f6fcaeb9-4415-4b5d-ac8b-bf50013dedff-mm9gzj.jpg",
      address: "R. Arlindo Batista, 130 - Promissão III",
      phones: ["(91) 98487-4984"],
      categories: {
        connect: [{ name: "Órgãos Públicos" }],
      },
    },
  ];

  // Criar estabelecimentos no banco de dados
  for (const establishment of establishments) {
    await prisma.establishment.create({
      data: establishment,
    });
  }

  console.log("Seed do banco de dados realizado com sucesso!");
}

main()
  .then(() => {
    console.log("Seed do banco de dados realizado com sucesso!");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
