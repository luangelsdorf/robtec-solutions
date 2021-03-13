export default (req, res) => {
    res.status(200).json(

        [
            {
                "img": "central",
                "heading": "Central de Alarme",
                "description": "Soluções práticas, seguras e adequadas para todas as necessidades: de soluções econômicas, com as centrais não monitoradas, até integrações com empresas de segurança eletrônica e acompanhamento em tempo real via aplicativo, com as centrais monitoradas via IP."
            },
            {
                "img": "cerca",
                "heading": "Cerca Elétrica",
                "description": "O produto ideal para proteção ostensiva de perímetros pequenos, médios ou grandes, integrado ao sistema de alarme IP é possível acompanhar em tempo real através de um aplicativo. Simples de programar e instalar para você manter o local seguro."
            },
            {
                "img": "acessorios",
                "heading": "Acessórios",
                "description": "Tenha soluções ainda mais completas com os acessórios para alarmes Intelbras. Perfeitos para que seu projeto seja ampliado, melhorado e controlado com a tecnologia e a qualidade de produtos pensados para otimizar ainda mais a segurança de seu patrimônio."
            },
            {
                "img": "sensor",
                "heading": "Sensor de Alarme",
                "description": "Garanta a máxima segurança a seu patrimônio com soluções desenvolvidas para cada tipo de cenário, e tecnologias que variam de acordo com o nível de segurança e aplicação que você precisa."
            }
        ]

    )
}
