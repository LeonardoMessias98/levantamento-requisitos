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
      <section className="sectionImgEntrevista ">
        <div className="imgEntrevista"></div>
      </section>
    </div>




    <div className="divTecnicas par">

      <section className="sectionImgEntrevista">
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
      <section className="sectionImgEntrevista">
        <div className="imgAnalitico"></div>
      </section>
    </div>




    <div className="divTecnicas par">
      <section className="sectionImgEntrevista">
        <div className="imgSintetico"></div>
      </section>

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
            Durante a sessão JAD são discutidos projetos, ideais, projetos, pre concepção, etc.</h3>
            <br/>
            <h3>
            &nbsp;&nbsp;&nbsp;&nbsp;A partir
            do final desse processo é feito a sessão RAD no qual faz a união com a sessão JAD e adota
            metodologias de prototipação, parte para um rascunhos adotando tudo o que foi discutido durante a
            sessão RAD, é importante ressaltar que esse método é utilizado para projetos complexos e requer
            mais recursos quando comparado à métodos tradicionais.
            </h3>
        </section>


      </section>

    </div>
    
    <div className="principais_pontos_index">
       <section>
          <div className="principais_pontos_index_img">

          </div>
        </section>

        <section className="index_text">
          <section>
            <h1>Principais pontos a serem conderado</h1>
            <br/>
            <br/>
          </section>
          <section>
            <h3>Além de conhecer alguns métodos e técnicas é importante ressaltar
              alguns principais pontos que sempre devem ser considerado ao se fazer
              durante o planejamento de um software, alguns desses pontos já foram 
              citados durante a apresentação, porém é valido relembrar.
            </h3>
            <br/>
            <br/>
            <a href="#necessidades_do_cliente">Conhecer as necessidades do cliente</a>
            <br/>
            <a href="#definir_requisitos">Definir os requisitos</a>
            <br/>
            <a href="#viabilidade">Avaliar a viabilidade do projeto</a>
            <br/>
            <a href="#documentar">Documentar todos os procedimentos</a>
            <br/>
            <a href="#metodologia">Escolher a metodologia de desenvolvimento</a>
          </section>
        </section>

      </div>


    <div className="div_principais_pontos" >

     



      <section className="principais_pontos">
        
        <section id="necessidades_do_cliente">
          <section>
            <section>
              <h1>Conhecer as necessidades do cliente</h1>
            </section>

            <section>
              <h3>Como citado na introdução da apresentação, conhecer as necessidades do cliente
                é a parte fundamental na hora de se levantar um requisito, podemos dizer que
                o trabalho de levantar os requisitos de um software é conhecer a necessidade do cliente
                para isso existem diversas técnicas para concluir esse trabalho tão importante.
              </h3>
            </section>
          </section>


        </section>



        <section id="definir_requisitos">




          <section>
            <section>
              <h1>Definir os requisitos</h1>
            </section>

            <section>
              <h3>Definir os requisitos que um sistema deve possuir também é fundamental e
                não pode ser deixado de lado, para definir um requisito é importante entender
                a necessidade do cliente, pois um requisito é algo que o software deve obter
                para poder atingir o objetivo de sanar a necessidade que o cliente possui.
              </h3>
            </section>
          </section>

        </section>



        <section id="viabilidade">

          <section>
            <section>
              <h1>Avaliar a viabilidade do projeto</h1>
            </section>

            <section>
              <h3>Quem nunca ouviu aquela frase famosa do Steve Jobs"O cliente não sabe o que quer, 
                até que você mostre a ele.", muitas vezes o cliente vem com ideia inviaveis para o projetos
                e é importante que o Analista / Desenvolvedor esteja atento para não assuma responsabilidades
                que não possa ser cumpridas.
                </h3>
            </section>
          </section>



        </section>



        <section id="documentar">


          <section>
            <section>
              <h1>Documentar todos os procedimentos</h1>
            </section>

            <section>
              <h3>Muitas vezes fazer a documentação de um projeto pode parecer algo chato e tedioso,
                porém é umas das coisas mais importantes do projeto, pois no futuro quando ocorrer uma 
                manuntenção no codigo, a documentação servirá como um manual do desenvolvedor.
              </h3>
              <br/>
              <h3>
                Porém é necessario ter em mente o que deve ser feito, então deve ser definido
                detalhes mais profundos, nessa parte aparecem os wireframes, fluxogramas e casos de uso,
              </h3>
            </section>
          </section>


        </section>



        <section id="metodologia">
          <section>
            <section>
              <h1>Escolher a metodologia de desenvolvimento</h1>
            </section>

            <section>
              <h3>A parte da escolha de uma metodologia de desenvolvimento não é menos
                importantes que os outros pontos citados nesta apresentação, para se ter uma
                ideia a metodologia de desenvolvimento é o que vai guiar como um projeto é
                desenvolvido, atualmente as metodologia ágeis tendem a ser as mais escolhidas,
                e dentre todas a metodologia Scrum é mais famosa.
              </h3>
            </section>
          </section>


        </section>
      </section>
    </div>

    <div className="footer">
      <section>
        <a target="blank" href="https://www.linkedin.com/in/leonardo-messias-89568818a/"><h1>Autor: Leonardo Messias Rodrigues Lopes</h1></a>
      </section>
    </div>


    </>
    
  )
}