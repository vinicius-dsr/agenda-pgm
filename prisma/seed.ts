const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Criação de categorias
  const categories = [
    {
      icon: "https://utfs.io/f/9f67ea8a-7c99-4b97-b11c-baae6e7a6425-k9ls7l.png",
      name: "Eletrônicos e Celulares",
    },
    {
      icon: "https://utfs.io/f/c3cc72bd-bdd5-4c14-a6c0-7445dcc16530-wgvf4e.png",
      name: "Estética",
    },
    {
      icon: "https://utfs.io/f/75bedd9b-e381-4632-8c25-2a22e3810ae2-x9vb8h.png",
      name: "Bares e Restaurantes",
    },
    {
      icon: "https://utfs.io/f/5be8ccdc-cf56-4d2c-8094-7f718bebdaa5-7xyhxg.png",
      name: "Vestuário",
    },
    {
      icon: "https://utfs.io/f/5d30d203-41d1-4ffa-a9d4-1e4afd869241-mpmqcr.png",
      name: "Eletrodoméstico",
    },
    {
      icon: "https://utfs.io/f/e28db139-68f7-4665-9122-9bd32db1d2b8-pel5rc.png",
      name: "Supermercado",
    },
    {
      icon: "https://utfs.io/f/27894451-394b-48fa-a85c-b765852c47c7-1p6as2.png",
      name: "Lazer",
    },
    {
      icon: "https://utfs.io/f/af6619c1-c1cd-4f45-a7da-710bc5b06bfc-q2qslw.png",
      name: "Sorveteria",
    },
    {
      icon: "https://utfs.io/f/97e280c7-77f1-446e-b8f3-4ac87a76d427-b6twff.png",
      name: "Petshop",
    },
    {
      icon: "https://utfs.io/f/0c703394-84b2-41cb-b03d-c65db74ccd7f-x2onlt.png",
      name: "Clínicas e Hospitais",
    },
    {
      icon: "https://utfs.io/f/c2e4ef44-661f-4e1c-9d46-c01246664fa4-o5467g.png",
      name: "Fotografia",
    },
    {
      icon: "https://utfs.io/f/07681b97-ab46-4c28-a808-6eec94424aea-4ueemn.png",
      name: "Papelaria",
    },
    {
      icon: "https://utfs.io/f/61c931af-359b-4554-bffe-a23c75343e89-16s69l.png",
      name: "Assistência Técnica",
    },
    {
      icon: "https://utfs.io/f/419b8e7c-371f-4f06-bd98-4462b5d203a7-ykad51.png",
      name: "Academia",
    },
    {
      icon: "https://utfs.io/f/357611f0-9a0b-4684-ac14-16871b38090f-5vxsjd.png",
      name: "Órgãos Públicos",
    },
    {
      icon: "https://utfs.io/f/63a9863c-0ad0-4046-9a93-9c53ed18dca1-1r5gn6.png",
      name: "Ótica",
    },
    {
      icon: "https://utfs.io/f/999919c3-654e-4c3b-b014-9479a0af05bd-pibii0.png",
      name: "Materiais de Construção",
    },
    {
      icon: "https://utfs.io/f/99122811-a228-410e-b9e3-3ec6bd6d4ad3-npdlat.png",
      name: "Provedor de Internet",
    },
    {
      icon: "https://utfs.io/f/6c3ea871-ad68-49e4-b89e-cd0061a3e213-lpa9bq.png",
      name: "Floricultura",
    },
    {
      icon: "https://utfs.io/f/bcf05b94-8380-40e2-b654-8bd752607243-e1d63.png",
      name: "Funilaria",
    },
    {
      icon: "https://utfs.io/f/e0241ad4-cf99-4368-94ea-5b54b614c216-1eucuj.png",
      name: "Funerária",
    },
    {
      icon: "https://utfs.io/f/6aee46cf-80a5-4847-9f32-47571ccc4f28-pkihv9.png",
      name: "Oficina",
    },
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
