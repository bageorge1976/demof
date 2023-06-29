import React from "react";
import { useEffect, useState } from 'react';
//import samplePDF from './P4.pdf';
//import Menu from "./components/Menu";
import MenuDemo from "../components/MenuDemo"
//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const DemoP: React.FC<{id:number, language:number}> = (props) => {


  const en = 0;
  const es = 1;
  const fr = 2;

  const initOptionsG=Array(2).fill('');
  const [tempOption, setTempOption] = useState(initOptionsG);
  const initScore=Array(1).fill('');
  const initCheck=Array(1).fill(0);
  const [scoreReport, setScoreReport] = useState(initScore);
  const [presentPageScore, setPresentPageScore]= useState(0);
  const [presentCheckIndicator, setPresentCheckIndicator]=useState(initCheck);

  useEffect(() => {
    
    globalOption=tempOption;
  
  }, [tempOption]);
  
  useEffect(() => {
      
    let checkIndicator:number[] =[];
    for (i=0;i<numberOfItems;i++)
      checkIndicator.push(0);
  
    setPresentCheckIndicator(checkIndicator);
    setPresentPageScore(0);
  
  }, [props.language]);

  function scoreFunction(){
    let pageScore:number = 0;
    let checkIndicator:number[]=[];
    for (i = 0; i < numberOfItems; i++) {
        //console.log(i);
        //console.log (globalOption[i]);
        //console.log (optionsListCorrect[props.language][i]);
        if (pageItemType[i] ==="menu")
          if (globalOption[i]===optionsListCorrect[props.language][i]) {pageScore++; checkIndicator[i]=1;}
          else checkIndicator[i]=2; 
        if (pageItemType[i] ==="num")
          if ( Math.abs(parseFloat(globalOption[i])-parseFloat(optionsListCorrect[props.language][i]))<0.01) {pageScore++; checkIndicator[i]=1;}
          else checkIndicator[i]=2;
        //console.log(pageMaxScore);
      }
    setPresentCheckIndicator(checkIndicator);
    setPresentPageScore(pageScore);
    setScoreReport(globalOption);
  }

  const selectOption = (option: string, id:number, optionsSelected:string[]) => {
    optionsSelected[id] = option; 
    //console.log("ID is:"+id);
    
    //cheap way to duplicate the array
    const clone = optionsSelected.slice(0);
    setTempOption(clone);
  };





let pageMaxScore:number = 0;
let numberOfItems:number = 0;
let pageItemType:string[]=[];
let pageItemHeaderP: string[][]=[];
let pageItemFooterP: string[][]=[];
let optionsListBank: string[][][]=[];
let optionsListCorrect: string[][]=[];
let globalOption:string[] = tempOption;
let pageItemIndices:number[] = [];
let i:number = 0;
let pageCourse:string[] = [""];
let pageUnit:string[] = [""];
let pageTitle:string[] = [""];
let pageSolutionAddress:string[] = [""];


if(props.id === 0)
{

  pageItemType = ["info","menu","menu","menu","info","menu","menu", "menu", "menu"];
  for (i=0;i<pageItemType.length;i++) if((pageItemType[i]==="menu")||(pageItemType[i]==="num")) pageMaxScore++;
  
  numberOfItems = pageItemType.length;

  for (i = 0; i < numberOfItems; i++) {
    pageItemIndices.push(i);
 }

 pageSolutionAddress = ["/P0en.pdf","/P0es.pdf","/P0fr.pdf"];;
 pageCourse = ["Top Notch Fragments","Top Notch Fragmentos","Top Notch Fragments"];
 pageUnit = ["Introduction","Introduccion","Introduction"];
 pageTitle = ["Method of Fragments","Método de Fragmentos","Méthode des Fragments"];
  
  globalOption = tempOption;



  pageItemHeaderP=
  [
  [
    "<b><u><div class='d-flex align-items-center'><span class='mx-auto'>An Introduction To The Method Of Fragments<span></div></u></b>",
    "This presentation is delivered illustrating the <b>1.____</b> in action. ",
    "<b>2.____</b>",
    "The strategy of creating a MOF challenge is to start with a logical text or structure and separate some fragments from its content. The learner is then presented with two documents. First the remaining text containing the ordered fragments is generated, indicating where fragments have been removed. Second, a collection of the removed fragments in random order is generated. <b>3.____</b>",
    "Dr. Bogdan Alex Georgescu, the Director of Top Notch Canada has been faced with this type of exercises while trying to learn Spanish and trying to perform well in DELE (Diplomas de Español Lengua Extranjera) language examinations. By far the MOF puzzles were the most difficult in the lecture comprehension test. ",
    "Several reasons led Dr. Georgescu to believe that this type of exercises could be used in education in other fields where logical flow is critical such as mathematics, sciences and engineering. To begin with, no prior knowledge of the MOF puzzle content is necessary to solve it, provided no language and vocabulary barriers exist. <b>4.____</b>. Because it can be done internally, solely based on logic, solving MOF puzzles is ideal for self study. The teacher only provides fundamental vocabulary and the learner (re)constructs the information. ",
    "Another critical aspect of the MOF puzzle activity is it has the engagement level of an  assessment. <b>5.____</b>",
    "While the strategy for solving MOF puzzles may require some further research, the following fact becomes apparent. To reconstruct the puzzle successfully the learner has to load into his memory the meaning of both the removed fragments and the remaining text. <b>6.____</b>. This loading into the memory process is ultimately pure learning and it can be applied to linguistics, math theorems, developing engineering concepts and perhaps legal arguments as well.",
    "<b>7.____ </b>. Some are based on Geometry studied in the middle schools of Eastern Europe before the fall of communism in 1989 and some are Communications Engineering concepts which, although well known to experts, are challenging for many undergraduate engineering students. We invite you to click the “Courses” button at the top or at the bottom to further explore the application."
  ],
  [
    "<b><u><div class='d-flex align-items-center'><span class='mx-auto'>Una introducción al método de fragmentos<span></div></u></b>",
    "Esta presentación ilustra el <b>1.____</b> en acción. ",
    "<b>2.____</b>",
    "La estrategia para crear un desafío MDF es comenzar con un texto o estructura lógica y separar algunos fragmentos de su contenido. A continuación, se le presentan al alumno dos documentos. Primero se genera el texto restante que contiene los fragmentos ordenados, indicando dónde se han eliminado los fragmentos. En segundo lugar, se genera una colección de fragmentos eliminados en orden aleatorio. <b>3.____</b>",
    "El Dr. Bogdan Alex Georgescu, Director de Top Notch Canada, se ha enfrentado a este tipo de ejercicios al intentar aprender español y obtener buenos resultados en los exámenes de idioma DELE (Diplomas de Español Lengua Extranjera). Con mucho, los acertijos MDF fueron los más difíciles en la prueba de comprensión de lectura.",
    "Varias razones llevaron al Dr. Georgescu a creer que este tipo de ejercicios podría usarse en la educación en otros campos donde el flujo lógico es fundamental, como las matemáticas, las ciencias y la ingeniería. Para empezar, no es necesario un conocimiento previo del contenido del rompecabezas MDF para resolverlo, siempre que no existan barreras de idioma y vocabulario. <b>4.____</b>. Debido a que se puede hacer internamente, basándose únicamente en la lógica, resolver acertijos MDF es ideal para el autoaprendizaje. El profesor solo proporciona el vocabulario fundamental y el alumno (re)construye la información.",
    "Otro aspecto crítico de la actividad del rompecabezas MDF es que tiene el nivel de compromiso de una evaluación. <b>5.____</b>.",
    "Si bien la estrategia para resolver los acertijos MDF puede requerir más investigación, el siguiente hecho se hace evidente: para reconstruir el rompecabezas con éxito, el alumno debe cargar en su memoria el significado de los fragmentos eliminados y el texto restante. <b>6.____</b>. Esta carga en el proceso de la memoria es, en última instancia, puro aprendizaje y se puede aplicar a la lingüística, los teoremas matemáticos, el desarrollo de conceptos de ingeniería y quizás también a los argumentos legales.",
    "<b>7.____</b>. Algunos se basan en la geometría estudiada en las escuelas intermedias de Europa del Este antes de la caída del comunismo en 1989 y algunos son conceptos de ingeniería de comunicaciones que, aunque son bien conocidos por los expertos, son un desafío para muchos estudiantes de ingeniería de pregrado. Lo invitamos a hacer clic en el botón “Cursos” tanto en la parte superior como inferior para explorar más la aplicación."
  ],
  [
    "<b><u><div class='d-flex align-items-center'><span class='mx-auto'>Une introduction à la méthode des fragments<span></div></u></b>",
    "Cette présentation illustre la <b>1.____</b> en action. ",
    "<b>2.____</b>",
    "La stratégie pour créer un défi MDF consiste à commencer par un texte ou une structure logique et à séparer quelques morceaux de votre contenu. L'étudiant se voit alors présenter deux documents. Le texte restant contenant les morceaux triés est d'abord généré, indiquant où les morceaux ont été supprimés. Deuxièmement, une collection de fragments supprimés est générée dans un ordre aléatoire. <b>3.____</b>",
    "Le Dr Bogdan Alex Georgescu, directeur de Top Notch Canada, a fait face à ces types d'exercices lorsqu'il a essayé d'apprendre l'espagnol et a réussi les examens de langue DELE (Diplomas de Español Lengua Extranjera). De loin, les énigmes MDF ont été les plus difficiles au test de compréhension de lecture.",
    "Plusieurs raisons ont amené le Dr Georgescu à croire que ces types d'exercices pourraient être utilisés en éducation dans d'autres domaines où le flux logique est essentiel, comme les mathématiques, les sciences et l'ingénierie. Pour commencer, aucune connaissance préalable du contenu du puzzle MDF n'est nécessaire pour le résoudre, tant qu'il n'y a pas de barrières de langue et de vocabulaire. <b>4.____</b>. Parce que cela peut être fait en interne, basé uniquement sur la logique, la résolution d'énigmes MDF est idéale pour l'auto-apprentissage. L'enseignant ne fournit que le vocabulaire fondamental et l'élève (re)construit l'information.",
    "Un autre aspect critique de l'activité de puzzle MDF est qu'elle a le niveau d'engagement d'une évaluation. <b>5.____</b>.",
    "Bien que la stratégie de résolution des énigmes MDF puisse nécessiter une enquête plus approfondie, le fait suivant devient apparent : pour réussir à reconstruire l'énigme, l'étudiant doit charger dans sa mémoire la signification des fragments supprimés et du texte restant. <b>6.____</b>. Cette charge sur le processus de la mémoire est en fin de compte un apprentissage pur et peut être appliquée à la linguistique, aux théorèmes mathématiques, au développement de concepts d'ingénierie et peut-être aussi à des arguments juridiques.",
    "<b>7.____</b>. Certains sont basés sur la géométrie étudiée dans les collèges d'Europe de l'Est avant la chute du communisme en 1989 et certains sont des concepts d'ingénierie des communications qui, bien que bien connus des experts, représentent un défi pour de nombreux élèves-ingénieurs du premier cycle. Nous vous invitons à cliquer sur le bouton “Cours” en haut et en bas pour explorer davantage l'application."
  ]
];
  pageItemFooterP=[
  [
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
  ],
  [ 
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
  ],
  [
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
  ]
];

const solEn:string[]=[  
  "method of fragments (MOF)",
  "More specifically, we consider this presentation to be a logical structure and we deliver it using MOF.", 
  "The challenge for the learner is to reconstruct the initial text using the two items, thus solving the MOF puzzle.", 
  "To avoid compounding a logical problem with a language challenge we will try to offer these MOF puzzles in three high circulation languages.",
  "Rather than reading theorems from a textbook or trying to focus on a lecture the learner is engaged in solving a puzzle and being evaluated for it.",
  "Simply, solving the MOF puzzle as a multiple choice test is not usually a successful strategy.",
  "Currently, on our site we present a few rather difficult MOF examples."
];

const solEs:string[]=[
  "método de fragmentos (MDF)",
  "Más específicamente, consideramos que esta presentación tiene una estructura lógica y la entregamos usando MDF.", 
  "El desafío para el alumno es reconstruir el texto inicial usando los dos elementos, resolviendo así el rompecabezas MDF.", 
  "Para evitar complicar un problema lógico con un desafío de idioma, intentaremos ofrecer estos rompecabezas MDF en tres idiomas de alta circulación.",
  "En lugar de leer teoremas de un libro de texto o tratar de concentrarse en una lección, el alumno se dedica a resolver un acertijo y ser evaluado por ello.",
  "Simplemente, resolver el rompecabezas MDF como una prueba de opción múltiple no suele ser una estrategia exitosa.",
  "Actualmente, en nuestro sitio presentamos algunos ejemplos de MDF bastante difíciles."
];

const solFr:string[]=[
  "méthode des fragments (MDF)",
  "Plus précisément, nous considérons que cette présentation a une structure logique et nous la livrons en MDF.", 
  "Le défi pour l'étudiant est de reconstruire le texte initial à l'aide des deux éléments, résolvant ainsi le puzzle MDF.", 
  "Pour éviter de compliquer un problème de logique avec un défi linguistique, nous essaierons de proposer ces puzzles MDF dans trois langues à forte diffusion.",
  "Au lieu de lire des théorèmes d'un manuel ou d'essayer de se concentrer sur une leçon, l'élève se consacre à résoudre un casse-tête et à être évalué pour celui-ci.",
  "Résoudre simplement le puzzle MDF comme un test à choix multiples n'est généralement pas une stratégie réussie.",
  "Actuellement, sur notre site, nous présentons quelques exemples assez difficiles de MDF."
];

optionsListBank=[
  [
    [],solEn,solEn,solEn,[],solEn,solEn,solEn,solEn,
  ],
  [
    [],solEs,solEs,solEs,[],solEs,solEs,solEs,solEs,
  ],
  [
    [],solFr,solFr,solFr,[],solFr,solFr,solFr,solFr,
  ]
]; 

optionsListCorrect =[["",solEn[0],solEn[1], solEn[2], "",solEn[3],solEn[4],solEn[5],solEn[6]],["",solEs[0],solEs[1], solEs[2], "",solEs[3],solEs[4],solEs[5],solEs[6]],["",solFr[0],solFr[1], solFr[2], "",solFr[3],solFr[4],solFr[5],solFr[6]]];

}


if(props.id === 1)
{
  numberOfItems = 6;

  for (i = 0; i < numberOfItems; i++) {
    pageItemIndices.push(i);
 }

 pageSolutionAddress = ["/P1en.pdf","/P1es.pdf","/P1fr.pdf"];;
 pageCourse = ["Mathematics Grade 6 Geometry","Matemáticas Grado 6 Geometría","Mathématiques 6e année Géométrie"];
 pageUnit = ["Triangle Geometry","Geometría Del Triángulo","Géométrie Triangulaire"];
 pageTitle = ["P1. Height And Median In An Isosceles Triangle","P1. Altura Y Mediana En Un Triangulo Isosceles","P1. Hauteur Et Médiane Dans Un Triangle Isocèle"];
  
  globalOption = tempOption;

  pageItemType = ["info","menu","menu","menu","num", "info"];
  for (i=0;i<pageItemType.length;i++) if((pageItemType[i]==="menu")||(pageItemType[i]==="num")) pageMaxScore++;

  pageItemHeaderP=
  [
  [
    "Consider isosceles triangle<kaTex> $$\\triangle ABC$$ ($$AB \\cong AC$$)<kaTex> and M the middle of BC as shown in Figure 1.<br/> Prove that<kaTex> $$AM \\perp BC$$. <kaTex> <div class='d-flex align-items-center'><img class='mx-auto' src=/triisosceles.png></div><div style='text-align:center;'><span>Figure 1. Isosceles triangle and median.</span></div>",
    "The symbol <kaTex>$$\\cong$$<kaTex> means congruence that is same shape (measures) but not equality. <b>1.____</b> ",
    "<kaTex>$$AM \\perp BC$$<kaTex> means the measure of angle <kaTex>$$\\angle AMB$$<kaTex> is equal to the measure of angle <kaTex>$$\\angle AMC$$<kaTex> is equal to <kaTex>$$90^\\circ$$<kaTex>. <div><b>2.____</b></div>",
    "We have <kaTex>$$AB \\cong AC$$<kaTex> and <kaTex>$$BM \\cong MC$$<kaTex>. <b>3.____</b>",
    "From the congruence of the triangles mentioned before we observe the congruence of the angles <kaTex>$$\\angle BMA$$<kaTex> and <kaTex>$$\\angle AMC$$<kaTex>.<div></div> The sum of (the measures of) these two congruent angles is <kaTex>$$180^\\circ$$<kaTex>.<br/> We deduce each of them has a measure of: <b>4.____</b> ",
    "We conclude: <kaTex>$$AM \\perp BC$$."
  ],
  [
    "Se considera un triángulo isósceles<kaTex> $$\\triangle ABC$$ ($$AB \\cong AC$$)<kaTex> y M el medio de BC como se muestra en la Fig. 1.<br/> Demuestre que <kaTex>$$AM \\perp BC$$. <kaTex> <div class='d-flex align-items-center'><img class='mx-auto' src=/triisosceles.png></div><div style='text-align:center;'><span>Figura 1. Triángulo isósceles y mediana.</span></div>",
    "El símbolo <kaTex>$$\\cong$$<kaTex> significa congruencia, tener la misma forma (medida) pero no igualdad. <b>1.____</b> ",
    "<kaTex>$$AM \\perp BC$$<kaTex> significa que la medida del ángulo <kaTex>$$\\angle AMB$$<kaTex> es igual a la medida del ángulo <kaTex>$$\\angle AMC$$<kaTex> es igual a <kaTex>$$90^\\circ$$<kaTex>. <div><b>2.____</b></div>",
    "Se observa que <kaTex>$$AB \\cong AC$$<kaTex> y <kaTex>$$BM \\cong MC$$<kaTex>. <b>3.____</b>",
    "De la congruencia de los triángulos antes mencionados observamos la congruencia de los ángulos <kaTex>$$\\angle BMA$$<kaTex> y <kaTex>$$\\angle AMC$$<kaTex>.<div></div> La suma de (las medidas de) estos dos ángulos congruentes es <kaTex>$$180^\\circ$$<kaTex>.<br/> Se deduce cada uno de ellos tiene una medida de: <b>4.____</b> ",
    "Se concluye: <kaTex>$$AM \\perp BC$$."
  ],
  [
    "Considérons le triangle isocèle <kaTex>$$\\triangle ABC$$ ($$AB \\cong AC$$)<kaTex> et M au milieu de BC comme le montre la Fig. 1.<br/> Montrer que $AM \perp BC$.<kaTex> $$AM \\perp BC$$. <kaTex> <div class='d-flex align-items-center'><img class='mx-auto' src=/triisosceles.png></div><div style='text-align:center;'><span>Figure 1. Triangle isocèle et médiane.</span></div>",
    "Le symbole <kaTex>$$\\cong$$<kaTex> signifie congruence qui est de même forme (mesures) mais pas d'égalité. <b>1.____</b> ",
    "<kaTex>$$AM \\perp BC$$<kaTex> signifie que la mesure de l'angle <kaTex>$$\\angle AMB$$<kaTex> est égale à la mesure de l'angle <kaTex>$$\\angle AMC$$<kaTex> est égale à <kaTex>$$90^\\circ$$<kaTex>. <div><b>2.____</b></div>",
    "On a <kaTex>$$AB \\cong AC$$<kaTex> et <kaTex>$$BM \\cong MC$$<kaTex>. <b>3.____</b>",
    "A partir de la congruence des triangles mentionnés précédemment on observe la congruence des angles <kaTex>$$\\angle BMA$$<kaTex> et <kaTex>$$\\angle AMC$$<kaTex>.<div></div> La somme de (les mesures de) ces deux angles congruents est de <kaTex>$$180^\\circ$$<kaTex>.<br/> On en déduit que chacun d'eux a une mesure de: <b>4.____</b> ",
    "On conclut: <kaTex>$$AM \\perp BC$$."
  ]
];
  pageItemFooterP=[
  [
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
  ],
  [
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
  ],
  [
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
  ]
];

const solEn:string[]=[  
  "Equality means the same sets of points.",
  "Equality means the same sides.", 
  "The proof is based on the primary observation that triangles $$\\triangle BAM$$ and $$\\triangle CAM$$ are congruent.", 
  "The proof is based on the primary observation that triangles $$\\triangle AMB$$ and $$\\triangle CAM$$ are congruent.",
  "The proof is based on the primary observation that triangles $$\\triangle ABM$$ and $$\\triangle CAM$$ are congruent.",
  "The case of congruence is side-angle-side.",
  "The case of congruence is angle-side-angle.",
  "The case of congruence is side-side-side."
];

const solEs:string[]=[
  "Igualdad significa los mismos conjuntos de puntos.",
  "Igualdad significa los mismos lados.", 
  "La demostración esta basada en la observación primaria de que los triángulos $$\\triangle BAM$$ y $$\\triangle CAM$$ son congruentes.", 
  "La demostración esta basada en la observación primaria de que los triángulos $$\\triangle AMB$$ y $$\\triangle CAM$$ son congruentes.",
  "La demostración esta basada en la observación primaria de que los triángulos $$\\triangle ABM$$ y $$\\triangle CAM$$ son congruentes.",
  "El caso de congruencia es lado-ángulo-lado.",
  "El caso de congruencia es ángulo-lado-ángulo.",
  "El caso de congruencia es lado-lado-lado."
];

const solFr:string[]=[
  "L'égalité signifie les mêmes ensembles de points.",
  "L'égalité signifie les mêmes côtés.", 
  "La preuve est basée sur l'observation principale que les triangles $$\\triangle BAM$$ et $$\\triangle CAM$$ sont congruents.", 
  "La preuve est basée sur l'observation principale que les triangles $$\\triangle AMB$$ et $$\\triangle CAM$$ sont congruents.",
  "La preuve est basée sur l'observation principale que les triangles $$\\triangle ABM$$ et $$\\triangle CAM$$ sont congruents.",
  "Le cas de la congruence est côté-angle-côté.",
  "Le cas de la congruence est angle-côté-angle.",
  "Le cas de la congruence est côté-côté-côté."
];

optionsListBank=[
  [
    [],solEn,solEn,solEn,[],[],
  ],
  [
    [],solEs,solEs,solEs,[],[],
  ],
  [
    [],solFr,solFr,solFr,[],[]
  ]
]; 

optionsListCorrect =[["",solEn[0],solEn[2], solEn[7], "90",""],["",solEs[0],solEs[2], solEs[7], "90",""],["",solFr[0],solFr[2], solFr[7], "90",""]];

}

if(props.id === 2)
{
  numberOfItems = 6;

  for (i = 0; i < numberOfItems; i++) {
    pageItemIndices.push(i);
 }

 pageSolutionAddress = ["/P2en.pdf","/P2es.pdf","/P2fr.pdf"];;
 pageCourse = ["Mathematics Grade 6 Geometry","Matemáticas Grado 6 Geometría","Mathématiques 6e année Géométrie"];
 pageUnit = ["Triangle Geometry","Geometría Del Triángulo","Géométrie Triangulaire"];
 pageTitle = ["P2. Median In A Right Angle Triangle","P2. Mediana En Un Triangulo Rectangulo","P2. Médiane Dans Un Triangle Rectangle"];
  
  globalOption = tempOption;

  pageItemType = ["info","menu","menu","menu","menu", "info"]
  for (i=0;i<pageItemType.length;i++) if((pageItemType[i]==="menu")||(pageItemType[i]==="num")) pageMaxScore++;

  pageItemHeaderP=
  [
  [
    "Consider the right angle triangle <kaTex>$$\\triangle ABC$$, $$m(\\angle A)=90^\\circ$$<kaTex> and <kaTex>$$M$$<kaTex> the middle of <kaTex>$$BC$$<kaTex> as shown in Figure 1.<br/> Prove that <kaTex>$$AM = \\frac{BC}{2}$$.<kaTex> <div class='d-flex align-items-center'><img class='mx-auto' src=/righttrimed.png></div><div style='text-align:center;'><span>Figure 1. Right angle triangle and median.</span></div>",
    "The proof will be completed by showing that <kaTex>$$\\triangle BAM$$<kaTex> is isosceles that is <kaTex>$$AM \\cong BM$$.<kaTex> <b>1.____</b>",
    "To prove that <kaTex>$$AM \\cong BM$$<kaTex> it is best to use an auxiliary construction. <b>2.____</b> <div class='d-flex align-items-center'><img class='mx-auto' src=/P2LEFT.png></div><br/><div class='d-flex align-items-center'><img class='mx-auto' src=/P2RIGHT.png></div><div style='text-align:center;'><span>Figure 2. Auxiliary construction choices.</span></div>",
    "To prove that <kaTex>$$AM \\cong BM$$<kaTex>, the most helpful pair of similar triangles is: <kaTex>$$\\triangle ABC$$<kaTex> and <kaTex>$$\\triangle EBM$$.<kaTex><br/> <b>3.____</b>. This implies E is the middle point of AB.",
    "Because <kaTex>$$AE \\cong BE$$<kaTex> and they have a right angle it can be stated that triangle <kaTex>$$\\triangle AEM$$<kaTex> is congruent with <kaTex>$$\\triangle BEM$$<kaTex>.<br/><b>4.____</b>",
    "One of the consequences of the triangles congruence is that <kaTex>$$AM \\cong BM$$.<kaTex><br/>We conclude: <kaTex>$$AM = BM = \\frac{BC}{2}$$",
  ],
  [
    "Se considera un triángulo rectángulo  <kaTex>$$\\triangle ABC$$, $$m(\\angle A)=90^\\circ$$<kaTex> y <kaTex>$$M$$<kaTex> el medio de <kaTex>$$BC$$<kaTex> como se muestra en la Fig. 1.<br/> Demuestre que <kaTex>$$AM = \\frac{BC}{2}$$.<kaTex> <div class='d-flex align-items-center'><img class='mx-auto' src=/righttrimed.png></div><div style='text-align:center;'><span>Figura 1. Triángulo rectángulo y mediana.</span></div>",
    "La demostración se completará mostrando que <kaTex>$$\\triangle BAM$$<kaTex> es isósceles, es decir, <kaTex>$$AM \\cong BM$$.<kaTex> <b>1.____</b>",
    "Para probar que <kaTex>$$AM \\cong BM$$<kaTex> es mejor usar una construcción auxiliar. <b>2.____</b> <div class='d-flex align-items-center'><img class='mx-auto' src=/P2LEFT.png></div><br/><div class='d-flex align-items-center'><img class='mx-auto' src=/P2RIGHT.png></div><div style='text-align:center;'><span>Figura 2. Opciones de condiciones auxiliares.</span></div>",
    "Para probar que <kaTex>$$AM \\cong BM$$<kaTex>, el par de triángulos similares más útil es: <kaTex>$$\\triangle ABC$$<kaTex> y <kaTex>$$\\triangle EBM$$.<kaTex><br/> <b>3.____</b>. Esto implica que $E$ es el punto medio de $AB$.",
    "Como <kaTex>$$AE \\cong BE$$<kaTex> y tienen un ángulo recto se puede inferir que el triángulo <kaTex>$$\\triangle AEM$$<kaTex> es congruente con <kaTex>$$\\triangle BEM$$<kaTex>.<br/><b>4.____</b>",
    "Una de las consecuencias de la congruencia de triángulos es que <kaTex>$$AM \\cong BM$$.<kaTex><br/>Se concluye: <kaTex>$$AM = BM = \\frac{BC}{2}$$",
  ],
  [
    "Considérez le triangle rectangle <kaTex>$$\\triangle ABC$$, $$m(\\angle A)=90^\\circ$$<kaTex> et <kaTex>$$M$$<kaTex> le milieu de <kaTex>$$BC$$<kaTex> comme indiqué dans la Fig. 1.<br/> Démontre que <kaTex>$$AM = \\frac{BC}{2}$$.<kaTex> <div class='d-flex align-items-center'><img class='mx-auto' src=/righttrimed.png></div><div style='text-align:center;'><span>Figure 1. Triangle rectangle et médiane.</span></div>",
    "La preuve sera complétée en montrant que <kaTex>$$\\triangle BAM$$<kaTex> est isocèle c'est-à-dire <kaTex>$$AM \\cong BM$$.<kaTex> <b>1.____</b>",
    "Pour prouver que <kaTex>$$AM \\cong BM$$<kaTex> il est préférable d'utiliser une construction auxiliaire. <b>2.____</b> <div class='d-flex align-items-center'><img class='mx-auto' src=/P2LEFT.png></div><br/><div class='d-flex align-items-center'><img class='mx-auto' src=/P2RIGHT.png></div><div style='text-align:center;'><span>Figure 2. Auxiliary construction choices.</span></div>",
    "Pour prouver que <kaTex>$$AM \\cong BM$$<kaTex>, la paire de triangles semblables la plus utile est: <kaTex>$$\\triangle ABC$$<kaTex> et <kaTex>$$\\triangle EBM$$.<kaTex><br/> <b>3.____</b>. Cela implique que E est le milieu de AB.",
    "Comme <kaTex>$$AE \\cong BE$$<kaTex> et qu'ils ont un angle droit, on peut affirmer que le triangle <kaTex>$$\\triangle AEM$$<kaTex> est congru à <kaTex>$$\\triangle BEM$$<kaTex>.<br/><b>4.____</b>",
    "Une des conséquences de la congruence des triangles est que <kaTex>$$AM \\cong BM$$.<kaTex><br/>On en conclut: <kaTex>$$AM = BM = \\frac{BC}{2}$$",

  ]
];
  pageItemFooterP=[
  [
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
  ],
  [
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
  ],
  [
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
  ]
];

const solEn:string[]=[  
  "Since M is the middle point of we will conclude $$AM = BM = \\frac{BC}{\\textcolor{red}{2}}$$.", 
  "Since M is an arbitrary point on BC we will conclude $$AM = BM = \\frac{BC}{2}$$.",
  "To relate AM it is best to use the perpendicular from M to AB.",
  "To relate AM it is best to use the perpendicular from M to AC.",
  "Consider the similarity of these triangles and $$BM = \\frac{BC}{2}$$.", 
  "The case of congruence is side-angle-side.",
  "The case of congruence is angle-side-angle.",
  "The case of congruence is side-side-side."
];

const solEs:string[]=[
  "Como $$M$$ es el punto medio de $$BC$$, se concluirá que $$AM = BM = \\frac{BC}{2}$$.", 
  "Como $$M$$ es un punto arbitrario de $$BC$$, se concluirá que $$AM = BM = \\frac{BC}{2}$$.",
  "Para relacionar $$AM$$ y $$BM$$ es mejor usar la perpendicular de $$M$$ a $$AB$$",
  "Para relacionar $$AM$$ y $$BM$$ es mejor usar la perpendicular de $$M$$ a $$AC$$",
  "Considere la similitud de estos triángulos y $$BM = \\frac{BC}{2}$$.", 
  "El caso de congruencia observado es lado-ángulo-lado.",
  "El caso de congruencia observado es ángulo-lado-ángulo.",
  "El caso de congruencia observado es lado-lado-lado."
];

const solFr:string[]=[
  "Puisque M est le milieu de BC on conclura $$AM = BM = \\frac{BC}{2}$$", 
  "Puisque M est arbirtraire sur BC on conclura $$AM = BM = \\frac{BC}{2}$$",
  "Pour relier $AM$ et $BM$, il est préférable utiliser la perpendiculaire de M à AB.",
  "Pour relier $AM$ et $BM$, il est préférable utiliser la perpendiculaire de M à AC.",
  "Considérez la similitude de ces triangles et $$BM = \\frac{BC}{2}$$.", 
  "Le cas de congruence observé est côté-angle-côté.",
  "Le cas de congruence observé est angle-côté-angle.",
  "Le cas de congruence observé est côté-côté-côté."
];

optionsListBank=[
  [
    [],solEn,solEn,solEn,solEn,[],
  ],
  [
    [],solEs,solEs,solEs,solEs,[],
  ],
  [
    [],solFr,solFr,solFr,solFr,[],
  ]
]; 

optionsListCorrect =[["",solEn[0],solEn[2], solEn[4], solEn[5],""],["",solEs[0],solEs[2], solEs[4], solEs[5],""],["",solFr[0],solFr[2], solFr[4], solFr[5],""] ];

}

if(props.id === 3)
{
  numberOfItems = 10;

  for (i = 0; i < numberOfItems; i++) {
    pageItemIndices.push(i);
 }

 pageSolutionAddress = ["/P3en.pdf","/P3es.pdf","/P3fr.pdf"];
 pageCourse = ["Electrical Engineering Digital Communications","Ingeniería Eléctrica Comunicaciones Digitales","Génie Électrique Communications Numériques"];
 pageUnit = ["Introduction", "Introducción", "Introduction"];
 pageTitle = ["P1. Error Probability","P1. Probabilidad de error","P1. Probabilité d'erreur"];
  
  globalOption = tempOption;

  pageItemType = ["info","menu","menu","menu","menu","menu", "menu","menu","menu", "menu"]
  for (i=0;i<pageItemType.length;i++) if((pageItemType[i]==="menu")||(pageItemType[i]==="num")) pageMaxScore++;

  pageItemHeaderP=
  [
  [
    "<div class='d-flex align-items-center'><img width='90%' class='mx-auto' src=/Probp1p2.png></div><div style='text-align:center;'>Figure 1. Conditional probability density functions: p(z|s<sub>1</sub>) and p(z|s<sub>2</sub>)</div><p></p>",
    "For the binary example in Figure 1, there are two ways in which errors can occur. An error, e, will occur when <kaTex>$$s_1(t)$$<kaTex> is sent, and channel noise results in the receiver output signal <kaTex>$$z(T)$$<kaTex>, being less than <kaTex>$$\\gamma_0$$.<kaTex><b>1.____</b>",
    "This is illustrated by the shaded area to the left of <kaTex>$$\\gamma_0$$<kaTex> in Figure 1. Similarly an error occurs when <kaTex>$$s_2(t)$$<kaTex> is sent and the channel noise results in <kaTex>$$z(T)$$<kaTex>, being greater than <kaTex>$$\\gamma_0$$<kaTex>. <b>2.____</b>",
    "The probability of an error is the sum of the probabilities of all the ways that an error can occur. For the binary case, we can express the probability of bit error, <kaTex>$$P_B$$<kaTex>, as follows:<kaTex>$$P_B = \\sum_{i=1}^2 P(e, s_i )$$<kaTex>. <b>3.____</b>",
    "That is, given that signal <kaTex>$$s_1 (t)$$<kaTex> was transmitted, an error results if hypothesis <kaTex>$$H_2$$<kaTex> is chosen, or given that the signal <kaTex>$$s_2 (t)$$<kaTex> was transmitted, an error results if hypothesis <kaTex>$$H_1$$<kaTex> is chosen. For the case where the a priori probabilities are equal, that is, <kaTex>$$P(s_1 )= P(s_2 ) = \\frac{1}{2}$$,<kaTex> <b>4.____</b>",
    "and because of the symmetry of the probability density functions: <b>5.____</b>",
    "The probability of a bit error, <kaTex>$$P_B$$<kaTex>, is numerically equal to the area under the \"tail\" of either likelihood function, <kaTex>$$p(z|s_1)$$<kaTex> o <kaTex>$$p(z|s_2)$$<kaTex>, falling on the \"incorrect\" side of the threshold. <b>6.____</b>",
    "where <kaTex>$$\\gamma_0 = (a_1 + a_2 )/2$$<kaTex> is the optimum threshold from  Figure 1.<b>7.____</b> where <kaTex>$$\\sigma_0^2$$<kaTex> is the variance of the noise out of the correlator.",
    "Let <kaTex>$$u=(z-a_2)/\\sigma_0$$<kaTex>. Then <kaTex>$$\\sigma_0 du = dz$$<kaTex> and: <b>8.____</b>",
    "where <kaTex>$$Q(x)$$<kaTex>, called the complementary error function or co-error function, is a commonly used symbol for the probability under the tails of the Gaussian distribution. It is defined as: <b>9.____</b>"
  ],
  [
    "<div class='d-flex align-items-center'><img width='90%' class='mx-auto' src=/Probp1p2.png></div><div style='text-align:center;'>Figura 1. Funciones de densidad de probabilidad condicional: p(z|s<sub>1</sub>) and p(z|s<sub>2</sub>)</div><p></p>",
    "Para el ejemplo binario de la Fig. 1, hay dos formas en las que pueden ocurrir errores. Se producirá un error, e, cuando se envía <kaTex>$$s_1(t)$$<kaTex>, y el ruido del canal da como resultado que la señal de salida del receptor <kaTex>$$z(T)$$<kaTex>, sea menor que <kaTex>$$\\gamma_0$$.<kaTex><b>1.____</b>",
    "Esto se ilustra mediante el área sombreada a la izquierda de <kaTex>$$\\gamma_0$$<kaTex> en la Fig. 1.  De manera similar, ocurre un error cuando <kaTex>$$s_2(t)$$<kaTex> es enviado y el ruido del canal resulta en que <kaTex>$$z(T)$$<kaTex>, siendo mayor que <kaTex>$$\\gamma_0$$<kaTex>. <b>2.____</b>",
    "La probabilidad de un error es la suma de las probabilidades de todas las formas en que puede ocurrir un error. En el caso binario, se puede expresar la probabilidad de error de bit, <kaTex>$$P_B$$<kaTex>, de la siguiente manera: <kaTex>$$P_B = \\sum_{i=1}^2 P(e, s_i )$$<kaTex>. <b>3.____</b>",
    "Es decir, dado que se transmitió la señal <kaTex>$$s_1 (t)$$<kaTex>, resulta un error si se elige la hipótesis <kaTex>$$H_2$$<kaTex>, o si se da que se transmitió la señal <kaTex>$$s_2 (t)$$<kaTex>, se produce un error si se elige la hipótesis <kaTex>$$H_1$$<kaTex>. Para el caso en que el las probabilidades a priori son iguales, es decir, <kaTex>$$P(s_1 )= P(s_2 ) = \\frac{1}{2}$$,<kaTex> <b>4.____</b>",
    "y debido a la simetría de las funciones de densidad de probabilidad: <b>5.____</b>",
    "La probabilidad de un error de bit, <kaTex>$$P_B$$<kaTex>, es numéricamente igual al área bajo la \"cola\" de cualquiera de las funciones de probabilidad,<kaTex>$$p(z|s_1)$$<kaTex> o <kaTex>$$p(z|s_2)$$<kaTex>, cayendo en el lado \"incorrecto\" del umbral. <b>6.____</b>",
    "donde <kaTex>$$\\gamma_0 = (a_1 + a_2 )/2$$<kaTex> es el umbral óptimo de la Fig. 1. <b>7.____</b> donde <kaTex>$$\\sigma_0^2$$<kaTex> es la varianza del ruido fuera del correlacionador.",
    "Sea <kaTex>$$u=(z-a_2)/\\sigma_0$$<kaTex>. Entonces <kaTex>$$\\sigma_0 du = dz$$<kaTex> y: <b>8.____</b>",
    "donde <kaTex>$$Q(x)$$<kaTex>, llamada función de error complementaria o función de co-error, es un símbolo de uso común para la probabilidad bajo las colas de la distribución gaussiana. Se define como: <b>9.____</b>"
  ],
  [
    "<div class='d-flex align-items-center'><img width='90%' class='mx-auto' src=/Probp1p2.png></div><div style='text-align:center;'>Figure 1. Conditional probability density functions: p(z|s<sub>1</sub>) and p(z|s<sub>2</sub>)</div><p></p>",
    "Pour l'exemple binaire de la Fig. 1, , les erreurs peuvent se produire de deux manières. Une erreur, e, , se produira lorsque <kaTex>$$s_1(t)$$<kaTex> est envoyé, et le bruit de canal a pour résultat que le signal de sortie du récepteur <kaTex>$$z(T)$$<kaTex>, est inférieur à <kaTex>$$\\gamma_0$$.<kaTex><b>1.____</b>",
    "Ceci est illustré par la zone ombrée à gauche de <kaTex>$$\\gamma_0$$<kaTex> sur la Fig. 1. De même, une erreur se produit lorsque <kaTex>$$s_2(t)$$<kaTex> est émis et le bruit de canal se traduit par<kaTex>$$z(T)$$<kaTex>, supérieur à <kaTex>$$\\gamma_0$$<kaTex>. <b>2.____</b>",
    "La probabilité d'une erreur est la somme des probabilités de toutes les façons dont une erreur peut se produire. Dans le cas binaire, nous pouvons exprimer la probabilité d'erreur sur les bits, <kaTex>$$P_B$$<kaTex>, comme suit: <kaTex>$$P_B = \\sum_{i=1}^2 P(e, s_i )$$<kaTex>. <b>3.____</b>",
    "Autrement dit, étant donné que le signal <kaTex>$$s_1 (t)$$<kaTex> a été transmis, une erreur se produit si l'hypothèse <kaTex>$$H_2$$<kaTex> est choisie, ou donnée que le signal <kaTex>$$s_2 (t)$$<kaTex> $ a été transmis, une erreur se produit si l'hypothèse <kaTex>$$H_1$$<kaTex> est choisie. Pour le cas où les probabilités a priori sont égales, c'est-à-dire que <kaTex>$$P(s_1 )= P(s_2 ) = \\frac{1}{2}$$,<kaTex> <b>4.____</b>",
    "et à cause de la symétrie des fonctions de densité de probabilité: <b>5.____</b>",
    "La probabilité d'une erreur binaire, <kaTex>$$P_B$$<kaTex>, est numériquement égale à la zone sous la \"queue\" de l'une ou l'autre probabilité fonction, <kaTex>$$p(z|s_1)$$<kaTex> ou <kaTex>$$p(z|s_2)$$<kaTex>$, tombant du côté \"incorrect\" du seuil. On peut donc calculer <b>6.____</b>",
    "où <kaTex>$$\\gamma_0 = (a_1 + a_2 )/2$$<kaTex> est le seuil optimal de la Fig. 1.<b>7.____</b> where <kaTex>$$\\sigma_0^2$$<kaTex> où $\sigma_0^2$ est la variance du bruit sortant du corrélateur.",
    "Soit <kaTex>$$u=(z-a_2)/\\sigma_0$$<kaTex>. Alors <kaTex>$$\\sigma_0 du = dz$$<kaTex> et: <b>8.____</b>",
    "où <kaTex>$$Q(x)$$<kaTex>, appelée fonction d'erreur complémentaire ou fonction de co-erreur, est un symbole couramment utilisé pour la probabilité sous les queues de la distribution gaussienne. Il est défini comme: <b>9.____</b>"
  ]
];
  pageItemFooterP=[
  [
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
  ],
  [
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
  ],
  [
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
  ]
];

const solEn:string[]=[
  "The probability of such an occurence is: $$P(e|s_1 )=P(H_2|s_1 ) = \\int_{-\\infty}^{\\gamma_0}p(z|s_1 )$$", 
  "The probability of such an occurence is: $$P(e|s_2 ) = P(H_1|s_2 ) = \\int_{\\gamma_0}^{\\infty}p(z|s_2  ) dz$$", 
  "Combining the previous three equations, we can write: $$P_B = P(H_2|s_1 )P(s_1 ) + P(H_1|s_2 )P(s_2 )$$ ", 
  "$$P_B = \\frac{1}{2}P(H_2|s_1 ) + \\frac{1}{2}P(H_1|s_2 )$$",
  "$$P_B = P(H_2|s_1 ) = P(H_1|s_2 )$$",
  "We can therefore compute $$P_B$$ by integrating $$p(z|s_1 )$$ between the limits $$-\\infty$$ and $$\\gamma_0$$, or as shown below, by integrating $$p(z|s_2  )$$ between the limits $$\\gamma_0$$ and $$\\infty$$: $$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 + a_2 )/2}^{\\infty}p(z|s_2  ) dz$$",
  "Replacing the likelihood $$p(z|s_2  )$$ with its Gaussian equivalent, we have:$$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 + a_2 )/2}^{\\infty} \\frac{1}{\\sigma_0 \\sqrt{2 \\pi}} exp\\left[ -\\frac{1}{2}\\left(\\frac{z-a_2}{\\sigma_0} \\right)^2 \\right] dz$$",
  "$$P_B = \\int_{u=(a_1 - a_2 )/(2\\sigma_0)}^{u=\\infty}$$ $$\\frac{1}{\\sqrt{2 \\pi}}exp\\left( -\\frac{u^2}{2}\\right) du = Q \\left (\\frac{a_1 -a_2}{2\\sigma_0} \\right)$$",
  "$$Q(x)= \\frac{1}{\\sqrt{2 \\pi}}\\int_{x}^{\\infty}  exp\\left( -\\frac{u^2}{2}\\right) du$$"
]


const solEs:string[]=[
  "La probabilidad de tal ocurrencia es: $$P(e|s_1 )=P(H_2|s_1 ) = \\int_{-\\infty}^{\\gamma_0}p(z|s_1 )$$", 
  "La probabilidad de tal ocurrencia es: $$P(e|s_2 ) = P(H_1|s_2 ) = \\int_{\\gamma_0}^{\\infty}p(z|s_2  ) dz$$", 
  "Combinando las tres ecuaciones anteriores, se puede escribir: $$P_B = P(H_2|s_1 )P(s_1 ) + P(H_1|s_2 )P(s_2 )$$ ", 
  "$$P_B = \\frac{1}{2}P(H_2|s_1 ) + \\frac{1}{2}P(H_1|s_2 )$$",
  "$$P_B = P(H_2|s_1 ) = P(H_1|s_2 )$$",
  "Por lo tanto, se puede calcular $$P_B$$ integrando $$p(z|s_1 )$$ entre los limites $$-\\infty$$ y $$\\gamma_0$$, o como se muestra a continuación, integrando $$p(z|s_2  )$$ entre los limites $$\\gamma_0$$ y $$\\infty$$: $$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 + a_2 )/2}^{\\infty}p(z|s_2  ) dz$$",
  "Reemplazando de la probabilidad $$p(z|s_2  )$$ con su equivalente gaussiano, tenemos:$$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 + a_2 )/2}^{\\infty} \\frac{1}{\\sigma_0 \\sqrt{2 \\pi}} exp\\left[ -\\frac{1}{2}\\left(\\frac{z-a_2}{\\sigma_0} \\right)^2 \\right] dz$$",
  "$$P_B = \\int_{u=(a_1 - a_2 )/(2\\sigma_0)}^{u=\\infty}$$ $$\\frac{1}{\\sqrt{2 \\pi}}exp\\left( -\\frac{u^2}{2}\\right) du = Q \\left (\\frac{a_1 -a_2}{2\\sigma_0} \\right)$$",
  "$$Q(x)= \\frac{1}{\\sqrt{2 \\pi}}\\int_{x}^{\\infty}  exp\\left( -\\frac{u^2}{2}\\right) du$$"
]


const solFr:string[]=[
  "La probabilité d'un tel événement est: $$P(e|s_1 )=P(H_2|s_1 ) = \\int_{-\\infty}^{\\gamma_0}p(z|s_1 )$$", 
  "La probabilité d'un tel événement est: $$P(e|s_2 ) = P(H_1|s_2 ) = \\int_{\\gamma_0}^{\\infty}p(z|s_2  ) dz$$", 
  "En combinant les trois équations précédentes, on peut écrire: $$P_B = P(H_2|s_1 )P(s_1 ) + P(H_1|s_2 )P(s_2 )$$ ", 
  "$$P_B = \\frac{1}{2}P(H_2|s_1 ) + \\frac{1}{2}P(H_1|s_2 )$$",
  "$$P_B = P(H_2|s_1 ) = P(H_1|s_2 )$$",
  "On peut donc calculer $$P_B$$ en intégrant $$p(z|s_1 )$$ entre les bornes $$-\\infty$$ and $$\\gamma_0$$, ou comme indiqué ci-dessous, en intégrant $$p(z|s_2  )$$ entre les bornes $$\\gamma_0$$ et $$\\infty$$: $$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 + a_2 )/2}^{\\infty}p(z|s_2  ) dz$$",
  "Remplacement la vraisemblance $$p(z|s_2  )$$ avec son équivalent gaussien, on a :$$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 + a_2 )/2}^{\\infty} \\frac{1}{\\sigma_0 \\sqrt{2 \\pi}} exp\\left[ -\\frac{1}{2}\\left(\\frac{z-a_2}{\\sigma_0} \\right)^2 \\right] dz$$",
  "$$P_B = \\int_{u=(a_1 - a_2 )/(2\\sigma_0)}^{u=\\infty}$$ $$\\frac{1}{\\sqrt{2 \\pi}}exp\\left( -\\frac{u^2}{2}\\right) du = Q \\left (\\frac{a_1 -a_2}{2\\sigma_0} \\right)$$",
  "$$Q(x)= \\frac{1}{\\sqrt{2 \\pi}}\\int_{x}^{\\infty}  exp\\left( -\\frac{u^2}{2}\\right) du$$"
]

optionsListBank=[
  [
  solEn, solEn, solEn, solEn, solEn, solEn, solEn, solEn, solEn, solEn
  ],
  [
  solEs, solEs, solEs, solEs, solEs, solEs, solEs, solEs, solEs, solEs
  ],
  [
  solFr, solFr, solFr, solFr, solFr, solFr, solFr, solFr, solFr, solFr
  ],
];

optionsListCorrect=[[""].concat(solEn), [""].concat(solEs), [""].concat(solFr)];

}

if(props.id === 4)
{
  numberOfItems = 13;

  for (i = 0; i < numberOfItems; i++) {
    pageItemIndices.push(i);
 }

 pageSolutionAddress = ["/P4en.pdf","/P4es.pdf","/P4fr.pdf"];;
 pageCourse = ["Electrical Engineering Digital Communications","Ingeniería Eléctrica Comunicaciones Digitales","Génie Électrique Communications Numériques"];
 pageUnit = ["Introduction", "Introducción", "Introduction"];
 pageTitle = ["P2. The Matched Filter", "P2. El filtro emparejado", "P2. Le filtre adapté"];

  globalOption = tempOption;

  pageItemType = ["info","menu","menu","menu","menu","menu", "menu","menu","menu", "menu","menu","menu","menu"]
  for (i=0;i<pageItemType.length;i++) if((pageItemType[i]==="menu")||(pageItemType[i]==="num")) pageMaxScore++;

  pageItemHeaderP=
  [
  [
    "<div class='d-flex align-items-center'><img width='90%' class='mx-auto' src=/MatchedFilter.png></div><div style='text-align:center;'>Figure 1. Two basic steps in digital signal detection</div><p></p>",
    "A matched filter is a linear filter designed to provide the maximum signal-to-noise power ratio at its output for a given transmitted symbol waveform. Consider that a known signal <kaTex>$$s(t)$$<kaTex> plus AWGN, <kaTex>$$n(t)$$<kaTex>, is the input to a linear, time-invariant filter followed by a sampler, as shown in Figure 1. At time <kaTex>$$t = T$$<kaTex>, the receiver output <kaTex>$$z(T)$$<kaTex>, consists of a signal component, <kaTex>$$a_i$$<kaTex>, and a noise component, <kaTex>$$n_0$$<kaTex>. The variance of the output noise (average noise power) is denoted by <kaTex>$$\\sigma_0^2$$<kaTex>, so that the ratio of instantaneous signal power to average noise power, <kaTex>$$(S/N)_T$$<kaTex>, at time <kaTex>$$t = T$$<kaTex>, out of the receiver in block 1, is: <b>1.____</b>",
    "We wish to find the filter transfer function <kaTex>$$H_0(f)$$<kaTex> that maximizes the previous equation. <b>2.____</b>",
    "where <kaTex>$$S(f)$$<kaTex> is the Fourier transform of the input signal <kaTex>$$s(t)$$<kaTex>. Assume the two-sided power spectral density of the input noise is <kaTex>$$N_0/2$$<kaTex> watts/hertz. <b>3.____</b>",
    "We can express the output noise power, <kaTex>$$\\sigma_0^2$$<kaTex>, as: <b>4.____</b>",
    "We then combine the previous equations to express <kaTex>$$(S/N)_T$$<kaTex>, as follows: <b>5.____</b>",
    "We next find that value of <kaTex>$$H(f)=H_0(f)$$<kaTex> for which the maximum <kaTex>$$(S/N)_T$$<kaTex> is achieved, by using Schwarz's inequality. One form of the inequality can be stated as:<br /> <kaTex>$$\\left| \\int_{-\\infty}^{\\infty} f_1 (x) f_2 (x) \\right| \\leq \\int_{-\\infty}^{\\infty} |f_1 (x)|^2 dx \\int_{-\\infty}^{\\infty} |f_2 (x)|^2 dx.$$<kaTex><br/> The equality holds if <kaTex>$$f_1(x) = k f_2^*$$<kaTex>, where k is an arbitrary constant and * indicates complex conjugate. If we identify <kaTex>$$H(f)$$<kaTex> with <kaTex>$$f_1 (x)$$<kaTex> and <kaTex>$$S(f)e^{j2\\pi fT}$$<kaTex> with <kaTex>$$f_2(x)$$<kaTex> we can write: <b>6.____</b>",
    "Substituting in one of the previous equations yields: <b>7.____</b>",
    "or: <b>8.____</b>",
    "where the energy, <kaTex>$$E$$<kaTex>, of the input signal <kaTex>$$s(t)$$<kaTex> is:<br /> <kaTex>$$E = \\int_{-\\infty}^{\\infty}|S(f)|^2 df$$.<kaTex> <br />Thus the maximum output <kaTex>$$(S/N)_T$$<kaTex> depends on the input signal energy and the power spectral density of the noise, not on the particular shape of the waveform that is used. <br/> The equality in the previous inequality holds only if the optimum filter transfer function, <kaTex>$$H_0(f)$$<kaTex>, is employed, such that: <b>9.____</b>",
    "or: <b>10.____</b>",
    "Since <kaTex>$$s(t)$$<kaTex> is a real valued signal we can write using Fourier transformations table: <b>11.____</b>",
    "Thus the impulse response of a filter that produces the maximum output signal-to-noise ratio is the mirror image of the message signal <kaTex>$$s(t)$$<kaTex>, <i>delayed</i> by the symbol time duration, <kaTex>$$T$$<kaTex>.Note that the delay of <kaTex>$$T$$<kaTex> seconds makes the previous equations causal; that is, the delay of <kaTex>$$T$$<kaTex> seconds makes <kaTex>$$h(t)$$<kaTex> a function of positive time in the interval <kaTex>$$0$$ $$\\leq$$ $$t$$ $$\\leq$$ $$T$$.<kaTex> <b>12.____</b>"
  ],
  [
    "<div class='d-flex align-items-center'><img width='90%' class='mx-auto' src=/MatchedFilter.png></div><div style='text-align:center;'>Figura 1. Dos pasos basicos en la detección de señales digitales.</div><p></p>",
    "Un filtro adaptado es un filtro lineal diseñado para proporcionar la máxima relación de potencia de señal a ruido en su salida para una forma de onda de símbolo transmitida dada. Considere que una señal conocida <kaTex>$$s(t)$$<kaTex>  más AWGN, <kaTex>$$n(t)$$<kaTex>, es la entrada a un filtro lineal invariable en el tiempo seguido de un muestreador, como se muestra en la Fig. 1. En el tiempo <kaTex>$$t = T$$<kaTex>, la salida del receptor <kaTex>$$z(T)$$<kaTex>, consiste en un componente de señal, <kaTex>$$a_i$$<kaTex>, y un componente de ruido, <kaTex>$$n_0$$<kaTex>. La varianza de la el ruido de salida (potencia de ruido promedio) se denota por  <kaTex>$$\\sigma_0^2$$<kaTex>, de modo que la relación entre la potencia de la señal instantánea y la potencia de ruido promedio, <kaTex>$$(S/N)_T$$<kaTex>, en el tiempo <kaTex>$$t = T$$<kaTex>, fuera del receptor en el bloque 1, es: <b>1.____</b>",
    "Se desea encontrar la función de transferencia de filtro <kaTex>$$H_0(f)$$<kaTex> que maximice la ecuación anterior. <b>2.____</b>",
    "donde <kaTex>$$S(f)$$<kaTex> es la transformada de Fourier de la señal de entrada <kaTex>$$s(t)$$<kaTex>. Suponga que el espectro de potencia bilateral la densidad del ruido de entrada es <kaTex>$$N_0/2$$<kaTex> watts/hertz. <b>3.____</b>",
    "Se puede expresar la potencia de ruido de salida, <kaTex>$$\\sigma_0^2$$<kaTex>, como: <b>4.____</b>",
    "Luego combinamos las ecuaciones anteriores para expresar <kaTex>$$(S/N)_T$$<kaTex>, como sigue: <b>5.____</b>",
    "A continuación se encuentra el valor de <kaTex>$$H(f)=H_0(f)$$<kaTex> para el cual se logra el máximo <kaTex>$$(S/N)_T$$<kaTex>, utilizando el método de Schwarz desigualdad. Una forma de la desigualdad se puede establecer como:<br /> <kaTex>$$\\left| \\int_{-\\infty}^{\\infty} f_1 (x) f_2 (x) \\right| \\leq \\int_{-\\infty}^{\\infty} |f_1 (x)|^2 dx \\int_{-\\infty}^{\\infty} |f_2 (x)|^2 dx.$$<kaTex><br/> La igualdad se cumple si <kaTex>$$f_1(x) = k f_2^*$$<kaTex>, donde k es una constante arbitraria y * indica conjugado complejo. Si se identifica <kaTex>$$H(f)$$<kaTex> con <kaTex>$$f_1 (x)$$<kaTex> y <kaTex>$$S(f)e^{j2\\pi fT}$$<kaTex> con <kaTex>$$f_2(x)$$<kaTex> se puede escribir: <b>6.____</b>",
    "Sustituyendo en una de las ecuaciones anteriores se obtiene: <b>7.____</b>",
    "o: <b>8.____</b>",
    "donde la energía, <kaTex>$$E$$<kaTex>, de la señal de entrada <kaTex>$$s(t)$$<kaTex> es:<br /> <kaTex>$$E = \\int_{-\\infty}^{\\infty}|S(f)|^2 df$$.<kaTex> <br />Por lo tanto, la salida máxima <kaTex>$$(S/N)_T$$<kaTex>depende de la energía de la señal de entrada y de la densidad espectral de potencia del ruido, no en la forma particular de la forma de onda que se utiliza. La igualdad en la desigualdad anterior se cumple solo si la función de transferencia de filtro óptima, <kaTex>$$H_0(f)$$<kaTex>, es empleado, tal que: <b>9.____</b>",
    "o: <b>10.____</b>",
    "Dado que <kaTex>$$s(t)$$<kaTex> es una señal de valor real, podemos escribir usando la tabla de transformaciones de Fourier: <b>11.____</b>",
    "Por tanto, la respuesta de impulso de un filtro que produce la máxima relación señal-ruido de salida es la imagen especular de la señal de mensaje <kaTex>$$s(t)$$<kaTex>, <i>retrasada</i> por la duración del tiempo del símbolo, <kaTex>$$T$$<kaTex>.Tenga en cuenta que la demora de <kaTex>$$T$$<kaTex> segundos hace que las ecuaciones anteriores sean causales; es decir, el retraso de <kaTex>$$T$$<kaTex> segundos hace que <kaTex>$$h(t)$$<kaTex> sea una función de tiempo positivo en el intervalo <kaTex>$$0$$ $$\\leq$$ $$t$$ $$\\leq$$ $$T$$.<kaTex> <b>12.____</b>"

  ],
  [
    "<div class='d-flex align-items-center'><img width='90%' class='mx-auto' src=/MatchedFilter.png></div><div style='text-align:center;'>Figure 1. Deux étapes de la détection de signal numérique.</div><p></p>",
    "Un filtre adapté est un filtre linéaire conçu pour fournir le rapport de puissance signal/bruit maximal à son sortie pour une forme d'onde de symbole transmise donnée. Considérons qu'un signal connu <kaTex>$$s(t)$$<kaTex> plus AWGN, <kaTex>$$n(t)$$<kaTex>, est l'entrée d'un filtre linéaire invariant dans le temps suivi d'un échantillonneur, comme illustré à la Fig. 1. Au temps <kaTex>$$t = T$$<kaTex>, la sortie du récepteur <kaTex>$$z(T)$$<kaTex>, se compose d'une composante de signal, <kaTex>$$a_i$$<kaTex>, et d'une composante de bruit, <kaTex>$$n_0$$<kaTex>. L'écart de la le bruit de sortie (puissance de bruit moyenne) est noté <kaTex>$$\\sigma_0^2$$<kaTex>, de sorte que le rapport entre la puissance instantanée du signal et la puissance de bruit moyenne, <kaTex>$$(S/N)_T$$<kaTex>, à l'instant <kaTex>$$t = T$$<kaTex>, en sortie du récepteur dans le bloc 1, est: <b>1.____</b>",
    "On souhaite trouver la fonction de transfert du filtre <kaTex>$$H_0(f)$$<kaTex> qui maximise l'équation précédente. <b>2.____</b>",
    "où <kaTex>$$S(f)$$<kaTex> est la transformée de Fourier du signal d'entrée <kaTex>$$s(t)$$<kaTex>. Supposons le spectre de puissance bilatéral la densité du bruit d'entrée est <kaTex>$$N_0/2$$<kaTex> watts/hertz. <b>3.____</b>",
    "Nous pouvons exprimer la puissance de bruit de sortie, <kaTex>$$\\sigma_0^2$$<kaTex>, comme suit: <b>4.____</b>",
    "Nous combinons ensuite les équations précédentes pour exprimer <kaTex>$$(S/N)_T$$<kaTex>, comme suit: <b>5.____</b>",
    "On trouve ensuite la valeur de <kaTex>$$H(f)=H_0(f)$$<kaTex> pour laquelle le maximum <kaTex>$$(S/N)_T$$<kaTex> est atteint, en utilisant la formule de Schwarz inégalité. Une forme de l'inégalité peut être énoncée comme suit:<br /> <kaTex>$$\\left| \\int_{-\\infty}^{\\infty} f_1 (x) f_2 (x) \\right| \\leq \\int_{-\\infty}^{\\infty} |f_1 (x)|^2 dx \\int_{-\\infty}^{\\infty} |f_2 (x)|^2 dx.$$<kaTex><br/> L'égalité est vraie <kaTex>$$f_1(x) = k f_2^*$$<kaTex>, où k est une constante arbitraire et * indique un conjugué complexe. Si on identifie <kaTex>$$H(f)$$<kaTex> avec <kaTex>$$f_1 (x)$$<kaTex> et <kaTex>$$S(f)e^{j2\\pi fT}$$<kaTex> avec <kaTex>$$f_2(x)$$<kaTex> on peut écrire: <b>6.____</b>",
    "La substitution dans l'une des équations précédentes donne: <b>7.____</b>",
    "ou: <b>8.____</b>",
    "où l'énergie, <kaTex>$$E$$<kaTex>, du signal d'entrée <kaTex>$$s(t)$$<kaTex> est:<br /> <kaTex>$$E = \\int_{-\\infty}^{\\infty}|S(f)|^2 df$$.<kaTex> <br />Ainsi, la sortie maximale <kaTex>$$(S/N)_T$$<kaTex> dépend de l'énergie du signal d'entrée et de la densité spectrale de puissance du bruit, pas sur la forme particulière de la forme d'onde qui est utilisée. <br/> L'égalité dans l'inégalité précédente n'est valable que si la fonction de transfert de filtre optimale, <kaTex>$$H_0(f)$$<kaTex>, est employé, tel que: <b>9.____</b>",
    "ou: <b>10.____</b>",
    "Puisque <kaTex>$$s(t)$$<kaTex> est un signal à valeur réelle, nous pouvons écrire en utilisant le tableau des transformations de Fourier <b>11.____</b>",
    "Ainsi, la réponse impulsionnelle d'un filtre qui produit le rapport signal sur bruit de sortie maximal est la image miroir du signal de message <kaTex>$$s(t)$$<kaTex>, <i>retardé</i> de la durée du symbole, <kaTex>$$T$$<kaTex>. Notez que le retard de <kaTex>$$T$$<kaTex> secondes rend les équations précédentes causales; c'est-à-dire que le retard de <kaTex>$$T$$<kaTex> secondes fait de <kaTex>$$h(t)$$<kaTex> une fonction de temps positif dans l'intervalle <kaTex>$$0$$ $$\\leq$$ $$t$$ $$\\leq$$ $$T$$.<kaTex> <b>12.____</b>"

  ]
];
  pageItemFooterP=[
  [
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />"
  ],
  [
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />"
  ],
  [
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />"
  ]
];

const solEn:string[]=[
  "$$\\left(\\frac{S}{N} \\right)_T = \\frac{a_i^2}{\\sigma_0^2}$$", 
  "We can express the signal, $$a(t)$$, at the filter output, $$\\newline$$ in terms of the filter transfer function, $$H(f)$$ (before optimization), and the Fourier transform of the input signal as follows: $$a(t) = \\int_{-\\infty}^{\\infty}H(f)S(f)e^{j2\\pi fT} df$$", 
  "The input power spectral density, $$G_X(f)$$, and the output power spectral density, $$G_Y(f)$$, are related as follows: $$G_Y(f)=G_X(f)|H(f)|^2$$", 
  "$$\\sigma_0^2 = \\frac{N_0}{2}\\int_{-\\infty}^{\\infty}|H(f)|^2 df$$", 
  "$$\\left(\\frac{S}{N} \\right)_T = \\frac{\\left |\\int_{-\\infty}^{\\infty}H(f)S(f)e^{j2\\pi f_t} df\\right| }{\\frac{N_0}{2}\\int_{-\\infty}^{\\infty}|H(f)|^2 df}$$",
  "$$\\left|\\int_{-\\infty}^{\\infty}H(f)S(f)e^{j2\\pi fT} df \\right|\\leq \\int_{-\\infty}^{\\infty}|H(f)|^2 df\\int_{-\\infty}^{\\infty}|S(f)|^2 df$$",
  "$$\\left(\\frac{S}{N} \\right)_T \\leq \\frac{2}{N_0}\\int_{-\\infty}^{\\infty}|S(f)|^2 df$$",
  "$$max \\left ( \\frac{S}{N} \\right )_T = \\frac{2E}{N_0}$$",
  "$$H(f) = H_0(f) = k S^*(f)e^{-j2\\pi fT}$$",
  "$$h(t) = \\mathcal{F}^{-1}\\{kS^*(f)e^{-j2 \\pi f T}\\}$$",
  "$$h(t) = \\begin{cases} ks(T-t), & \\text{ 0 ≤ t ≤ T} \\\\ 0, & \\text{elsewhere} \\end{cases}$$",
  "Without the delay of $$T$$ seconds, the response, $$s(-t)$$, is unrealizable because it describes a response as a function of negative time."
]
const solEs:string[]=[
  "$$\\left(\\frac{S}{N} \\right)_T = \\frac{a_i^2}{\\sigma_0^2}$$", 
  "Se puede expresar la señal, $$a(t)$$, en la salida del filtro, $$\\newline$$en términos de la función de transferencia del filtro, $$H(f)$$  (antes optimización), y la transformada de Fourier de la señal de entrada de la siguiente manera: $$a(t) = \\int_{-\\infty}^{\\infty}H(f)S(f)e^{j2\\pi fT} df$$", 
  "La densidad espectral de potencia de entrada, $$G_X(f)$$$, y la salida densidad espectral de potencia, $$G_Y(f)$$, se relacionan de la siguiente manera: $$G_Y(f)=G_X(f)|H(f)|^2$$", 
  "$$\\sigma_0^2 = \\frac{N_0}{2}\\int_{-\\infty}^{\\infty}|H(f)|^2 df$$", 
  "$$\\left(\\frac{S}{N} \\right)_T = \\frac{\\left |\\int_{-\\infty}^{\\infty}H(f)S(f)e^{j2\\pi f_t} df\\right| }{\\frac{N_0}{2}\\int_{-\\infty}^{\\infty}|H(f)|^2 df}$$",
  "$$\\left|\\int_{-\\infty}^{\\infty}H(f)S(f)e^{j2\\pi fT} df \\right|\\leq \\int_{-\\infty}^{\\infty}|H(f)|^2 df\\int_{-\\infty}^{\\infty}|S(f)|^2 df$$",
  "$$\\left(\\frac{S}{N} \\right)_T \\leq \\frac{2}{N_0}\\int_{-\\infty}^{\\infty}|S(f)|^2 df$$",
  "$$max \\left ( \\frac{S}{N} \\right )_T = \\frac{2E}{N_0}$$",
  "$$H(f) = H_0(f) = k S^*(f)e^{-j2\\pi fT}$$",
  "$$h(t) = \\mathcal{F}^{-1}\\{kS^*(f)e^{-j2 \\pi f T}\\}$$",
  "$$h(t) = \\begin{cases} ks(T-t), & \\text{ 0 ≤ t ≤ T} \\\\ 0, & \\text{en otra parte} \\end{cases}$$",
  "Sin el retraso de $$T$$ segundos, la respuesta, $$s(-t)$$, es irrealizable porque describe una respuesta como una función de tiempo negativo."
]

const solFr:string[]=[
  "$$\\left(\\frac{S}{N} \\right)_T = \\frac{a_i^2}{\\sigma_0^2}$$", 
  "Nous pouvons exprimer le signal, $$a(t)$$, à la sortie du filtre, $$\\newline$$ en fonction de la fonction de transfert du filtre, $$H(f)$$ (avant optimisation), et la transformée de Fourier du signal d'entrée comme suit: $$a(t) = \\int_{-\\infty}^{\\infty}H(f)S(f)e^{j2\\pi fT} df$$", 
  "La densité spectrale de puissance d'entrée, $$G_X(f)$$, et la sortie densité spectrale de puissance, $$G_Y(f)$$, sont liées comme suit: $$G_Y(f)=G_X(f)|H(f)|^2$$", 
  "$$\\sigma_0^2 = \\frac{N_0}{2}\\int_{-\\infty}^{\\infty}|H(f)|^2 df$$", 
  "$$\\left(\\frac{S}{N} \\right)_T = \\frac{\\left |\\int_{-\\infty}^{\\infty}H(f)S(f)e^{j2\\pi f_t} df\\right| }{\\frac{N_0}{2}\\int_{-\\infty}^{\\infty}|H(f)|^2 df}$$",
  "$$\\left|\\int_{-\\infty}^{\\infty}H(f)S(f)e^{j2\\pi fT} df \\right|\\leq \\int_{-\\infty}^{\\infty}|H(f)|^2 df\\int_{-\\infty}^{\\infty}|S(f)|^2 df$$",
  "$$\\left(\\frac{S}{N} \\right)_T \\leq \\frac{2}{N_0}\\int_{-\\infty}^{\\infty}|S(f)|^2 df$$",
  "$$max \\left ( \\frac{S}{N} \\right )_T = \\frac{2E}{N_0}$$",
  "$$H(f) = H_0(f) = k S^*(f)e^{-j2\\pi fT}$$",
  "$$h(t) = \\mathcal{F}^{-1}\\{kS^*(f)e^{-j2 \\pi f T}\\}$$",
  "$$h(t) = \\begin{cases} ks(T-t), & \\text{ 0 ≤ t ≤ T} \\\\ 0, & \\text{autre part} \\end{cases}$$",
  "Sans le délai de $$T$$ secondes, la réponse, $$s(-t)$$, est irréalisable parce qu'il décrit une réponse en fonction du temps négatif."
]

optionsListBank=[
  [
    solEn,solEn,solEn,solEn,solEn,solEn,solEn,solEn,solEn,solEn,solEn,solEn,solEn,
  ],
  [   
    solEs,solEs,solEs,solEs,solEs,solEs,solEs,solEs,solEs,solEs,solEs,solEs,solEs,    
  ],
  [
    solFr,solFr,solFr,solFr,solFr,solFr,solFr,solFr,solFr,solFr,solFr,solFr,solFr,
  ]
]; 

optionsListCorrect=[[""].concat(solEn), [""].concat(solEs), [""].concat(solFr)];
}




/*
Problem looks good on desktop.
Problem looks good on mobile.
Problem title also good.
Problem prepare solution pdfs.
Problem shuffle solutions.
Score/Retry/ShowSolution.
Home prepare text.
Home prepare layout.
Home prepare movie.

*/


return(
      <div>
        <div className="item-div mx-auto"> 
          <b>ID:</b> {props.id};  
          {props.language===0?<div><b>Language: </b><i>English</i>; <b>Course:</b> <i>{pageCourse[props.language]}</i>; <b>Unit:</b> <i>{pageUnit[props.language]}</i>; <b>Title:</b> <i>{pageTitle[props.language]}</i> </div>:""} 
          {props.language===1?<div><b>Idioma: </b><i>Español</i>; <b>Curso:</b> <i>{pageCourse[props.language]}</i>; <b>Unidad:</b> <i>{pageUnit[props.language]}</i>; <b>Titulo:</b> <i>{pageTitle[props.language]}</i> </div>:""}
          {props.language===2?<div><b>Langue: </b><i>Français</i>; <b>Cours:</b> <i>{pageCourse[props.language]}</i>; <b>Unite:</b> <i>{pageUnit[props.language]}</i>; <b>Title:</b> <i>{pageTitle[props.language]}</i> </div>:""}
        </div>
      <hr />

      {pageItemIndices.map((itemIndex) =>
       <div>
        {presentCheckIndicator[itemIndex]==1 &&<div className='d-flex align-items-center'><img className='mx-auto' width='50' src='/checkmark.png'/></div>}
        {presentCheckIndicator[itemIndex]==2 &&<div className='d-flex align-items-center'><img className='mx-auto' width='50' src='/xmark.png'/></div>}
        <MenuDemo id={itemIndex} pageItemLanguage={props.language} pageItemType={pageItemType[itemIndex]} pageItemHeader={pageItemHeaderP[props.language][itemIndex]} pageItemFooter={pageItemFooterP[props.language][itemIndex]} menuSelectedOption={selectOption} globalOptionSelected={globalOption} optionsList = {(optionsListBank[props.language][itemIndex]).sort(() => Math.random() - 0.5)}/>
       </div>
      )}

      <button onClick={scoreFunction}><h3>{props.language===en && "Score" }{props.language===es && "Puntaje" }{props.language===fr && "Points" }</h3></button>
{/*   {optionsListCorrect[props.language]}
      <hr/>
      {scoreReport}
      <hr/>
      {presentPageScore}
*/}
      {presentPageScore}/{pageMaxScore}
      <hr/>
      {pageMaxScore===presentPageScore&&
        <div>
          <div className='d-flex align-items-center'><h1 className="mx-auto">{props.language===en && "Congratulations!" }{props.language===es && "Felicidades!" }{props.language===fr && "Félicitations!" }</h1></div>
          {props.language===en && <div className='d-flex align-items-center'><span className="mx-auto"> Your notes are attached:<a href = {pageSolutionAddress[en]} target = "_blank"><img width='50' src='/pdficon.png' /></a></span></div>}
          {props.language===es && <div className='d-flex align-items-center'><span className="mx-auto"> Sus notas estan adjuntas:<a href = {pageSolutionAddress[es]} target = "_blank"><img width='50' src='/pdficon.png' /></a></span></div>}
          {props.language===fr && <div className='d-flex align-items-center'><span className="mx-auto"> Vos notes sont jointes:<a href = {pageSolutionAddress[fr]} target = "_blank"><img width='50' src='/pdficon.png' /></a></span></div>}
        </div>
      }
      </div>
      
    );
}