import React from "react";
import { useEffect, useState } from 'react';

//import Menu from "./components/Menu";
import MenuDemo from "../components/MenuDemo"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const DemoP: React.FC<{id:number, language:number}> = (props) => {

  const en = 0;
  const es = 1;
  const fr = 2;

  let [counter,setCounter] = useState(0);
  const initOptionsG=Array(2).fill('');
  const [tempOption, setTempOption] = useState(initOptionsG);
  //let globalOption:string[] = tempOption;




  let optionsCorrectBank:string[];
  
  /*
  let optionsListBank=[
    [
    [
    "English",   
    "Equality means the same sets of points.",
    "Equality means the same sides.", 
    "The proof is based on the primary observation that triangles $$\\triangle BAM$$ and $$\\triangle CAM$$ are congruent", 
    "The proof is based on the primary observation that triangles $$\\triangle AMB$$ and $$\\triangle CAM$$ are congruent",
    "The proof is based on the primary observation that triangles $$\\triangle ABM$$ and $$\\triangle CAM$$ are congruent",
    "The case of congruence is side-angle-side",
    "The case of congruence is angle-side-angle",
    "The case of congruence is side-side-side"
  ],
    ["English",
    "The probability of such an occurence is $$P(e|s_1 )=P(H_2|s_1 ) = \\int_{-\\infty}^{\\gamma_0}p(z|s_1 )$$", 
    "The probability of such an occurence is $$P(e|s_2 ) = P(H_1|s_2 ) = \\int_{\\gamma_0}^{\\infty}p(z|s_2  ) dz$$", 
    "Combining the previous three equations, we can write: $$P_B = P(H_2|s_1 )P(s_1 ) + P(H_1|s_2 )P(s_2 )$$ ", 
    "$$P_B = \\frac{1}{2}P(H_2|s_1 ) + \\frac{1}{2}P(H_1|s_2 )$$",
    "$$P_B = P(H_2|s_1 ) = P(H_1|s_2 )$$",
    "We can therefore compute $$P_B$$ by integrating $$p(z|s_1 )$$ between the limits $$-\\infty$$ and $$\\gamma_0$$, or as shown below, by integrating $$p(z|s_2  )$$ between the limits $$\\gamma_0$$ and $$\\infty$$: $$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 + a_2 )/2}^{\\infty}p(z|s_2  ) dz$$",
    "Replacing the likelihood $$p(z|s_2  )$$ with its Gaussian equivalent, we have:$$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 + a_2 )/2}^{\\infty} \\frac{1}{\\sigma_0 \\sqrt{2 \\pi}} exp\\left[ -\\frac{1}{2}\\left(\\frac{z-a_2}{\\sigma_0} \\right)^2 \\right] dz$$",
    "Let $$u=(z-a_2)/\\sigma_0$$. Then $$\\sigma_0 du = dz$$ and:$$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 - a_2 )/2}^{u=\\infty}$$ $$\\frac{1}{\\sqrt{2 \\pi}}exp\\left( -\\frac{u^2}{2}\\right) du = Q \\left (\\frac{a_1 -a_2}{2\\sigma_0} \\right)$$",
    "$$Q(x)= \\frac{1}{\\sqrt{2 \\pi}}\\int_{x}^{\\infty}  exp\\left( -\\frac{u^2}{2}\\right) du$$"
  ],
    [
    "English",  
    "Since M is the middle point of BC", 
    "Since M is an arbitrary point on BC",
    "To relate AM it is best to use the perpendicular from M to AB",
    "To relate AM it is best to use the perpendicular from M to AC",
    "Consider the similarity of these triangles and BM = BC/2", 
    "The case of congruence is side-angle-side",
    "The case of congruence is angle-side-angle",
    "The case of congruence is side-side-side"
  ],
    [
    "English",
    "$$\\left(\\frac{S}{N} \\right)_T = \\frac{a_i^2}{\\sigma_0^2}$$", 
    "We can express the signal, $$a(t)$$, at the filter output, $$\\newline$$ in terms of the filter transfer function, $$H(f)$$ (before optimization), and the Fourier transform of the input signal as follows: $$a(t) = \\int_{-\\infty}^{\\infty}H(f)S(f)e^{j2\\pi fT} df$$", 
    "The input power spectral density, $$G_X(f)$$, and the output power spectral density, $$G_Y(f)$$, are related as follows: $$G_Y(f)=G_X(f)|H(f)|^2$$", 
    "$$\\sigma_0^2 = \\frac{N_0}{2}\\int_{-\\infty}^{\\infty}|H(f)|^2 df$$", 
    "$$\\left(\\frac{S}{N} \\right)_T = \\frac{\\left |\\int_{-\\infty}^{\\infty}H(f)S(f)e^{j2\\pi f_t} df\\right| }{\\frac{N_0}{2}\\int_{-\\infty}^{\\infty}|H(f)|^2 df}$$",
    "$$\\left|\\int_{-\\infty}^{\\infty}H(f)S(f)e^{j2\\pi fT} df \\right|\\leq \\int_{-\\infty}^{\\infty}|H(f)|^2 df\\int_{-\\infty}^{\\infty}|S(f)|^2 df$$",
    "$$\\left(\\frac{S}{N} \\right)_T \\leq \\frac{2}{N_0}\\int_{-\\infty}^{\\infty}|S(f)|^2 df$$",
    "$$max \\left ( \\frac{S}{N} \\right )_T = \\frac{2E}{N_0}$$",
    "$$H(f) = H_0(f) = k S^*(f)e^{-j2\pi fT}$$",
    "$$h(t) = \\mathcal{F}^{-1}\\{kS^*(f)e^{-j2 \\pi f T}\\}$$",
    "$$h(t) = \\begin{cases} ks(T-t), & \\text{ 0 ≤ t ≤ T} \\\\ 0, & \\text{elsewhere} \\end{cases}$$",
    "Without the delay of $$T$$ seconds, the response, $$s(-t)$$, is unrealizable because it describes a response as a function of negative time."
  ],
  ],
  [
    [ 
      "Espanol",
      "Equality means the same sets of points.",
      "Equality means the same sides.", 
      "The proof is based on the primary observation that triangles $$\\triangle BAM$$ and $$\\triangle CAM$$ are congruent", 
      "The proof is based on the primary observation that triangles $$\\triangle AMB$$ and $$\\triangle CAM$$ are congruent",
      "The proof is based on the primary observation that triangles $$\\triangle ABM$$ and $$\\triangle CAM$$ are congruent",
      "The case of congruence is side-angle-side",
      "The case of congruence is angle-side-angle",
      "The case of congruence is side-side-side"
    ],
      [
      "Espanol",
      "The probability of such an occurence is $$P(e|s_1 )=P(H_2|s_1 ) = \\int_{-\\infty}^{\\gamma_0}p(z|s_1 )$$", 
      "The probability of such an occurence is $$P(e|s_2 ) = P(H_1|s_2 ) = \\int_{\\gamma_0}^{\\infty}p(z|s_2  ) dz$$", 
      "Combining the previous three equations, we can write: $$P_B = P(H_2|s_1 )P(s_1 ) + P(H_1|s_2 )P(s_2 )$$ ", 
      "$$P_B = \\frac{1}{2}P(H_2|s_1 ) + \\frac{1}{2}P(H_1|s_2 )$$",
      "$$P_B = P(H_2|s_1 ) = P(H_1|s_2 )$$",
      "We can therefore compute $$P_B$$ by integrating $$p(z|s_1 )$$ between the limits $$-\\infty$$ and $$\\gamma_0$$, or as shown below, by integrating $$p(z|s_2  )$$ between the limits $$\\gamma_0$$ and $$\\infty$$: $$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 + a_2 )/2}^{\\infty}p(z|s_2  ) dz$$",
      "Replacing the likelihood $$p(z|s_2  )$$ with its Gaussian equivalent, we have:$$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 + a_2 )/2}^{\\infty} \\frac{1}{\\sigma_0 \\sqrt{2 \\pi}} exp\\left[ -\\frac{1}{2}\\left(\\frac{z-a_2}{\\sigma_0} \\right)^2 \\right] dz$$",
      "Let $$u=(z-a_2)/\\sigma_0$$. Then $$\\sigma_0 du = dz$$ and:$$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 - a_2 )/2}^{u=\\infty}$$ $$\\frac{1}{\\sqrt{2 \\pi}}exp\\left( -\\frac{u^2}{2}\\right) du = Q \\left (\\frac{a_1 -a_2}{2\\sigma_0} \\right)$$",
      "$$Q(x)= \\frac{1}{\\sqrt{2 \\pi}}\\int_{x}^{\\infty}  exp\\left( -\\frac{u^2}{2}\\right) du$$"
    ],
      [
      "Espanol",
      "Since M is the middle point of BC", 
      "Since M is an arbitrary point on BC",
      "To relate AM it is best to use the perpendicular from M to AB",
      "To relate AM it is best to use the perpendicular from M to AC",
      "Consider the similarity of these triangles and BM = BC/2", 
      "The case of congruence is side-angle-side",
      "The case of congruence is angle-side-angle",
      "The case of congruence is side-side-side"
    ],
      [
      "Espanol",
      "$$\\left(\\frac{S}{N} \\right)_T = \\frac{a_i^2}{\\sigma_0^2}$$", 
      "We can express the signal, $$a(t)$$, at the filter output, $$\\newline$$ in terms of the filter transfer function, $$H(f)$$ (before optimization), and the Fourier transform of the input signal as follows: $$a(t) = \\int_{-\\infty}^{\\infty}H(f)S(f)e^{j2\\pi fT} df$$", 
      "The input power spectral density, $$G_X(f)$$, and the output power spectral density, $$G_Y(f)$$, are related as follows: $$G_Y(f)=G_X(f)|H(f)|^2$$", 
      "$$\\sigma_0^2 = \\frac{N_0}{2}\\int_{-\\infty}^{\\infty}|H(f)|^2 df$$", 
      "$$\\left(\\frac{S}{N} \\right)_T = \\frac{\\left |\\int_{-\\infty}^{\\infty}H(f)S(f)e^{j2\\pi f_t} df\\right| }{\\frac{N_0}{2}\\int_{-\\infty}^{\\infty}|H(f)|^2 df}$$",
      "$$\\left|\\int_{-\\infty}^{\\infty}H(f)S(f)e^{j2\\pi fT} df \\right|\\leq \\int_{-\\infty}^{\\infty}|H(f)|^2 df\\int_{-\\infty}^{\\infty}|S(f)|^2 df$$",
      "$$\\left(\\frac{S}{N} \\right)_T \\leq \\frac{2}{N_0}\\int_{-\\infty}^{\\infty}|S(f)|^2 df$$",
      "$$max \\left ( \\frac{S}{N} \\right )_T = \\frac{2E}{N_0}$$",
      "$$H(f) = H_0(f) = k S^*(f)e^{-j2\pi fT}$$",
      "$$h(t) = \\mathcal{F}^{-1}\\{kS^*(f)e^{-j2 \\pi f T}\\}$$",
      "$$h(t) = \\begin{cases} ks(T-t), & \\text{ 0 ≤ t ≤ T} \\\\ 0, & \\text{elsewhere} \\end{cases}$$",
      "Without the delay of $$T$$ seconds, the response, $$s(-t)$$, is unrealizable because it describes a response as a function of negative time."
    ],
  ],
  [
    [ 
      "French",
      "Equality means the same sets of points.",
      "Equality means the same sides.", 
      "The proof is based on the primary observation that triangles $$\\triangle BAM$$ and $$\\triangle CAM$$ are congruent", 
      "The proof is based on the primary observation that triangles $$\\triangle AMB$$ and $$\\triangle CAM$$ are congruent",
      "The proof is based on the primary observation that triangles $$\\triangle ABM$$ and $$\\triangle CAM$$ are congruent",
      "The case of congruence is side-angle-side",
      "The case of congruence is angle-side-angle",
      "The case of congruence is side-side-side"
    ],
      [
      "French",
      "The probability of such an occurence is $$P(e|s_1 )=P(H_2|s_1 ) = \\int_{-\\infty}^{\\gamma_0}p(z|s_1 )$$", 
      "The probability of such an occurence is $$P(e|s_2 ) = P(H_1|s_2 ) = \\int_{\\gamma_0}^{\\infty}p(z|s_2  ) dz$$", 
      "Combining the previous three equations, we can write: $$P_B = P(H_2|s_1 )P(s_1 ) + P(H_1|s_2 )P(s_2 )$$ ", 
      "$$P_B = \\frac{1}{2}P(H_2|s_1 ) + \\frac{1}{2}P(H_1|s_2 )$$",
      "$$P_B = P(H_2|s_1 ) = P(H_1|s_2 )$$",
      "We can therefore compute $$P_B$$ by integrating $$p(z|s_1 )$$ between the limits $$-\\infty$$ and $$\\gamma_0$$, or as shown below, by integrating $$p(z|s_2  )$$ between the limits $$\\gamma_0$$ and $$\\infty$$: $$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 + a_2 )/2}^{\\infty}p(z|s_2  ) dz$$",
      "Replacing the likelihood $$p(z|s_2  )$$ with its Gaussian equivalent, we have:$$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 + a_2 )/2}^{\\infty} \\frac{1}{\\sigma_0 \\sqrt{2 \\pi}} exp\\left[ -\\frac{1}{2}\\left(\\frac{z-a_2}{\\sigma_0} \\right)^2 \\right] dz$$",
      "Let $$u=(z-a_2)/\\sigma_0$$. Then $$\\sigma_0 du = dz$$ and:$$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 - a_2 )/2}^{u=\\infty}$$ $$\\frac{1}{\\sqrt{2 \\pi}}exp\\left( -\\frac{u^2}{2}\\right) du = Q \\left (\\frac{a_1 -a_2}{2\\sigma_0} \\right)$$",
      "$$Q(x)= \\frac{1}{\\sqrt{2 \\pi}}\\int_{x}^{\\infty}  exp\\left( -\\frac{u^2}{2}\\right) du$$"
    ],
      [
      "French",
      "Since M is the middle point of BC", 
      "Since M is an arbitrary point on BC",
      "To relate AM it is best to use the perpendicular from M to AB",
      "To relate AM it is best to use the perpendicular from M to AC",
      "Consider the similarity of these triangles and BM = BC/2", 
      "The case of congruence is side-angle-side",
      "The case of congruence is angle-side-angle",
      "The case of congruence is side-side-side"
    ],
      [
      "French",
      "$$\\left(\\frac{S}{N} \\right)_T = \\frac{a_i^2}{\\sigma_0^2}$$", 
      "We can express the signal, $$a(t)$$, at the filter output, $$\\newline$$ in terms of the filter transfer function, $$H(f)$$ (before optimization), and the Fourier transform of the input signal as follows: $$a(t) = \\int_{-\\infty}^{\\infty}H(f)S(f)e^{j2\\pi fT} df$$", 
      "The input power spectral density, $$G_X(f)$$, and the output power spectral density, $$G_Y(f)$$, are related as follows: $$G_Y(f)=G_X(f)|H(f)|^2$$", 
      "$$\\sigma_0^2 = \\frac{N_0}{2}\\int_{-\\infty}^{\\infty}|H(f)|^2 df$$", 
      "$$\\left(\\frac{S}{N} \\right)_T = \\frac{\\left |\\int_{-\\infty}^{\\infty}H(f)S(f)e^{j2\\pi f_t} df\\right| }{\\frac{N_0}{2}\\int_{-\\infty}^{\\infty}|H(f)|^2 df}$$",
      "$$\\left|\\int_{-\\infty}^{\\infty}H(f)S(f)e^{j2\\pi fT} df \\right|\\leq \\int_{-\\infty}^{\\infty}|H(f)|^2 df\\int_{-\\infty}^{\\infty}|S(f)|^2 df$$",
      "$$\\left(\\frac{S}{N} \\right)_T \\leq \\frac{2}{N_0}\\int_{-\\infty}^{\\infty}|S(f)|^2 df$$",
      "$$max \\left ( \\frac{S}{N} \\right )_T = \\frac{2E}{N_0}$$",
      "$$H(f) = H_0(f) = k S^*(f)e^{-j2\pi fT}$$",
      "$$h(t) = \\mathcal{F}^{-1}\\{kS^*(f)e^{-j2 \\pi f T}\\}$$",
      "$$h(t) = \\begin{cases} ks(T-t), & \\text{ 0 ≤ t ≤ T} \\\\ 0, & \\text{elsewhere} \\end{cases}$$",
      "Without the delay of $$T$$ seconds, the response, $$s(-t)$$, is unrealizable because it describes a response as a function of negative time."
    ],
  ]
]; 
*/

  const selectOption = (option: string, id:number, optionsSelected:string[]) => {
    optionsSelected[id] = option; 
    console.log(optionsSelected);

    //setTempOption([optionsSelected[0], optionsSelected[1] , optionsSelected[2], optionsSelected[3]]);
    
    //cheap way to duplicate the array
    const clone = optionsSelected.slice(0);
    setTempOption(clone);
    //console.log(tempOption);
  };



  useEffect(() => {
    
    globalOption=tempOption;

    setCounter(++counter);
    console.log(counter.toString() + tempOption);

  }, [tempOption]);


  //let headerTest = '<img src="../../home.png">';


let numberOfItems:number = 0;
let language:number = 0;
let pageItemType:string[]=[];
let pageItemHeaderP: string[][]=[];
let pageItemFooterP: string[][]=[];
let optionsListBank: string[][][]=[];
let globalOption:string[] = tempOption;
let pageItemIndices:number[] = [];
if(props.id === 1)
{
  numberOfItems = 4;

  for (var i = 0; i <= numberOfItems; i++) {
    pageItemIndices.push(i);
 }

  
  globalOption = tempOption;

  language = props.language;
  pageItemType = ["menu","menu","menu","num"]
  pageItemHeaderP=
  [
  [
    "<p>Please select your answer to the first question</p>",
    "<p>Please select your answer to the second question</p>",
    "<p>Please select your answer to the third question</p>",
    "<p>Please select your answer to the last question</p>"
  ],
  [
    "<p>Por favor select your answer to the first question</p>",
    "<p>Por favor select your answer to the second question</p>",
    "<p>Por favor select your answer to the third question</p>",
    "<p>Por favor select your answer to the last question</p>"
  ],
  [
    "<p>Sil vous plait select your answer to the first question</p>",
    "<p>Sil vous plait select your answer to the second question</p>",
    "<p>Sil vous plait select your answer to the third question</p>",
    "<p>Sil vous plait select your answer to the last question</p>"
  ]
];
  pageItemFooterP=[
  [
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
  ],
  [
    "<hr />",
    "<hr />",
    "<hr />",
    "<hr />",
  ]
];

optionsListBank=[
  [
  [
  "English",   
  "Equality means the same sets of points.",
  "Equality means the same sides.", 
  "The proof is based on the primary observation that triangles $$\\triangle BAM$$ and $$\\triangle CAM$$ are congruent", 
  "The proof is based on the primary observation that triangles $$\\triangle AMB$$ and $$\\triangle CAM$$ are congruent",
  "The proof is based on the primary observation that triangles $$\\triangle ABM$$ and $$\\triangle CAM$$ are congruent",
  "The case of congruence is side-angle-side",
  "The case of congruence is angle-side-angle",
  "The case of congruence is side-side-side"
],
  [
  "English",   
  "Equality means the same sets of points.",
  "Equality means the same sides.", 
  "The proof is based on the primary observation that triangles $$\\triangle BAM$$ and $$\\triangle CAM$$ are congruent", 
  "The proof is based on the primary observation that triangles $$\\triangle AMB$$ and $$\\triangle CAM$$ are congruent",
  "The proof is based on the primary observation that triangles $$\\triangle ABM$$ and $$\\triangle CAM$$ are congruent",
  "The case of congruence is side-angle-side",
  "The case of congruence is angle-side-angle",
  "The case of congruence is side-side-side"
],
[
  "English",   
  "Equality means the same sets of points.",
  "Equality means the same sides.", 
  "The proof is based on the primary observation that triangles $$\\triangle BAM$$ and $$\\triangle CAM$$ are congruent", 
  "The proof is based on the primary observation that triangles $$\\triangle AMB$$ and $$\\triangle CAM$$ are congruent",
  "The proof is based on the primary observation that triangles $$\\triangle ABM$$ and $$\\triangle CAM$$ are congruent",
  "The case of congruence is side-angle-side",
  "The case of congruence is angle-side-angle",
  "The case of congruence is side-side-side"
],
  [],
],
[
  [ 
    "Espanol",
    "Equality means the same sets of points.",
    "Equality means the same sides.", 
    "The proof is based on the primary observation that triangles $$\\triangle BAM$$ and $$\\triangle CAM$$ are congruent", 
    "The proof is based on the primary observation that triangles $$\\triangle AMB$$ and $$\\triangle CAM$$ are congruent",
    "The proof is based on the primary observation that triangles $$\\triangle ABM$$ and $$\\triangle CAM$$ are congruent",
    "The case of congruence is side-angle-side",
    "The case of congruence is angle-side-angle",
    "The case of congruence is side-side-side"
  ],
  [ 
    "Espanol",
    "Equality means the same sets of points.",
    "Equality means the same sides.", 
    "The proof is based on the primary observation that triangles $$\\triangle BAM$$ and $$\\triangle CAM$$ are congruent", 
    "The proof is based on the primary observation that triangles $$\\triangle AMB$$ and $$\\triangle CAM$$ are congruent",
    "The proof is based on the primary observation that triangles $$\\triangle ABM$$ and $$\\triangle CAM$$ are congruent",
    "The case of congruence is side-angle-side",
    "The case of congruence is angle-side-angle",
    "The case of congruence is side-side-side"
  ],
  [ 
    "Espanol",
    "Equality means the same sets of points.",
    "Equality means the same sides.", 
    "The proof is based on the primary observation that triangles $$\\triangle BAM$$ and $$\\triangle CAM$$ are congruent", 
    "The proof is based on the primary observation that triangles $$\\triangle AMB$$ and $$\\triangle CAM$$ are congruent",
    "The proof is based on the primary observation that triangles $$\\triangle ABM$$ and $$\\triangle CAM$$ are congruent",
    "The case of congruence is side-angle-side",
    "The case of congruence is angle-side-angle",
    "The case of congruence is side-side-side"
  ],
    [],
],
[
  [ 
    "French",
    "Equality means the same sets of points.",
    "Equality means the same sides.", 
    "The proof is based on the primary observation that triangles $$\\triangle BAM$$ and $$\\triangle CAM$$ are congruent", 
    "The proof is based on the primary observation that triangles $$\\triangle AMB$$ and $$\\triangle CAM$$ are congruent",
    "The proof is based on the primary observation that triangles $$\\triangle ABM$$ and $$\\triangle CAM$$ are congruent",
    "The case of congruence is side-angle-side",
    "The case of congruence is angle-side-angle",
    "The case of congruence is side-side-side"
  ],
  [ 
    "French",
    "Equality means the same sets of points.",
    "Equality means the same sides.", 
    "The proof is based on the primary observation that triangles $$\\triangle BAM$$ and $$\\triangle CAM$$ are congruent", 
    "The proof is based on the primary observation that triangles $$\\triangle AMB$$ and $$\\triangle CAM$$ are congruent",
    "The proof is based on the primary observation that triangles $$\\triangle ABM$$ and $$\\triangle CAM$$ are congruent",
    "The case of congruence is side-angle-side",
    "The case of congruence is angle-side-angle",
    "The case of congruence is side-side-side"
  ],
  [
    "French",   
    "Equality means the same sets of points.",
    "Equality means the same sides.", 
    "The proof is based on the primary observation that triangles $$\\triangle BAM$$ and $$\\triangle CAM$$ are congruent", 
    "The proof is based on the primary observation that triangles $$\\triangle AMB$$ and $$\\triangle CAM$$ are congruent",
    "The proof is based on the primary observation that triangles $$\\triangle ABM$$ and $$\\triangle CAM$$ are congruent",
    "The case of congruence is side-angle-side",
    "The case of congruence is angle-side-angle",
    "The case of congruence is side-side-side"
  ],
    [],
]
]; 

}

const initScore=Array(1).fill('');
const [scoreReport, setScoreReport] = useState(initScore);

function scoreFunction(){
  setScoreReport(globalOption);
}

return(
      <div>
      Lang: {props.language}; Page id: {props.id} 
      <hr />
      3.4 p 159; 8.6 p 452
        <hr />
      <p>
    
        {/*<div dangerouslySetInnerHTML={{__html: headerTest}}></div>
        Option:{tempOption[0]}
        Option:{tempOption[1]}
        Option:{tempOption[2]}
        Option:{tempOption[3]}
        */}
        </p>
        

      {/* add a type for MenuDemo (number,string,menu) Add (Header,Label,Footer) Add(button to render string format) Add (Number Format)
      note that global Option is an array 
      <MenuDemo id={0} pageItemLanguage={props.language} pageItemType="num" pageItemHeader={pageItemHeaderP[props.language]} pageItemFooter={pageItemFooterP[props.language]} menuSelectedOption={selectOption} globalOptionSelected={globalOption} optionsList = {optionsListBank[props.language][0]}/>
      <MenuDemo id={1} pageItemLanguage={props.language} pageItemType="eq" pageItemHeader={pageItemHeaderP[props.language]} pageItemFooter={pageItemFooterP[props.language]} menuSelectedOption={selectOption} globalOptionSelected={globalOption} optionsList = {optionsListBank[props.language][1]}/>
      <MenuDemo id={2} pageItemLanguage={props.language} pageItemType="menu" pageItemHeader={pageItemHeaderP[props.language]} pageItemFooter={pageItemFooterP[props.language]} menuSelectedOption={selectOption} globalOptionSelected={globalOption} optionsList = {optionsListBank[props.language][2]}/>
      <MenuDemo id={3} pageItemLanguage={props.language} pageItemType="menu" pageItemHeader={pageItemHeaderP[props.language]} pageItemFooter={pageItemFooterP[props.language]} menuSelectedOption={selectOption} globalOptionSelected={globalOption} optionsList = {optionsListBank[props.language][3]}/>
      
      
      <MenuDemo id={0} pageItemLanguage={props.language} pageItemType={pageItemType[0]} pageItemHeader={pageItemHeaderP[props.language][0]} pageItemFooter={pageItemFooterP[props.language][0]} menuSelectedOption={selectOption} globalOptionSelected={globalOption} optionsList = {optionsListBank[props.language][0]}/>
      <MenuDemo id={1} pageItemLanguage={props.language} pageItemType={pageItemType[1]} pageItemHeader={pageItemHeaderP[props.language][1]} pageItemFooter={pageItemFooterP[props.language][1]} menuSelectedOption={selectOption} globalOptionSelected={globalOption} optionsList = {optionsListBank[props.language][1]}/>
      <MenuDemo id={2} pageItemLanguage={props.language} pageItemType={pageItemType[2]} pageItemHeader={pageItemHeaderP[props.language][2]} pageItemFooter={pageItemFooterP[props.language][2]} menuSelectedOption={selectOption} globalOptionSelected={globalOption} optionsList = {optionsListBank[props.language][2]}/>
      <MenuDemo id={3} pageItemLanguage={props.language} pageItemType={pageItemType[3]} pageItemHeader={pageItemHeaderP[props.language][3]} pageItemFooter={pageItemFooterP[props.language][3]} menuSelectedOption={selectOption} globalOptionSelected={globalOption} optionsList = {optionsListBank[props.language][3]}/>
*/}
      {pageItemIndices.map((number) =>
       <MenuDemo id={number} pageItemLanguage={props.language} pageItemType={pageItemType[number]} pageItemHeader={pageItemHeaderP[props.language][number]} pageItemFooter={pageItemFooterP[props.language][number]} menuSelectedOption={selectOption} globalOptionSelected={globalOption} optionsList = {optionsListBank[props.language][number]}/>

      )}

      <button onClick={scoreFunction}>{props.language===en && "Score" }{props.language===es && "Puntaje" }{props.language===fr && "Points" }</button>
   
      {scoreReport}
      </div>
      
    );
}