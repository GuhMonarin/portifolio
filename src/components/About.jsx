import { Briefcase, Code, User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desenvolvedor Web em Formação
            </h3>

            <p className="text-muted-foreground">
              Estou construindo minha carreira como desenvolvedor web,
              aprendendo e aplicando ferramentas modernas para criar aplicações
              rápidas, responsivas e escaláveis.
            </p>

            <p className="text-muted-foreground">
              No momento, estou aprofundando meus estudos em Next.js, React e
              SWR no front-end, e explorando Node.js, PostgreSQL e
              node-pg-migrate no back-end, sempre com foco em boas práticas,
              organização e performance.
            </p>
            <p className="text-muted-foreground">
              Meu objetivo é unir design intuitivo com código limpo para
              desenvolver projetos que realmente façam sentido no dia a dia das
              pessoas e que acompanhem a evolução do ecossistema digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Contato
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Curriculo
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Front-end</h4>
                  <p className="text-muted-foreground">
                    Criando sites responsivos e aplicações web com frameworks
                    modernos.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Back-end</h4>
                  <p className="text-muted-foreground">
                    Construindo aplicações server-side eficientes, seguras e
                    escaláveis com tecnologias modernas.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Automações</h4>
                  <p className="text-muted-foreground">
                    Criando scripts e ferramentas para otimizar processos,
                    economizar tempo e aumentar a eficiência.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
