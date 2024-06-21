$(document).ready(function () {
    let currentLang = 'pt';
    const translations = {
      pt: {
        greet: `Olá!`,
        im: `eu sou o Bruno Pelegrino`,
        dev: `Desenvolvedor web fullstack`,
        resume: `Clique para ver meu currículo:`,
        me: `Sobre mim`,
        about: `Sou um desenvolvedor fullstack apaixonado por tecnologia, com
        formação técnica na <a href="https://www.betrybe.com/" target="_blank">Trybe</a> e
        experiência como Desenvolvedor Backend Jr. na empresa QESH. Ao
        longo do meu ano na <a href="https://qesh.ai/" target="_blank">QESH</a>, pude
        aprimorar minhas habilidades em desenvolvimento de aplicações web
        e sistemas, focando em criar soluções eficientes e escaláveis.
        Minha jornada na Trybe me proporcionou uma base sólida em
        tecnologias front-end e back-end, incluindo frameworks como React
        e Node.js. Estou constantemente buscando novas oportunidades para
        aprender e evoluir na minha carreira como desenvolvedor. Sou
        motivado pela resolução de problemas complexos e pela colaboração
        em equipe, procurando sempre aplicar as melhores práticas e
        tendências da indústria. Atualmente, estou em busca de uma nova
        oportunidade que me permita expandir meus conhecimentos e
        contribuir de maneira significativa para um ambiente dinâmico e
        inovador. Estou entusiasmado com a possibilidade de fazer parte de
        uma equipe que valorize o crescimento pessoal e profissional,
        enquanto trabalha em projetos desafiadores e impactantes.`,
        techs: `Habilidades`,
      },
      en: {
        greet: `Hello!`,
        im: `I'm Bruno Pelegrino`,
        dev: `Fullstack Web Developer`,
        resume: `Click to download my resume:`,
        me: `About me`,
        about: `I'm a fullstack developer passionate about technology, with
          technical training at <a href="https://www.betrybe.com/" target="_blank">Trybe</a> and
          experience as a Junior Backend Developer at QESH. Throughout my year at
          <a href="https://qesh.ai/" target="_blank">QESH</a>, I was able to
          enhance my skills in web application and system development,
          focusing on creating efficient and scalable solutions. My journey at Trybe has given me a solid foundation in
          front-end and back-end technologies, including frameworks like React
          and Node.js. I'm constantly seeking new opportunities to learn and
          evolve in my career as a developer. I'm motivated by solving complex problems and collaborating
          in team, always seeking to apply the best practices and trends of
          the industry. Currently, I'm looking for a new
          opportunity that allows me to expand my knowledge and
          contribute significantly to a dynamic and
          innovative environment. I'm excited about the possibility of being part of
          a team that values personal and professional growth,
          while working on challenging and impactful projects.`,
          techs: `Skills`
      },
    };
    const toggleLanguage = () => {
      currentLang = currentLang === 'en' ? 'pt' : 'en';
      $('#greet').html(translations[currentLang].greet);
      $('#im').html(translations[currentLang].im);
      $('#role').html(translations[currentLang].dev);
      $('#resume').html(translations[currentLang].resume);
      $('#description').html(translations[currentLang].me);
      $('.lead').html(translations[currentLang].about);
      $('#techs').html(translations[currentLang].techs);
    }
    $('#toggle-language').click(function () {
      toggleLanguage();
    });
  });