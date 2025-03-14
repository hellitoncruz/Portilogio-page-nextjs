'use client'

import { useEffect, useRef, useState } from "react"
import Image from 'next/image'

import './styles.scss'

export default function Page() {

  const [toggle, setToggle] = useState(1)
  
  const menuRef = useRef<HTMLUListElement>(null) 


  function updateToggle(id: number) {
    setToggle(id)
  }

  function openMenu() {
    menuRef?.current?.classList.toggle("menu-mobile")
  }

  function closeMenu() {
    if (menuRef?.current?.classList.contains("menu-mobile")) {
      menuRef.current.classList.remove("menu-mobile")
    }
  }

  return (
    <div className='page-container'>
      <div className='home-container' id='home'>
        <div className='menu-container'>
          <p>Portfólio</p>
          <ul ref={menuRef}>
          <button className='close-menu-button' onClick={openMenu}></button>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about-me" onClick={closeMenu}>Sobre mim</a></li>
            <li><a href="#experience" onClick={closeMenu}>Experiência</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projetos</a></li>
          </ul>
          <button className='open-menu-button' onClick={openMenu}></button>
        </div>
        <div className='home-content' >
          <div className='home-texts'>
            <p>Olá, eu sou</p>
            <h1>HELLITON CRUZ</h1>
            <p>Desenvolvedor de Software</p>
          </div>
          <div className='social-links'>
            <a href="https://www.linkedin.com/in/helliton-cruz-926a56203/" target="about_blank">LinkedIn</a>
            <a href="https://github.com/Helliton-Xavier" target="about_blank" >GitHub</a>
          </div>
        </div>
      </div>

      <div className='about-container' id='about-me'>
        <div className='texts-about'>
          <h3>Sobre mim</h3>
          <h4>Bahia, Brasil</h4>
          <p>Sou um desenvolvedor web apaixonado, com um olhar atento para detalhes e uma sede constante por aprendizado. Minha jornada no mundo da tecnologia me permitiu adquirir uma variedade de habilidades, desde o desenvolvimento front-end até o back-end. Sou movido pela curiosidade e pela busca incessante pela excelência, sempre buscando desafios que me permitam expandir meu conhecimento e criar soluções inovadoras. Minha missão é combinar criatividade e habilidades técnicas para construir produtos digitais que impactem positivamente a vida das pessoas.</p>
          <div className='about-buttons'>
            <a href="helliton-cruz-curriculo.pdf" download="helliton-cruz-curriculo.pdf">Currículo</a>
            <a href="mailto:hellitoncruz16@gmail.com">E-mail</a>
          </div>
        </div>
      </div>

      <div className='xp-container' id='experience'>
        <div className='xp-content'>
          <h3>EXPERIÊNCIA</h3>
          <div className='tab-layout'>
            <ul className='tab-items'>
              <li className={toggle === 1 ? 'tab-item-active' : 'tab-item'} onClick={() => {
                updateToggle(1);
              }}>Quality Digital</li>
              <li className={toggle === 2 ? 'tab-item-active' : 'tab-item'} onClick={() => updateToggle(2)}>Acct Global</li>
              <li className={toggle === 3 ? 'tab-item-active' : 'tab-item'} onClick={() => updateToggle(3)}>Freelancer</li>
            </ul>
            <div className='tab-contents'>
              <div className={toggle === 1 ? 'show-content' : 'tab-content'}>
                <h4 className='job-name-txt'>Desenvolvedor de Software Junior <span className='job-period'>Fev 2023 - Atual</span></h4>
                <p className='job-company-txt'>Quality Digital</p>
                <p className='job-description-txt'>
                  Como desenvolvedor júnior na Quality Digital, posso expandir meu conhecimento em tecnologias de e-commerce, além de solidificar minhas habilidades em VTEX, JavaScript e React. Trabalho com plataformas como FastStore e Deco, ampliando minha experiência em desenvolvimento de lojas virtuais. Além disso, tive a oportunidade de aprender e aplicar TypeScript em meus projetos, melhorando a qualidade e a manutenibilidade do código. Atualmente na Quality Digital, sou responsável por contribuir para o desenvolvimento de novas funcionalidades, resolver problemas técnicos e colaborar em equipe para garantir a entrega de projetos de alta qualidade.</p>
              </div>
              <div className={toggle === 2 ? 'show-content' : 'tab-content'}>
                <h4 className='job-name-txt'>Estagiário em Desenvolvimento de Software <span className='job-period'>Jun 2022 - Fev 2023</span></h4>
                <p className='job-company-txt'>Acct Global</p>
                <p className='job-description-txt'>Durante meu estágio na ACCT Global, tive a oportunidade de aprimorar minhas habilidades em desenvolvimento web, especialmente com foco em tecnologias como VTEX, JavaScript e React. Colaborei ativamente no desenvolvimento e manutenção de soluções e-commerce, trabalhando em projetos de implementação, customização e otimização de lojas online. Sob a orientação de profissionais experientes, participei de equipes multidisciplinares, adquirindo conhecimento prático e técnico sobre as melhores práticas de desenvolvimento. A experiência na ACCT Global me proporcionou uma base sólida para minha carreira como desenvolvedor front-end.</p>
              </div>
              <div className={toggle === 3 ? 'show-content' : 'tab-content'}>
                <h4 className='job-name-txt'>Freelancer <span className='job-period'>Jan 2021 - Jun 2022</span></h4>
                <p className='job-company-txt'>Workana</p>
                <p className='job-description-txt'>
                  Como freelancer dev front-end na Workana, contribuo para diversos projetos, desenvolvendo interfaces de usuário atraentes e funcionais. Trabalho em colaboração com clientes para entender suas necessidades e traduzi-las em soluções digitais eficazes. Minhas responsabilidades incluíam a criação de layouts responsivos, a implementação de designs utilizando HTML, CSS e JavaScript, Wordpress e a integração de funcionalidades interativas. Garanti a entrega de projetos de alta qualidade, cumprindo prazos e superando as expectativas dos clientes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='projects-container' id='projects'>
        <h3>PROJETOS</h3>
        <div className='project-contents'>
          <div className='project-item'>
            <Image width={800}
      height={500} className= "project-img" src='/assets/project1.png' alt="" />
            <h4 className='project-name'>Help Dog</h4>
            <p className='project-description'>Projeto social que tem o objetivo de ajudar cães de rua, em situação vulnerável.</p>
            
            <a href="/project-link" className='project-link'>Visualizar</a>
          </div>

          <div className='project-item'>
            <Image width={800}
      height={500} className= "project-img" src='/assets/project2.png' alt="" />
            <h4 className='project-name'>Professional Site</h4>
            <p className='project-description'>Projeto de site profissional criado para psicóloga divulgar seus trabalhos.</p>
            
            <a href="/project-link" className='project-link'>Visualizar</a>
          </div>

          <div className='project-item'>
            <Image width={800}
      height={500} className= "project-img" src='/assets/project3.jpg' alt="" />
            <h4 className='project-name'>Vaso e Cor</h4>
            <p className='project-description'>Projeto de e-commerce que atuei na criação de melhorias e ajustes de layout.</p>
            <a href="/project-link" className='project-link'>Visualizar</a>
          </div>

          <div className='project-item'>
            <Image width={800}
      height={500} className= "project-img" src='/assets/project4.png' alt="" />
            <h4 className='project-name'>Agua Azul</h4>
            <p className='project-description'>Projeto de e-commerce que atuei na criação fazendo a alteração de layout de toda a loja e implementando novas melhorias.</p>
            
            <a href="/project-link" className='project-link'>Visualizar</a>
          </div>
        </div>
      </div>
      <a href="/" id="toTop">&#11161;</a>
      <footer>
        <div className='footer-content'><p>@ 2024 - Helliton Cruz</p></div>
      </footer>
    </div>
  );
}