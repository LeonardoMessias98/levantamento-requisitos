import React,{ useState } from 'react';

import mainImg from '../../assets/imgDisplayContent2.png';

import './style.css';


export default function Main(){

  return (
    <>
    <div className="header">
      <h1>Levantamento de Requisitos</h1>
    </div>




    <div className="about">
      <img 
        src={mainImg} 
        id="imgMural"
        alt="mural"/>
      <section className="tecnicas">
        <section className="secTitle">
          <h1>Levantamento de Requisitos</h1>
        </section>
        <section className="secText">
          <h3>Levantamento de Requisitos é uma das etapas mais importantes para
              o desenvolvimento de um sistema, ela se consiste em entender o que o cliente precisa,
              o que ele deseja, se é viável ou não implementar uma funcionalidade, junto ao cliente
              entender a real necessidade do software.</h3>
        </section>
      </section>


      <section className="buttons">
        <div className="opacity"></div>
          
          <button ><a href="#conversação">Técnica de entrevista</a></button>
          <button ><a href="#observação">Técnica de Etnografia</a></button>
          <button ><a href="#analitico">Técnica de Documentação</a></button>
          <button ><a href="#sintetico">Sessões JAD e RAD</a></button>
      </section>
    </div>




    <div className="divContent">


      <section className="contentMain" >
        <br/>
          <section className="secTitleMain">
            <h1>Um pouco mais sobre requisitos</h1>
          </section>
        <br/>
          <section className="secTextMain">
            <h3>&nbsp;Sempre ao iniciar um projeto é importante entender os requisitos do software, também é de extrema
              importância que o desenvolvedores junto ao cliente tenham a mesma visão do problema a ser
              resolvido, durante esse processo ambos tentam levantar e definir as necessidades dos futuros
              usuários do sistema.</h3>
          </section>
          <br/>
          <br/>
          <section className="secTextMain2">
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;Tendo em mente que um Requisito é uma condição ou capacidade que um sistema deve alcançar,
              temos agora os Requisitos Funcionais e Requisitos Não Funcionais.
              <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;Explicando de forma simples um Requisito Funcional é tudo o que o Software deve conter
              para funcionar, exemplos: cadastro de cliente, cadastro de produtos, login, etc.
              <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;O Requisito Não Funcional é o que não é necessário para o Software funcionar, pode ir
              desde atributos como Desempenho, Confiabilidade, Usabilidade até a escolha de qual Linguagem o
              Software deve ser implementado, ele também pode ser classificados em diversas categorias sendo
              algumas delas: Requisitos do Produtos, Requisitos Externos e Requisitos Organizacionais.</h3>
          </section>
      </section>


      <section className="contentImg">
        <div className="requisitosImg"></div>
      </section>
    </div>



    <div className="apresentaçãoTecnicas">
      <section>
        <h2>
        As Técnicas para se levantar os requisitos de um Software são diversas e podem ser divididas em
        quatro categorias, como: Métodos de Conversação, Métodos de Observação, Métodos Analíticos e
        Métodos Sintéticos. Cada uma dessas categorias possui técnicas com características peculiares, as
        Técnicas de determinada categoria podem ser aplicadas em conjunto, para esta apresentação irei
        abranger uma técnica por categoria.
        </h2>
      </section>
    </div>




    <div className="divTecnicas impar">
      <section>
        <section id="conversação">
          <h1>Método de Conversação</h1>
        </section>
        <section className="textoTecnicas">
          <br/>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;Este método dentre todos talvez seja o mais simples, já que ele se consiste em desenvolver um
            dialogo junto ao cliente para tentar levantar os requisitos, pode se dizer que o dialogo é o ponto
            principal deste método.</h3>
          <br/>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;Entrevistas: A Técnica de entrevista é a mais tradicional e mais simples, porem antes de tudo
            é de importante que o Analista ou Desenvolvedor tenha coletado e estudado pertinente a discussão,
            voltando para a simplicidade do Software, ela vem pelo fato de ser versátil, pode ser executada por 
            diversas maneiras e por diversos meios, tanto formalmente como informalmente, pode ser feito
            desde um encontro presencial até uma reunião online, porém essa técnica também possui
            desvantagens, como a disponibilidade.</h3>
        </section>


      </section>
      <section classNames="sectionImgEntrevista ">
        <div className="imgEntrevista"></div>
      </section>
    </div>




    <div className="divTecnicas par">

      <section classNames="sectionImgEntrevista">
        <div className="imgObservação"></div>
      </section>
      
      <section>
        <section>
          <h1 id="observação">Método de Observação</h1>
        </section>
        <section className="textoTecnicas">
          <br/>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;Este método é fortemente aplicado quando o Cliente possui pouco tempo disponível para fazer um
            levantamento de requisitos, ou não sabe expressar claramente, então o Analista vai ao local de
            trabalho e começa a levantar os requisitos do Software através da observação.</h3>
          <br/>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;Etnografia: Nessa técnica o analista interage com o usuário, participa das atividades da
            empresa, sugestiona mudanças com o intuito de entender melhor o que se passa durante o trabalho,
            assim ele pode sentir na pele quais são as reais necessidades do Software.</h3>
        </section>


      </section>
      
    </div>



    <div className="divTecnicas impar">
      <section>
        <section>
          <h1 id="analitico">Métodos de Analítico</h1>
        </section>
        <section className="textoTecnicas">
          <br/>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;Nesse método como o próprio nome diz é um método onde a analise é o principal meio de se
            adquirir os Requisitos, nesse sentido são analisados os documentos, conhecimentos presentes como
            documentação do domínio do negócio e etc, essa analise ajuda a economizar tempo durante o
            processo de levantamento dos requisitos, entretanto é necessário que seja tomado alguns cuidados
            pra que no fim a visão do Software não seja restrita somente à documentação.</h3>
          <br/>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;Estudo de Documentação: Ela tem o foco em estudar a fundo a documentação fornecida
            pelo cliente, seja ela estrutura organizacional da empresa, padrões de mercado, leis, manuais de
            usuário, relatório de pequisas de mercado, glossário de termos de negócio, etc.</h3>
        </section>


      </section>
      <section classNames="sectionImgEntrevista">
        <div className="imgAnalitico"></div>
      </section>
    </div>




    <div className="divTecnicas par">
      <section>
        <section>
          <h1 id="sintetico">Método Sintético</h1>
        </section>
        <section className="textoTecnicas">
          <br/>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;O método sintético se aplica em projetos complexos, quando um único método de levantamento de
            requisitos não é suficiente, basicamente ele é combinações de outras técnicas em uma única</h3>
          <br/>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;Sessões JAD e RAD:se consistem em workshops e sessões de grupo, nos quais envolve
            todos os stakeholders importantes no processo de levantamento, através de reuniões estruturadas e
            com foco bem definido.
            Durante a sessão JAD são discutidos projetos, ideais, projetos, pre concepção, etc. A partir
            do final desse processo é feito a sessão RAD no qual faz a união com a sessão JAD e adota
            metodologias de prototipação, parte para um rascunhos adotando tudo o que foi discutido durante a
            sessão RAD, é importante ressaltar que esse método é utilizado para projetos complexos e requer
            mais recursos quando comparado à métodos tradicionais.</h3>
        </section>


      </section>
      <section classNames="sectionImgEntrevista">
        <div className="imgSintetico"></div>
      </section>
    </div>
    
    </>
    
  )
}