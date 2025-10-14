document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    darkModeToggle = document.getElementById("dark-mode-toggle");
    const contrastToggle = document.getElementById("contrast-toggle");
    const increaseFont = document.getElementById("increase-font");
    const decreaseFont = document.getElementById("decrease-font");
    const header = document.querySelector("header");
    const summaryContainer = document.querySelector(".summary-container");
    const footer = document.querySelector("footer");
    let fontSize = 1;

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("high-contrast");
            header.classList.remove("high-contrast");
            summaryContainer.classList.remove("high-contrast");
            footer.classList.remove("high-contrast");
        }
        header.classList.toggle("dark-mode");
        summaryContainer.classList.toggle("dark-mode");
        footer.classList.toggle("dark-mode");
    });

    contrastToggle.addEventListener("click", function () {
        body.classList.toggle("high-contrast");
        if (body.classList.contains("high-contrast")) {
            body.classList.remove("dark-mode");
            header.classList.remove("dark-mode");
            summaryContainer.classList.remove("dark-mode");
            footer.classList.remove("dark-mode");
        }
        header.classList.toggle("high-contrast");
        summaryContainer.classList.toggle("high-contrast");
        footer.classList.toggle("high-contrast");
    });

    increaseFont.addEventListener("click", function () {
        if (fontSize < 1.5) {
            fontSize += 0.1;
            body.style.fontSize = fontSize + "em";
            summaryContainer.style.fontSize = fontSize + "em";
            footer.style.fontSize = fontSize + "em";
        }
    });

    decreaseFont.addEventListener("click", function () {
        if (fontSize > 1) {
            fontSize -= 0.1;
            body.style.fontSize = fontSize + "em";
            summaryContainer.style.fontSize = fontSize + "em";
            footer.style.fontSize = fontSize + "em";
        }
    });
});

function enviarMensagem() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const mensagem = input.value.trim();

    if (mensagem === "") return;

    chatBox.innerHTML += `<p><strong>Você:</strong> ${mensagem}</p>`;

    let resposta = "Desculpe, não compreendi. Poderia reformular?";

    const texto = mensagem.toLowerCase();

    if (texto.includes("oi") || texto.includes("olá") || texto.includes("bom dia") || texto.includes("boa tarde") || texto.includes("boa noite") || texto.includes("e aí") || texto.includes("salve") || texto.includes("oii") || texto.includes("oi tudo bem") || texto.includes("fala")) {
        resposta = "Olá, eu sou NOA 🤖 - Navegador de Orientação Automatizada. Como posso ajudar você?";
    } else if (texto.includes("consulta") || texto.includes("consultar") || texto.includes("marcar consulta")) {
        resposta = "Você pode buscar médicos na barra acima ou filtrar por especialidade e cidade.";
    } else if (texto.includes("obrigado") || texto.includes("valeu") || texto.includes("agradecido") || texto.includes("obrigada")) {
        resposta = "Disponível sempre que precisar! 🦾";
    } else if (texto.includes("médico") || texto.includes("especialista") || texto.includes("profissional de saúde")) {
        resposta = "Informe a especialidade desejada ou a cidade para melhores resultados.";
    } else if (texto.includes("tchau") || texto.includes("adeus") || texto.includes("até logo") || texto.includes("até mais") || texto.includes("falou") || texto.includes("até breve") || texto.includes("cuidar-se")) {
        resposta = "Até logo! Cuide-se 🤖";
    } else if (texto.includes("dor de garganta") || texto.includes("garganta inflamada") || texto.includes("dor no pescoço")) {
        resposta = "Lamento saber disso! Recomendo procurar um médico especialista em otorrinolaringologia. Lembre-se de beber bastante água e descansar.";
    } else if (texto.includes("fazer o quê") || texto.includes("como resolver") || texto.includes("o que fazer")) {
        resposta = "Recomendo procurar um médico, eles poderão ajudar com um diagnóstico adequado!";
    } else if (texto.includes("quero um médico") || texto.includes("preciso de um especialista")) {
        resposta = "Informe a especialidade desejada ou a cidade para melhores resultados.";
    } else if (texto.includes("quero agendar") || texto.includes("agendar consulta") || texto.includes("marcar consulta")) {
        resposta = "Para agendar, acesse a barra de pesquisa acima e escolha seu médico!";
    } else if (texto.includes("como vai você") || texto.includes("como está você") || texto.includes("tudo bem com você")) {
        resposta = "Eu estou em ótimo funcionamento, obrigado por perguntar! Como posso te ajudar hoje?";
    } else if (texto.includes("problema") || texto.includes("dúvida") || texto.includes("ajuda") || texto.includes("dúvidas")) {
        resposta = "Estou aqui para ajudar! Como posso te orientar?";
    } else if (texto.includes("tudo bem") || texto.includes("tudo certo") || texto.includes("e aí tudo certo") || texto.includes("beleza")) {
        resposta = "Sim, tudo está ótimo! Como posso ajudar você hoje?";
    } else if (texto.includes("qual é seu nome") || texto.includes("quem é você") || texto.includes("como você se chama") || texto.includes("qual seu nome")) {
        resposta = "Eu sou NOA, Navegador de Orientação Automatizada, pronto para te ajudar!";
    } else if (texto.includes("qual é a sua função") || texto.includes("o que você faz") || texto.includes("o que você é")) {
        resposta = "Minha função é ajudá-lo a encontrar médicos e agendar consultas, além de oferecer informações sobre saúde!";
    } else if (texto.includes("onde você está") || texto.includes("onde fica você") || texto.includes("onde você se encontra")) {
        resposta = "Eu estou no seu dispositivo, pronto para ajudar onde quer que você esteja!";
    } else if (texto.includes("problemas com o site") || texto.includes("site não funciona") || texto.includes("erro no site")) {
        resposta = "Desculpe por qualquer inconveniente. Por favor, tente novamente mais tarde ou entre em contato com nosso suporte!";
    } else if (texto.includes("quero saber mais sobre") || texto.includes("explique sobre") || texto.includes("quero aprender mais sobre")) {
        resposta = "Posso te ajudar com informações sobre saúde e médicos. O que gostaria de saber?";
    } else if (texto.includes("quem são os médicos") || texto.includes("quais médicos estão disponíveis") || texto.includes("quais os médicos")) {
        resposta = "Você pode buscar médicos no site, filtrando por especialidade ou cidade.";
    } else if (texto.includes("covid") || texto.includes("coronavírus") || texto.includes("pandemia")) {
        resposta = "Aconselho seguir as orientações das autoridades de saúde e buscar um médico caso sinta sintomas.";
    } else if (texto.includes("preciso de ajuda") || texto.includes("ajuda médica") || texto.includes("socorro") || texto.includes("urgente")) {
        resposta = "Por favor, entre em contato com um profissional médico imediatamente para uma orientação adequada!";
    } else if (texto.includes("sim") || texto.includes("não")) {
        resposta = "Entendi! Em que mais posso te ajudar?";
    } else if (texto.includes("tô com dor de cabeça") || texto.includes("dor de cabeça") || texto.includes("dor na cabeça")) {
        resposta = "Se a dor for persistente, é importante procurar um médico. Pode ser sintoma de várias condições.";
    } else if (texto.includes("cansaço") || texto.includes("estou cansado") || texto.includes("fadiga")) {
        resposta = "Se o cansaço for excessivo, pode ser um sinal de algo mais sério. Um médico pode ajudar a identificar a causa.";
    } else if (texto.includes("estou com febre") || texto.includes("febre") || texto.includes("estou com calor")) {
        resposta = "A febre pode ser sinal de infecção. É importante procurar um médico para diagnóstico adequado.";
    } else if (texto.includes("diabetes") || texto.includes("tipo 1") || texto.includes("tipo 2") || texto.includes("diabético")) {
        resposta = "O diabetes é uma condição médica séria. É importante consultar um endocrinologista para controle adequado.";
    } else if (texto.includes("dores no corpo") || texto.includes("dor muscular") || texto.includes("dores nas costas")) {
        resposta = "Caso as dores sejam intensas ou persistentes, é aconselhável procurar um médico ortopedista.";
    } else if (texto.includes("tratamento para") || texto.includes("remédio para")) {
        resposta = "Para tratamentos específicos, procure orientação de um profissional de saúde. Ele pode indicar o melhor caminho.";
    } else if (texto.includes("qual o melhor médico para")) {
        resposta = "Para encontrar o melhor médico, filtre por especialidade e cidade na nossa plataforma.";
    } else if (texto.includes("qual a especialidade para")) {
        resposta = "Depende do problema que você está enfrentando. Se puder explicar mais sobre os sintomas, posso te ajudar a escolher.";
    } else if (texto.includes("como marcar consulta") || texto.includes("agendar consulta online")) {
        resposta = "Você pode marcar consulta diretamente na nossa plataforma, escolhendo o médico e a especialidade desejada.";
    } else if (texto.includes("eu tenho medo de ir ao médico") || texto.includes("não gosto de ir ao médico") || texto.includes("morro de medo")) {
        resposta = "Entendo, pode ser difícil. Mas os médicos estão aqui para ajudar você a melhorar. Não tenha medo de buscar ajuda!";
    } else if (texto.includes("câncer") || texto.includes("diagnóstico de câncer")) {
        resposta = "É importante procurar um oncologista para um diagnóstico adequado. Eles poderão oferecer o melhor tratamento.";
    } else if (texto.includes("pressão alta") || texto.includes("hipertensão") || texto.includes("pressão arterial")) {
        resposta = "A hipertensão é uma condição comum e precisa ser monitorada. Consulte um cardiologista para um tratamento adequado.";
    } else if (texto.includes("perda de peso") || texto.includes("emagrecer") || texto.includes("dietas")) {
        resposta = "É sempre bom consultar um nutricionista ou endocrinologista para orientações sobre emagrecimento saudável.";
    } else if (texto.includes("tô gripado") || texto.includes("estou com resfriado") || texto.includes("gripe")) {
        resposta = "Descanse bastante, hidrate-se e, caso os sintomas piorem, consulte um médico.";
    } else if (texto.includes("dúvidas sobre medicamentos") || texto.includes("remédio certo") || texto.includes("posologia")) {
        resposta = "Para dúvidas sobre medicamentos, sempre siga as orientações de um médico ou farmacêutico.";
    } else if (texto.includes("qual especialidade para dor") || texto.includes("qual especialista para dor")) {
        resposta = "Se for dor muscular ou nas articulações, procure um ortopedista. Se for dor de garganta ou ouvidos, um otorrinolaringologista pode ser a escolha.";
    } else if (texto.includes("medicina esportiva") || texto.includes("fisioterapia") || texto.includes("lesão")) {
        resposta = "Para lesões esportivas, a medicina esportiva ou fisioterapia podem ser a solução. Consulte um especialista!";
    } else if (texto.includes("problema de visão") || texto.includes("olho") || texto.includes("visão embaçada")) {
        resposta = "Recomendo consultar um oftalmologista para um exame detalhado da sua visão.";
    }
    else if (texto.includes("preciso de atendimento")) {
        resposta = "Você pode buscar atendimento com um profissional de saúde diretamente em nossa plataforma.";
    } else if (texto.includes("como faço para me consultar")) {
        resposta = "Para se consultar, busque um médico na barra de pesquisa e agende online.";
    } else if (texto.includes("quais são os especialistas disponíveis")) {
        resposta = "Você pode visualizar os especialistas disponíveis filtrando por cidade e especialidade.";
    } else if (texto.includes("posso remarcar minha consulta")) {
        resposta = "Sim, você pode remarcar sua consulta acessando sua conta no site.";
    } else if (texto.includes("quais planos são aceitos")) {
        resposta = "Você pode verificar os planos aceitos no perfil de cada médico.";
    } else if (texto.includes("atendimento por convênio")) {
        resposta = "Vários profissionais atendem por convênio. Use o filtro de planos para facilitar sua busca.";
    } else if (texto.includes("preciso de um clínico geral")) {
        resposta = "Você pode encontrar clínicos gerais na barra de busca acima.";
    } else if (texto.includes("como funciona o site")) {
        resposta = "Nosso site permite buscar médicos, visualizar avaliações e agendar consultas online.";
    } else if (texto.includes("é seguro agendar por aqui")) {
        resposta = "Sim, nossa plataforma utiliza protocolos de segurança para proteger seus dados.";
    } else if (texto.includes("qual o horário de atendimento")) {
        resposta = "Os horários variam por profissional. Verifique no perfil do médico desejado.";
    } else if (texto.includes("há médicos disponíveis no fim de semana")) {
        resposta = "Sim, alguns profissionais atendem aos finais de semana. Use o filtro de datas para verificar.";
    } else if (texto.includes("quero saber o valor da consulta")) {
        resposta = "O valor da consulta está disponível no perfil do profissional.";
    } else if (texto.includes("consultas por telemedicina")) {
        resposta = "Sim, oferecemos consultas por telemedicina. Filtre sua busca para ver os médicos disponíveis.";
    } else if (texto.includes("onde vejo os horários livres")) {
        resposta = "Você pode ver os horários disponíveis diretamente no perfil do médico.";
    } else if (texto.includes("como recebo a confirmação")) {
        resposta = "A confirmação será enviada por e-mail e ficará disponível na sua conta.";
    } else if (texto.includes("posso cancelar a consulta")) {
        resposta = "Sim, acesse sua conta e vá até a aba de consultas para cancelar.";
    } else if (texto.includes("tem médicos perto de mim")) {
        resposta = "Sim, use a localização ou digite sua cidade para encontrar médicos próximos.";
    } else if (texto.includes("quais especialidades existem")) {
        resposta = "Nossa plataforma conta com diversas especialidades, como cardiologia, dermatologia, pediatria e mais.";
    } else if (texto.includes("existe suporte ao paciente")) {
        resposta = "Sim, contamos com uma equipe de suporte para auxiliar você em qualquer etapa.";
    } else if (texto.includes("qual a política de privacidade")) {
        resposta = "Você pode acessar nossa política de privacidade no rodapé do site.";
    } else if (texto.includes("como acessar minha conta")) {
        resposta = "Clique em 'Entrar' no topo da página e insira seu e-mail e senha.";
    } else if (texto.includes("não lembro minha senha")) {
        resposta = "Use a opção 'Esqueci minha senha' na página de login para redefini-la.";
    } else if (texto.includes("há médicos que falam outro idioma")) {
        resposta = "Sim, alguns médicos atendem em outros idiomas. Verifique no perfil de cada um.";
    } else if (texto.includes("como funciona a avaliação dos médicos")) {
        resposta = "As avaliações são feitas por pacientes que já consultaram com o profissional.";
    } else if (texto.includes("tem atendimento psicológico")) {
        resposta = "Sim, temos psicólogos disponíveis. Basta buscar por especialidade.";
    } else if (texto.includes("consulta com nutricionista")) {
        resposta = "Claro! Basta buscar por 'nutricionista' na barra de pesquisa.";
    } else if (texto.includes("a plataforma é gratuita")) {
        resposta = "Sim, o uso da plataforma é gratuito. Você paga apenas pela consulta com o profissional.";
    } else if (texto.includes("como faço uma reclamação")) {
        resposta = "Você pode entrar em contato com o nosso suporte para registrar sua reclamação.";
    } else if (texto.includes("consulta para criança")) {
        resposta = "Temos pediatras disponíveis para atendimento infantil. Procure por 'pediatria'.";
    } else if (texto.includes("consulta para idoso")) {
        resposta = "Para idosos, recomendamos procurar um geriatra. Você pode agendar pela nossa plataforma.";
    }
    else if (texto.includes("e aí, beleza?")) {
        resposta = "Tudo certo por aqui! E com você?";
    } else if (texto.includes("tá funcionando isso aqui?")) {
        resposta = "Tô sim! Pode perguntar o que quiser 😄";
    } else if (texto.includes("me dá uma força")) {
        resposta = "Tô aqui pra isso! Manda a dúvida.";
    } else if (texto.includes("me ajuda aí")) {
        resposta = "Claro, pode mandar que eu te ajudo!";
    } else if (texto.includes("tem médico bom aí?")) {
        resposta = "Tem sim! Só buscar pela especialidade que tá tudo certo.";
    } else if (texto.includes("tô doente")) {
        resposta = "Poxa! Melhor procurar um médico. Posso te ajudar a achar um por aqui.";
    } else if (texto.includes("tô ferrado")) {
        resposta = "Calma! Vamos resolver isso. Qual o problema?";
    } else if (texto.includes("tem como ver os horários?")) {
        resposta = "Tem sim! Clica no médico que você vê os horários disponíveis.";
    } else if (texto.includes("qual o melhor doutor?")) {
        resposta = "Depende do que você tá precisando! Me conta que eu te indico.";
    } else if (texto.includes("me recomenda alguém")) {
        resposta = "Claro! Me diz a especialidade e cidade que eu te ajudo.";
    } else if (texto.includes("tem como marcar rapidão?")) {
        resposta = "Tem sim! Busca o médico e escolhe o horário. Bem fácil!";
    } else if (texto.includes("tá caro isso aí?")) {
        resposta = "Os preços variam por médico, mas tem várias opções acessíveis.";
    } else if (texto.includes("qual é o mais perto?")) {
        resposta = "Me diz sua cidade ou bairro que eu vejo aqui!";
    } else if (texto.includes("e se eu não for?")) {
        resposta = "Aí é só cancelar com antecedência, tranquilo.";
    } else if (texto.includes("tô passando mal")) {
        resposta = "Sinto muito! Melhor procurar um médico urgente. Posso te mostrar alguns.";
    } else if (texto.includes("tô com medo")) {
        resposta = "Fica tranquilo, buscar ajuda já é um passo importante!";
    } else if (texto.includes("isso aqui é confiável?")) {
        resposta = "Totalmente! A plataforma é segura e cheia de médicos verificados.";
    } else if (texto.includes("tem alguém pra conversar?")) {
        resposta = "Tô aqui pra conversar sim! O que tá acontecendo?";
    } else if (texto.includes("me sinto mal")) {
        resposta = "Poxa... Quer falar sobre os sintomas? Posso te orientar.";
    } else if (texto.includes("dói tudo")) {
        resposta = "Nossa, isso é chato mesmo. Que tipo de dor você tá sentindo?";
    } else if (texto.includes("como eu marco isso?")) {
        resposta = "É só buscar o médico, escolher a hora e pronto!";
    } else if (texto.includes("qual o especialista pra dor nas costas?")) {
        resposta = "O ideal é um ortopedista! Posso te mostrar alguns.";
    } else if (texto.includes("tô com zica")) {
        resposta = "Melhor procurar um clínico geral! Posso indicar um.";
    } else if (texto.includes("tem teleconsulta?")) {
        resposta = "Tem sim! Só filtrar por 'atendimento online' na busca.";
    } else if (texto.includes("deu ruim aqui")) {
        resposta = "Ih! Me conta o que aconteceu pra eu poder ajudar.";
    } else if (texto.includes("quero resolver isso logo")) {
        resposta = "Bora resolver então! Me diga o que você precisa.";
    } else if (texto.includes("tem consulta ainda hoje?")) {
        resposta = "Tem chance sim! Vários médicos têm horários hoje mesmo.";
    } else if (texto.includes("onde eu vejo os preços?")) {
        resposta = "Tá tudo lá no perfil de cada médico. Só clicar!";
    } else if (texto.includes("preciso urgente")) {
        resposta = "Entendido! Vamos achar alguém que atenda o mais rápido possível.";
    }
    else if (texto.includes("como posso entrar em contato com o suporte")) {
        resposta = "Você pode falar com o suporte acessando a aba 'Ajuda' no site.";
    } else if (texto.includes("como vejo o histórico de consultas")) {
        resposta = "O histórico está disponível na sua conta, na aba 'Consultas'.";
    } else if (texto.includes("a consulta é presencial ou online")) {
        resposta = "Depende do profissional. Você pode escolher o tipo de atendimento na busca.";
    } else if (texto.includes("aceita plano de saúde")) {
        resposta = "Sim, muitos médicos aceitam. Verifique os planos aceitos no perfil do profissional.";
    } else if (texto.includes("quero fazer uma avaliação")) {
        resposta = "Após a consulta, você poderá deixar sua avaliação no perfil do médico.";
    } else if (texto.includes("existe tempo mínimo para desmarcar")) {
        resposta = "Sim, recomendamos cancelar com pelo menos 24h de antecedência.";
    } else if (texto.includes("como reagendar consulta")) {
        resposta = "Basta acessar sua conta, ir até a consulta e clicar em reagendar.";
    } else if (texto.includes("preciso de ajuda com meu cadastro")) {
        resposta = "Claro! Acesse o menu de ajuda para resolver qualquer questão com o cadastro.";
    } else if (texto.includes("tem atendimento pediátrico")) {
        resposta = "Sim, temos diversos pediatras disponíveis para consulta.";
    } else if (texto.includes("posso agendar para outra pessoa")) {
        resposta = "Sim! Durante o agendamento, você pode escolher quem será atendido.";
    } else if (texto.includes("onde posso alterar meus dados")) {
        resposta = "Você pode alterar seus dados no menu de perfil, após fazer login.";
    } else if (texto.includes("o site é acessível")) {
        resposta = "Sim, seguimos padrões de acessibilidade para garantir uso por todos.";
    } else if (texto.includes("quero buscar por localização")) {
        resposta = "Use o campo de cidade ou CEP para encontrar médicos próximos.";
    } else if (texto.includes("tem opção de lembrete de consulta")) {
        resposta = "Sim, enviamos lembretes por e-mail e notificações no site.";
    } else if (texto.includes("médicos com boa avaliação")) {
        resposta = "Você pode ordenar os resultados pelos mais bem avaliados.";
    } else if (texto.includes("qual a média de preço")) {
        resposta = "Os valores variam, mas há muitas opções acessíveis.";
    } else if (texto.includes("consulta por plano de saúde")) {
        resposta = "Sim, você pode buscar médicos pelo convênio que possui.";
    } else if (texto.includes("como posso verificar se o médico é confiável")) {
        resposta = "Você pode consultar as avaliações e selos de verificação no perfil do profissional.";
    } else if (texto.includes("tem neurologista")) {
        resposta = "Sim, temos neurologistas disponíveis para atendimento.";
    } else if (texto.includes("tem ginecologista mulher")) {
        resposta = "Sim, você pode filtrar por gênero nas opções de busca.";
    } else if (texto.includes("tem atendimento a domicílio")) {
        resposta = "Alguns profissionais oferecem esse serviço. Verifique no perfil.";
    } else if (texto.includes("quero ver especialidades raras")) {
        resposta = "Use a busca para encontrar especialidades específicas.";
    } else if (texto.includes("posso usar o site no celular")) {
        resposta = "Sim, nosso site é compatível com dispositivos móveis.";
    } else if (texto.includes("o que é telemedicina")) {
        resposta = "É uma consulta online com um profissional de saúde.";
    } else if (texto.includes("tem ortopedista especializado")) {
        resposta = "Sim, você pode ver as subespecialidades no perfil de cada médico.";
    } else if (texto.includes("como sei se meu plano é aceito")) {
        resposta = "No perfil do médico há uma lista com os planos aceitos.";
    } else if (texto.includes("como funciona o agendamento online")) {
        resposta = "Você escolhe o médico, vê os horários e confirma com poucos cliques.";
    } else if (texto.includes("consulta com psiquiatra")) {
        resposta = "Sim, temos psiquiatras disponíveis. Procure pela especialidade.";
    } else if (texto.includes("aceita pagamento online")) {
        resposta = "Alguns médicos aceitam pagamento online. Verifique no momento do agendamento.";
    } else if (texto.includes("tem médicos que falam espanhol")) {
        resposta = "Sim, você pode encontrar essa informação no perfil do profissional.";
    }
    else if (texto.includes("opa")) {
        resposta = "Opa! Como posso te ajudar?";
    } else if (texto.includes("opa, beleza?")) {
        resposta = "Beleza sim! E aí, tudo tranquilo?";
    } else if (texto.includes("opa, tô precisando de ajuda")) {
        resposta = "Manda aí o que você precisa!";
    } else if (texto.includes("tô perdido aqui")) {
        resposta = "Relaxa, tô aqui pra te guiar!";
    } else if (texto.includes("como eu começo?")) {
        resposta = "Primeiro, me diz o que você tá procurando. Vamos lá!";
    } else if (texto.includes("tem alguém aí?")) {
        resposta = "Sempre! Pode falar comigo 😄";
    } else if (texto.includes("e agora, o que eu faço?")) {
        resposta = "Me explica a situação que a gente resolve!";
    } else if (texto.includes("tô com pressa")) {
        resposta = "Vamos agilizar então! Me diz rapidinho o que precisa.";
    } else if (texto.includes("tem médico que atende rápido?")) {
        resposta = "Tem sim! É só buscar e ver os horários disponíveis.";
    } else if (texto.includes("me indica um bom médico aí")) {
        resposta = "Claro! Qual especialidade você quer?";
    } else if (texto.includes("ai ai, viu")) {
        resposta = "Tá difícil aí? Vamos resolver juntos.";
    } else if (texto.includes("como que agendo isso?")) {
        resposta = "É só escolher o médico e clicar em 'Agendar'. Fácil fácil!";
    } else if (texto.includes("e se eu esquecer da consulta?")) {
        resposta = "Não se preocupa, a gente te lembra por e-mail e notificação!";
    } else if (texto.includes("tem consulta online?")) {
        resposta = "Tem sim! E dá pra fazer até de pijama 😄";
    } else if (texto.includes("tô com sintomas estranhos")) {
        resposta = "Melhor procurar um clínico. Posso te mostrar alguns.";
    } else if (texto.includes("qual médico atende isso?")) {
        resposta = "Me diz os sintomas que eu te ajudo a achar o especialista.";
    } else if (texto.includes("tem vaga pra hoje?")) {
        resposta = "Dá pra achar sim! Só buscar e filtrar por hoje.";
    } else if (texto.includes("ai, tô nervoso")) {
        resposta = "Respira fundo! Tô aqui pra ajudar no que precisar.";
    } else if (texto.includes("quero resolver isso logo")) {
        resposta = "Então bora! Me diz o que tá pegando.";
    } else if (texto.includes("como eu vejo os preços?")) {
        resposta = "Tá tudo no perfil do médico. Clica lá que aparece!";
    } else if (texto.includes("tô na dúvida ainda")) {
        resposta = "Sem problema! Quer que eu explique como funciona?";
    } else if (texto.includes("e se o médico cancelar?")) {
        resposta = "Você será avisado e pode reagendar com facilidade.";
    } else if (texto.includes("tem consulta de domingo?")) {
        resposta = "Tem sim! Só buscar e ver quem tá disponível nesse dia.";
    } else if (texto.includes("você me ajuda mesmo?")) {
        resposta = "Ajudo sim! Pode confiar 😄";
    } else if (texto.includes("tá de boa agendar por aqui?")) {
        resposta = "Tá de boa demais! É rapidinho e seguro.";
    } else if (texto.includes("tem médico legal aí?")) {
        resposta = "Tem muitos! E com avaliação alta!";
    } else if (texto.includes("quero um médico bacana")) {
        resposta = "Beleza! Me diz a especialidade e cidade.";
    } else if (texto.includes("me dá uma luz")) {
        resposta = "Luz acesa! Me conta qual a dúvida 😄";
    } else if (texto.includes("tô confuso")) {
        resposta = "Vamos esclarecer! O que tá te deixando na dúvida?";
    } else if (texto.includes("tô tentando marcar")) {
        resposta = "Tá quase! Me diz onde tá empacado que eu te ajudo.";
    }
    else if (texto.includes("opa, tudo certo?")) {
        resposta = "Tudo certo por aqui e aí?";
    } else if (texto.includes("tudo certo")) {
        resposta = "Que bom! Entendeu tudo? kkkkk";
    } else if (texto.includes("entendi")) {
        resposta = "Aí sim! Qualquer coisa, tô por aqui 😄";
    } else if (texto.includes("tipo?")) {
        resposta = "Tipo assim: você escolhe o médico, o horário e pronto, consulta marcada!";
    } else if (texto.includes("não entendi")) {
        resposta = "Sem estresse! Me diz o que ficou confuso que eu explico melhor.";
    } else if (texto.includes("kkkkkk")) {
        resposta = "Hahaha! Bom humor é sempre bem-vindo por aqui!";
    }
    else if (
        texto.includes("entendo") ||
        texto.includes("entendo sim") ||
        texto.includes("entendo agora") ||
        texto.includes("ah, entendo") ||
        texto.includes("entendi") ||
        texto.includes("ah, entendi") ||
        texto.includes("entendi agora") ||
        texto.includes("entendi sim") ||
        texto.includes("entendi tudo") ||
        texto.includes("agora entendi") ||
        texto.includes("agora faz sentido") ||
        texto.includes("faz sentido") ||
        texto.includes("ah tá") ||
        texto.includes("saquei") ||
        texto.includes("saquei agora") ||
        texto.includes("peguei a ideia") ||
        texto.includes("tô ligado") ||
        texto.includes("entendi a ideia") ||
        texto.includes("entendi o recado") ||
        texto.includes("compreendi") ||
        texto.includes("compreendi agora") ||
        texto.includes("tá explicado") ||
        texto.includes("tá claro agora") ||
        texto.includes("beleza, entendi") ||
        texto.includes("entendi o que você quis dizer") ||
        texto.includes("entendi o funcionamento") ||
        texto.includes("captei") ||
        texto.includes("agora saquei") ||
        texto.includes("fez sentido agora") ||
        texto.includes("fez sentido sim")
    ) {
        resposta = "Show! Qualquer outra dúvida, é só mandar! 😉";
    }

    setTimeout(() => {
        chatBox.innerHTML += `<p><strong>NOA:</strong> ${resposta}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    input.value = "";
}

function toggleChat() {
    const chatContainer = document.querySelector('.chat-container');
    chatContainer.style.display = chatContainer.style.display === 'none' || chatContainer.style.display === ''
        ? 'block'
        : 'none';
}