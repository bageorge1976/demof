import React, {Component} from "react";
import { useEffect, useState } from 'react';
import samplePDF from './P4.pdf';
//import Menu from "./components/Menu";
import MenuDemo from "../components/MenuDemo"
//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
    console.log("ID is:"+id);

    //setTempOption([optionsSelected[0], optionsSelected[1] , optionsSelected[2], optionsSelected[3]]);
    
    //cheap way to duplicate the array
    const clone = optionsSelected.slice(0);
    setTempOption(clone);
    //console.log(tempOption);
  };






  //let headerTest = '<img src="../../home.png">';

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

useEffect(() => {
    
  globalOption=tempOption;

  //setCounter(++counter);
  //console.log(counter.toString() + tempOption);

}, [tempOption]);


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
    "Consider isosceles triangle<kaTex> $$\\triangle ABC$$ ($$AB \\cong AC$$)<kaTex>  and M the middle of BC as shown in Figure 1.<br/> Prove that<kaTex> $$AM \\perp BC$$. <kaTex> <div class='d-flex align-items-center'><img class='mx-auto' src=/triisosceles.png></div><div style='text-align:center;'><span>Figure 1. Isosceles triangle and median.</span></div>",
    "The symbol <kaTex>$$\\cong$$<kaTex> means congruence that is same shape (measures) but not equality. <b>1.____</b> ",
    "<kaTex>$$AM \\perp BC$$<kaTex> means the measure of angle <kaTex>$$\\angle AMB$$<kaTex> is equal to the measure of angle <kaTex>$$\\angle AMC$$<kaTex> is equal to <kaTex>$$90^\\circ$$<kaTex>. <div><b>2.____</b></div>",
    "We have <kaTex>$$AB \\cong AC$$<kaTex> and <kaTex>$$BM \\cong MC$$<kaTex>. <b>3.____</b>",
    "From the congruence of the triangles mentioned before we observe the congruence of the angles <kaTex>$$\\angle BMA$$<kaTex> and <kaTex>$$\\angle AMC$$<kaTex>.<div></div> The sum of (the measures of) these two congruent angles is <kaTex>$$180^\\circ$$<kaTex>.<br/> We deduce each of them has a measure of: <b>4.____</b> ",
    "We conclude: <kaTex>$$AM \\perp BC$$."
  ],
  [
    "Por favor: Consider isosceles triangle<kaTex> $$\\triangle ABC$$ ($$AB \\cong AC$$)<kaTex>  and M the middle of BC as shown in Figure 1.<br/> Prove that<kaTex> $$AM \\perp BC$$. <kaTex> <div class='d-flex align-items-center'><img class='mx-auto' src=/triisosceles.png></div><div style='text-align:center;'><span>Figure 1. Isosceles triangle and median.</span></div>",
    "The symbol <kaTex>$$\\cong$$<kaTex> means congruence that is same shape (measures) but not equality. <b>1.____</b> ",
    "<kaTex>$$AM \\perp BC$$<kaTex> means the measure of angle <kaTex>$$\\angle AMB$$<kaTex> is equal to the measure of angle <kaTex>$$\\angle AMC$$<kaTex> is equal to <kaTex>$$90^\\circ$$<kaTex>. <div><b>2.____</b></div>",
    "We have <kaTex>$$AB \\cong AC$$<kaTex> and <kaTex>$$BM \\cong MC$$<kaTex>. <b>3.____</b>",
    "From the congruence of the triangles mentioned before we observe the congruence of the angles <kaTex>$$\\angle BMA$$<kaTex> and <kaTex>$$\\angle AMC$$<kaTex>.<div></div> The sum of (the measures of) these two congruent angles is <kaTex>$$180^\\circ$$<kaTex>.<br/> We deduce each of them has a measure of: <b>4.____</b> ",
    "We conclude: <kaTex>$$AM \\perp BC$$."
  ],
  [
    "Si'l vous plait: Consider isosceles triangle<kaTex> $$\\triangle ABC$$ ($$AB \\cong AC$$)<kaTex>  and M the middle of BC as shown in Figure 1.<br/> Prove that<kaTex> $$AM \\perp BC$$. <kaTex> <div class='d-flex align-items-center'><img class='mx-auto' src=/triisosceles.png></div><div style='text-align:center;'><span>Figure 1. Isosceles triangle and median.</span></div>",
    "The symbol <kaTex>$$\\cong$$<kaTex> means congruence that is same shape (measures) but not equality. <b>1.____</b> ",
    "<kaTex>$$AM \\perp BC$$<kaTex> means the measure of angle <kaTex>$$\\angle AMB$$<kaTex> is equal to the measure of angle <kaTex>$$\\angle AMC$$<kaTex> is equal to <kaTex>$$90^\\circ$$<kaTex>. <div><b>2.____</b></div>",
    "We have <kaTex>$$AB \\cong AC$$<kaTex> and <kaTex>$$BM \\cong MC$$<kaTex>. <b>3.____</b>",
    "From the congruence of the triangles mentioned before we observe the congruence of the angles <kaTex>$$\\angle BMA$$<kaTex> and <kaTex>$$\\angle AMC$$<kaTex>.<div></div> The sum of (the measures of) these two congruent angles is <kaTex>$$180^\\circ$$<kaTex>.<br/> We deduce each of them has a measure of: <b>4.____</b> ",
    "We conclude: <kaTex>$$AM \\perp BC$$."
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
  "Español:Equality means the same sets of points.",
  "Equality means the same sides.", 
  "The proof is based on the primary observation that triangles $$\\triangle BAM$$ and $$\\triangle CAM$$ are congruent", 
  "The proof is based on the primary observation that triangles $$\\triangle AMB$$ and $$\\triangle CAM$$ are congruent",
  "The proof is based on the primary observation that triangles $$\\triangle ABM$$ and $$\\triangle CAM$$ are congruent",
  "The case of congruence is side-angle-side",
  "The case of congruence is angle-side-angle",
  "The case of congruence is side-side-side"
];

const solFr:string[]=[
  "Français: Equality means the same sets of points.",
  "Equality means the same sides.", 
  "The proof is based on the primary observation that triangles $$\\triangle BAM$$ and $$\\triangle CAM$$ are congruent", 
  "The proof is based on the primary observation that triangles $$\\triangle AMB$$ and $$\\triangle CAM$$ are congruent",
  "The proof is based on the primary observation that triangles $$\\triangle ABM$$ and $$\\triangle CAM$$ are congruent",
  "The case of congruence is side-angle-side",
  "The case of congruence is angle-side-angle",
  "The case of congruence is side-side-side"
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
    "To prove that <kaTex>$$AM \\cong BM$$<kaTex> the most helpful pair of similar triangles is: <kaTex>$$\\triangle ABC$$<kaTex> and <kaTex>$$\\triangle EBM$$.<kaTex><br/> <b>3.____</b>. This implies E is the middle point of AB.",
    "Because <kaTex>$$AE \\cong BE$$<kaTex> and they have a right angle it can be stated that triangle <kaTex>$$\\triangle AEM$$<kaTex> is congruent with <kaTex>$$\\triangle BEM$$<kaTex>.<br/><b>4.____</b>",
    "One of the consequences of the triangles congruence is that <kaTex>$$AM \\cong BM$$.<kaTex><br/>We conclude: <kaTex>$$AM = BM = \\frac{BC}{2}$$",
  ],
  [
    "Por favor:Consider the right angle triangle <kaTex>$$\\triangle ABC$$, $$m(\\angle A)=90^\\circ$$<kaTex> and <kaTex>$$M$$<kaTex> the middle of <kaTex>$$BC$$<kaTex> as shown in Figure 1.<br/> Prove that <kaTex>$$AM = \\frac{BC}{2}$$.<kaTex> <div class='d-flex align-items-center'><img class='mx-auto' src=/righttrimed.png></div><div style='text-align:center;'><span>Figure 1. Right angle triangle and median.</span></div>",
    "The proof will be completed by showing that <kaTex>$$\\triangle BAM$$<kaTex> is isosceles that is <kaTex>$$AM \\cong BM$$.<kaTex> <b>1.____</b>",
    "To prove that <kaTex>$$AM \\cong BM$$<kaTex> it is best to use an auxiliary construction. <b>2.____</b> <div class='d-flex align-items-center'><img class='mx-auto' src=/P2LEFT.png></div><br/><div class='d-flex align-items-center'><img class='mx-auto' src=/P2RIGHT.png></div><div style='text-align:center;'><span>Figure 2. Auxiliary construction choices.</span></div>",
    "To prove that <kaTex>$$AM \\cong BM$$<kaTex> the most helpful pair of similar triangles is: <kaTex>$$\\triangle ABC$$<kaTex> and <kaTex>$$\\triangle EBM$$.<kaTex><br/> <b>3.____</b>. This implies E is the middle point of AB.",
    "Because <kaTex>$$AE \\cong BE$$<kaTex> and they have a right angle it can be stated that triangle <kaTex>$$\\triangle AEM$$<kaTex> is congruent with <kaTex>$$\\triangle BEM$$<kaTex>.<br/><b>4.____</b>",
    "One of the consequences of the triangles congruence is that <kaTex>$$AM \\cong BM$$.<kaTex><br/>We conclude: <kaTex>$$AM = BM = \\frac{BC}{2}$$",
  ],
  [
    "Si'l vous plait:Consider the right angle triangle <kaTex>$$\\triangle ABC$$, $$m(\\angle A)=90^\\circ$$<kaTex> and <kaTex>$$M$$<kaTex> the middle of <kaTex>$$BC$$<kaTex> as shown in Figure 1.<br/> Prove that <kaTex>$$AM = \\frac{BC}{2}$$.<kaTex> <div class='d-flex align-items-center'><img class='mx-auto' src=/righttrimed.png></div><div style='text-align:center;'><span>Figure 1. Right angle triangle and median.</span></div>",
    "The proof will be completed by showing that <kaTex>$$\\triangle BAM$$<kaTex> is isosceles that is <kaTex>$$AM \\cong BM$$.<kaTex> <b>1.____</b>",
    "To prove that <kaTex>$$AM \\cong BM$$<kaTex> it is best to use an auxiliary construction. <b>2.____</b> <div class='d-flex align-items-center'><img class='mx-auto' src=/P2LEFT.png></div><br/><div class='d-flex align-items-center'><img class='mx-auto' src=/P2RIGHT.png></div><div style='text-align:center;'><span>Figure 2. Auxiliary construction choices.</span></div>",
    "To prove that <kaTex>$$AM \\cong BM$$<kaTex> the most helpful pair of similar triangles is: <kaTex>$$\\triangle ABC$$<kaTex> and <kaTex>$$\\triangle EBM$$.<kaTex><br/> <b>3.____</b>. This implies E is the middle point of AB.",
    "Because <kaTex>$$AE \\cong BE$$<kaTex> and they have a right angle it can be stated that triangle <kaTex>$$\\triangle AEM$$<kaTex> is congruent with <kaTex>$$\\triangle BEM$$<kaTex>.<br/><b>4.____</b>",
    "One of the consequences of the triangles congruence is that <kaTex>$$AM \\cong BM$$.<kaTex><br/>We conclude: <kaTex>$$AM = BM = \\frac{BC}{2}$$",

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
  "Since M is the middle point of BC we will conclude $$AM = BM = \\frac{BC}{2}$$.", 
  "Since M is an arbitrary point on BC we will conclude $$AM = BM = \\frac{BC}{2}$$.",
  "To relate AM it is best to use the perpendicular from M to AB.",
  "To relate AM it is best to use the perpendicular from M to AC.",
  "Consider the similarity of these triangles and BM = BC/2.", 
  "The case of congruence is side-angle-side.",
  "The case of congruence is angle-side-angle.",
  "The case of congruence is side-side-side."
];

const solEs:string[]=[
  "Español:Since M is the middle point of BC we will conclude $$AM = BM = \\frac{BC}{2}$$.", 
  "Since M is an arbitrary point on BC we will conclude $$AM = BM = \\frac{BC}{2}$$.",
  "To relate AM it is best to use the perpendicular from M to AB.",
  "To relate AM it is best to use the perpendicular from M to AC.",
  "Consider the similarity of these triangles and BM = BC/2.", 
  "The case of congruence is side-angle-side.",
  "The case of congruence is angle-side-angle.",
  "The case of congruence is side-side-side."
];

const solFr:string[]=[
  "Français:Since M is the middle point of BC we will conclude $$AM = BM = \\frac{BC}{2}$$", 
  "Since M is an arbitrary point on BC we will conclude $$AM = BM = \\frac{BC}{2}$$",
  "To relate AM it is best to use the perpendicular from M to AB.",
  "To relate AM it is best to use the perpendicular from M to AC.",
  "Consider the similarity of these triangles and BM = BC/2.", 
  "The case of congruence is side-angle-side.",
  "The case of congruence is angle-side-angle.",
  "The case of congruence is side-side-side."
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
 pageCourse = ["Electrical Engineering Digital Communications","es:Electrical Engineering Digital Communications","fr:Electrical Engineering Digital Communications"];
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
    "The probability of a bit error, <kaTex>$$P_B$$<kaTex>, is numerically equal to the area under the \"tail\" of either likelihood function,<kaTex>$$p(z|s_1)$$<kaTex> or <kaTex>$$p(z|s_2)$$<kaTex>, falling on the \"incorrect\" side of the threshold. <b>6.____</b>",
    "where <kaTex>$$\\gamma_0 = (a_1 + a_2 )/2$$<kaTex> is the optimum threshold from  Figure 1.<b>7.____</b> where <kaTex>$$\\sigma_0^2$$<kaTex> is the variance of the noise out of the correlator.",
    "Let <kaTex>$$u=(z-a_2)/\\sigma_0$$<kaTex>. Then <kaTex>$$\\sigma_0 du = dz$$<kaTex> and: <b>8.____</b>",
    "where <kaTex>$$Q(x)$$<kaTex> where <kaTex>$$Q(x)$$<kaTex>, called the complementary error function or co-error function, is a commonly used symbol for the probability under the tails of the Gaussian distribution. It is defined as: <b>9.____</b>"
  ],
  [
    "<div class='d-flex align-items-center'><img width='90%' class='mx-auto' src=/Probp1p2.png></div><div style='text-align:center;'>Figure 1. Conditional probability density functions: p(z|s<sub>1</sub>) and p(z|s<sub>2</sub>)</div><p></p>",
    "Por favor: For the binary example in Figure 1, there are two ways in which errors can occur. An error, e, will occur when <kaTex>$$s_1(t)$$<kaTex> is sent, and channel noise results in the receiver output signal <kaTex>$$z(T)$$<kaTex>, being less than <kaTex>$$\\gamma_0$$.<kaTex><b>1.____</b>",
    "This is illustrated by the shaded area to the left of <kaTex>$$\\gamma_0$$<kaTex> in Figure 1. Similarly an error occurs when <kaTex>$$s_2(t)$$<kaTex> is sent and the channel noise results in <kaTex>$$z(T)$$<kaTex>, being greater than <kaTex>$$\\gamma_0$$<kaTex>. <b>2.____</b>",
    "The probability of an error is the sum of the probabilities of all the ways that an error can occur. For the binary case, we can express the probability of bit error, <kaTex>$$P_B$$<kaTex>, as follows:<kaTex>$$P_B = \\sum_{i=1}^2 P(e, s_i )$$<kaTex>. <b>3.____</b>",
    "That is, given that signal <kaTex>$$s_1 (t)$$<kaTex> was transmitted, an error results if hypothesis <kaTex>$$H_2$$<kaTex> is chosen, or given that the signal <kaTex>$$s_2 (t)$$<kaTex> was transmitted, an error results if hypothesis <kaTex>$$H_1$$<kaTex> is chosen. For the case where the a priori probabilities are equal, that is, <kaTex>$$P(s_1 )= P(s_2 ) = \\frac{1}{2}$$,<kaTex> <b>4.____</b>",
    "and because of the symmetry of the probability density functions: <b>5.____</b>",
    "The probability of a bit error, <kaTex>$$P_B$$<kaTex>, is numerically equal to the area under the \"tail\" of either likelihood function,<kaTex>$$p(z|s_1)$$<kaTex> or <kaTex>$$p(z|s_2)$$<kaTex>, falling on the \"incorrect\" side of the threshold. <b>6.____</b>",
    "where <kaTex>$$\\gamma_0 = (a_1 + a_2 )/2$$<kaTex> is the optimum threshold from  Figure 1.<b>7.____</b> where <kaTex>$$\\sigma_0^2$$<kaTex> is the variance of the noise out of the correlator.",
    "Let <kaTex>$$u=(z-a_2)/\\sigma_0$$<kaTex>. Then <kaTex>$$\\sigma_0 du = dz$$<kaTex> and: <b>8.____</b>",
    "where <kaTex>$$Q(x)$$<kaTex> where <kaTex>$$Q(x)$$<kaTex>, called the complementary error function or co-error function, is a commonly used symbol for the probability under the tails of the Gaussian distribution. It is defined as: <b>9.____</b>"
  ],
  [
    "<div class='d-flex align-items-center'><img width='90%' class='mx-auto' src=/Probp1p2.png></div><div style='text-align:center;'>Figure 1. Conditional probability density functions: p(z|s<sub>1</sub>) and p(z|s<sub>2</sub>)</div><p></p>",
    "S'il vous plait: For the binary example in Figure 1, there are two ways in which errors can occur. An error, e, will occur when <kaTex>$$s_1(t)$$<kaTex> is sent, and channel noise results in the receiver output signal <kaTex>$$z(T)$$<kaTex>, being less than <kaTex>$$\\gamma_0$$.<kaTex><b>1.____</b>",
    "This is illustrated by the shaded area to the left of <kaTex>$$\\gamma_0$$<kaTex> in Figure 1. Similarly an error occurs when <kaTex>$$s_2(t)$$<kaTex> is sent and the channel noise results in <kaTex>$$z(T)$$<kaTex>, being greater than <kaTex>$$\\gamma_0$$<kaTex>. <b>2.____</b>",
    "The probability of an error is the sum of the probabilities of all the ways that an error can occur. For the binary case, we can express the probability of bit error, <kaTex>$$P_B$$<kaTex>, as follows:<kaTex>$$P_B = \\sum_{i=1}^2 P(e, s_i )$$<kaTex>. <b>3.____</b>",
    "That is, given that signal <kaTex>$$s_1 (t)$$<kaTex> was transmitted, an error results if hypothesis <kaTex>$$H_2$$<kaTex> is chosen, or given that the signal <kaTex>$$s_2 (t)$$<kaTex> was transmitted, an error results if hypothesis <kaTex>$$H_1$$<kaTex> is chosen. For the case where the a priori probabilities are equal, that is, <kaTex>$$P(s_1 )= P(s_2 ) = \\frac{1}{2}$$,<kaTex> <b>4.____</b>",
    "and because of the symmetry of the probability density functions: <b>5.____</b>",
    "The probability of a bit error, <kaTex>$$P_B$$<kaTex>, is numerically equal to the area under the \"tail\" of either likelihood function,<kaTex>$$p(z|s_1)$$<kaTex> or <kaTex>$$p(z|s_2)$$<kaTex>, falling on the \"incorrect\" side of the threshold. <b>6.____</b>",
    "where <kaTex>$$\\gamma_0 = (a_1 + a_2 )/2$$<kaTex> is the optimum threshold from  Figure 1.<b>7.____</b> where <kaTex>$$\\sigma_0^2$$<kaTex> is the variance of the noise out of the correlator.",
    "Let <kaTex>$$u=(z-a_2)/\\sigma_0$$<kaTex>. Then <kaTex>$$\\sigma_0 du = dz$$<kaTex> and: <b>8.____</b>",
    "where <kaTex>$$Q(x)$$<kaTex> where <kaTex>$$Q(x)$$<kaTex>, called the complementary error function or co-error function, is a commonly used symbol for the probability under the tails of the Gaussian distribution. It is defined as: <b>9.____</b>"
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
  "The probability of such an occurence is $$P(e|s_1 )=P(H_2|s_1 ) = \\int_{-\\infty}^{\\gamma_0}p(z|s_1 )$$", 
  "The probability of such an occurence is $$P(e|s_2 ) = P(H_1|s_2 ) = \\int_{\\gamma_0}^{\\infty}p(z|s_2  ) dz$$", 
  "Combining the previous three equations, we can write: $$P_B = P(H_2|s_1 )P(s_1 ) + P(H_1|s_2 )P(s_2 )$$ ", 
  "$$P_B = \\frac{1}{2}P(H_2|s_1 ) + \\frac{1}{2}P(H_1|s_2 )$$",
  "$$P_B = P(H_2|s_1 ) = P(H_1|s_2 )$$",
  "We can therefore compute $$P_B$$ by integrating $$p(z|s_1 )$$ between the limits $$-\\infty$$ and $$\\gamma_0$$, or as shown below, by integrating $$p(z|s_2  )$$ between the limits $$\\gamma_0$$ and $$\\infty$$: $$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 + a_2 )/2}^{\\infty}p(z|s_2  ) dz$$",
  "Replacing the likelihood $$p(z|s_2  )$$ with its Gaussian equivalent, we have:$$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 + a_2 )/2}^{\\infty} \\frac{1}{\\sigma_0 \\sqrt{2 \\pi}} exp\\left[ -\\frac{1}{2}\\left(\\frac{z-a_2}{\\sigma_0} \\right)^2 \\right] dz$$",
  "$$P_B = \\int_{\\gamma_0=(a_1 - a_2 )/2}^{u=\\infty}$$ $$\\frac{1}{\\sqrt{2 \\pi}}exp\\left( -\\frac{u^2}{2}\\right) du = Q \\left (\\frac{a_1 -a_2}{2\\sigma_0} \\right)$$",
  "$$Q(x)= \\frac{1}{\\sqrt{2 \\pi}}\\int_{x}^{\\infty}  exp\\left( -\\frac{u^2}{2}\\right) du$$"
]


const solEs:string[]=[
  "Español:The probability of such an occurence is $$P(e|s_1 )=P(H_2|s_1 ) = \\int_{-\\infty}^{\\gamma_0}p(z|s_1 )$$", 
  "The probability of such an occurence is $$P(e|s_2 ) = P(H_1|s_2 ) = \\int_{\\gamma_0}^{\\infty}p(z|s_2  ) dz$$", 
  "Combining the previous three equations, we can write: $$P_B = P(H_2|s_1 )P(s_1 ) + P(H_1|s_2 )P(s_2 )$$ ", 
  "$$P_B = \\frac{1}{2}P(H_2|s_1 ) + \\frac{1}{2}P(H_1|s_2 )$$",
  "$$P_B = P(H_2|s_1 ) = P(H_1|s_2 )$$",
  "We can therefore compute $$P_B$$ by integrating $$p(z|s_1 )$$ between the limits $$-\\infty$$ and $$\\gamma_0$$, or as shown below, by integrating $$p(z|s_2  )$$ between the limits $$\\gamma_0$$ and $$\\infty$$: $$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 + a_2 )/2}^{\\infty}p(z|s_2  ) dz$$",
  "Replacing the likelihood $$p(z|s_2  )$$ with its Gaussian equivalent, we have:$$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 + a_2 )/2}^{\\infty} \\frac{1}{\\sigma_0 \\sqrt{2 \\pi}} exp\\left[ -\\frac{1}{2}\\left(\\frac{z-a_2}{\\sigma_0} \\right)^2 \\right] dz$$",
  "$$P_B = \\int_{\\gamma_0=(a_1 - a_2 )/2}^{u=\\infty}$$ $$\\frac{1}{\\sqrt{2 \\pi}}exp\\left( -\\frac{u^2}{2}\\right) du = Q \\left (\\frac{a_1 -a_2}{2\\sigma_0} \\right)$$",
  "$$Q(x)= \\frac{1}{\\sqrt{2 \\pi}}\\int_{x}^{\\infty}  exp\\left( -\\frac{u^2}{2}\\right) du$$"
]


const solFr:string[]=[
  "Français:The probability of such an occurence is $$P(e|s_1 )=P(H_2|s_1 ) = \\int_{-\\infty}^{\\gamma_0}p(z|s_1 )$$", 
  "The probability of such an occurence is $$P(e|s_2 ) = P(H_1|s_2 ) = \\int_{\\gamma_0}^{\\infty}p(z|s_2  ) dz$$", 
  "Combining the previous three equations, we can write: $$P_B = P(H_2|s_1 )P(s_1 ) + P(H_1|s_2 )P(s_2 )$$ ", 
  "$$P_B = \\frac{1}{2}P(H_2|s_1 ) + \\frac{1}{2}P(H_1|s_2 )$$",
  "$$P_B = P(H_2|s_1 ) = P(H_1|s_2 )$$",
  "We can therefore compute $$P_B$$ by integrating $$p(z|s_1 )$$ between the limits $$-\\infty$$ and $$\\gamma_0$$, or as shown below, by integrating $$p(z|s_2  )$$ between the limits $$\\gamma_0$$ and $$\\infty$$: $$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 + a_2 )/2}^{\\infty}p(z|s_2  ) dz$$",
  "Replacing the likelihood $$p(z|s_2  )$$ with its Gaussian equivalent, we have:$$\\newline$$ $$P_B = \\int_{\\gamma_0=(a_1 + a_2 )/2}^{\\infty} \\frac{1}{\\sigma_0 \\sqrt{2 \\pi}} exp\\left[ -\\frac{1}{2}\\left(\\frac{z-a_2}{\\sigma_0} \\right)^2 \\right] dz$$",
  "$$P_B = \\int_{\\gamma_0=(a_1 - a_2 )/2}^{u=\\infty}$$ $$\\frac{1}{\\sqrt{2 \\pi}}exp\\left( -\\frac{u^2}{2}\\right) du = Q \\left (\\frac{a_1 -a_2}{2\\sigma_0} \\right)$$",
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
 pageCourse = ["Electrical Engineering Digital Communications","es:Electrical Engineering Digital Communications","fr:Electrical Engineering Digital Communications"];
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
    "where the energy, <kaTex>$$E$$<kaTex>, of the input signal <kaTex>$$s(t)$$<kaTex> is:<br /> <kaTex>$$E = \\int_{-\\infty}^{\\infty}|S(f)|^2 df$$.<kaTex> <br />Thus the maximum output <kaTex>$$(S/N)_T$$<kaTex> depends on the input signal energy and the power spectral density of the noise, not on the particular shape of the waveform that is used. <br/> The equality in the previous equation holds only if the optimum filter transfer function, <kaTex>$$H_0(f)$$<kaTex>, is employed, such that: <b>9.____</b>",
    "or: <b>10.____</b>",
    "Since <kaTex>$$s(t)$$<kaTex> is a real valued signal we can write using Fourier transformations table: <b>11.____</b>",
    "Thus the impulse response of a filter that produces the maximum output signal-to-noise ratio is the mirror image of the message signal <kaTex>$$s(t)$$<kaTex>, <i>delayed</i> by the symbol time duration, <kaTex>$$T$$<kaTex>.Note that the delay of <kaTex>$$T$$<kaTex> seconds makes the previous equations causal; that is, the delay of <kaTex>$$T$$<kaTex> seconds makes <kaTex>$$h(t)$$<kaTex> a function of positive time in the interval <kaTex>$$0$$ $$\\leq$$ $$t$$ $$\\leq$$ $$T$$.<kaTex> <b>12.____</b>"
  ],
  [
    "<div class='d-flex align-items-center'><img width='90%' class='mx-auto' src=/MatchedFilter.png></div><div style='text-align:center;'>Figure 1. Two basic steps in digital signal detection</div><p></p>",
    "Por favor:A matched filter is a linear filter designed to provide the maximum signal-to-noise power ratio at its output for a given transmitted symbol waveform. Consider that a known signal <kaTex>$$s(t)$$<kaTex> plus AWGN, <kaTex>$$n(t)$$<kaTex>, is the input to a linear, time-invariant filter followed by a sampler, as shown in Figure 1. At time <kaTex>$$t = T$$<kaTex>, the receiver output <kaTex>$$z(T)$$<kaTex>, consists of a signal component, <kaTex>$$a_i$$<kaTex>, and a noise component, <kaTex>$$n_0$$<kaTex>. The variance of the output noise (average noise power) is denoted by <kaTex>$$\\sigma_0^2$$<kaTex>, so that the ratio of instantaneous signal power to average noise power, <kaTex>$$(S/N)_T$$<kaTex>, at time <kaTex>$$t = T$$<kaTex>, out of the receiver in block 1, is: <b>1.____</b>",
    "We wish to find the filter transfer function <kaTex>$$H_0(f)$$<kaTex> that maximizes the previous equation. <b>2.____</b>",
    "where <kaTex>$$S(f)$$<kaTex> is the Fourier transform of the input signal <kaTex>$$s(t)$$<kaTex>. Assume the two-sided power spectral density of the input noise is <kaTex>$$N_0/2$$<kaTex> watts/hertz. <b>3.____</b>",
    "We can express the output noise power, <kaTex>$$\\sigma_0^2$$<kaTex>, as: <b>4.____</b>",
    "We then combine the previous equations to express <kaTex>$$(S/N)_T$$<kaTex>, as follows: <b>5.____</b>",
    "We next find that value of <kaTex>$$H(f)=H_0(f)$$<kaTex> for which the maximum <kaTex>$$(S/N)_T$$<kaTex> is achieved, by using Schwarz's inequality. One form of the inequality can be stated as:<br /> <kaTex>$$\\left| \\int_{-\\infty}^{\\infty} f_1 (x) f_2 (x) \\right| \\leq \\int_{-\\infty}^{\\infty} |f_1 (x)|^2 dx \\int_{-\\infty}^{\\infty} |f_2 (x)|^2 dx.$$<kaTex><br/> The equality holds if <kaTex>$$f_1(x) = k f_2^*$$<kaTex>, where k is an arbitrary constant and * indicates complex conjugate. If we identify <kaTex>$$H(f)$$<kaTex> with <kaTex>$$f_1 (x)$$<kaTex> and <kaTex>$$S(f)e^{j2\\pi fT}$$<kaTex> with <kaTex>$$f_2(x)$$<kaTex> we can write: <b>6.____</b>",
    "Substituting in one of the previous equations yields: <b>7.____</b>",
    "or: <b>8.____</b>",
    "where the energy, <kaTex>$$E$$<kaTex>, of the input signal <kaTex>$$s(t)$$<kaTex> is:<br /> <kaTex>$$E = \\int_{-\\infty}^{\\infty}|S(f)|^2 df$$.<kaTex> <br />Thus the maximum output <kaTex>$$(S/N)_T$$<kaTex> depends on the input signal energy and the power spectral density of the noise, not on the particular shape of the waveform that is used. <br/> The equality in the previous equation holds only if the optimum filter transfer function, <kaTex>$$H_0(f)$$<kaTex>, is employed, such that: <b>9.____</b>",
    "or: <b>10.____</b>",
    "Since <kaTex>$$s(t)$$<kaTex> is a real valued signal we can write using Fourier transformations table: <b>11.____</b>",
    "Thus the impulse response of a filter that produces the maximum output signal-to-noise ratio is the mirror image of the message signal <kaTex>$$s(t)$$<kaTex>, <i>delayed</i> by the symbol time duration, <kaTex>$$T$$<kaTex>.Note that the delay of <kaTex>$$T$$<kaTex> seconds makes the previous equations causal; that is, the delay of <kaTex>$$T$$<kaTex> seconds makes <kaTex>$$h(t)$$<kaTex> a function of positive time in the interval <kaTex>$$0$$ $$\\leq$$ $$t$$ $$\\leq$$ $$T$$.<kaTex> <b>12.____</b>"

  ],
  [
    "<div class='d-flex align-items-center'><img width='90%' class='mx-auto' src=/MatchedFilter.png></div><div style='text-align:center;'>Figure 1. Two basic steps in digital signal detection</div><p></p>",
    "S'il vous plait: A matched filter is a linear filter designed to provide the maximum signal-to-noise power ratio at its output for a given transmitted symbol waveform. Consider that a known signal <kaTex>$$s(t)$$<kaTex> plus AWGN, <kaTex>$$n(t)$$<kaTex>, is the input to a linear, time-invariant filter followed by a sampler, as shown in Figure 1. At time <kaTex>$$t = T$$<kaTex>, the receiver output <kaTex>$$z(T)$$<kaTex>, consists of a signal component, <kaTex>$$a_i$$<kaTex>, and a noise component, <kaTex>$$n_0$$<kaTex>. The variance of the output noise (average noise power) is denoted by <kaTex>$$\\sigma_0^2$$<kaTex>, so that the ratio of instantaneous signal power to average noise power, <kaTex>$$(S/N)_T$$<kaTex>, at time <kaTex>$$t = T$$<kaTex>, out of the receiver in block 1, is: <b>1.____</b>",
    "We wish to find the filter transfer function <kaTex>$$H_0(f)$$<kaTex> that maximizes the previous equation. <b>2.____</b>",
    "where <kaTex>$$S(f)$$<kaTex> is the Fourier transform of the input signal <kaTex>$$s(t)$$<kaTex>. Assume the two-sided power spectral density of the input noise is <kaTex>$$N_0/2$$<kaTex> watts/hertz. <b>3.____</b>",
    "We can express the output noise power, <kaTex>$$\\sigma_0^2$$<kaTex>, as: <b>4.____</b>",
    "We then combine the previous equations to express <kaTex>$$(S/N)_T$$<kaTex>, as follows: <b>5.____</b>",
    "We next find that value of <kaTex>$$H(f)=H_0(f)$$<kaTex> for which the maximum <kaTex>$$(S/N)_T$$<kaTex> is achieved, by using Schwarz's inequality. One form of the inequality can be stated as:<br /> <kaTex>$$\\left| \\int_{-\\infty}^{\\infty} f_1 (x) f_2 (x) \\right| \\leq \\int_{-\\infty}^{\\infty} |f_1 (x)|^2 dx \\int_{-\\infty}^{\\infty} |f_2 (x)|^2 dx.$$<kaTex><br/> The equality holds if <kaTex>$$f_1(x) = k f_2^*$$<kaTex>, where k is an arbitrary constant and * indicates complex conjugate. If we identify <kaTex>$$H(f)$$<kaTex> with <kaTex>$$f_1 (x)$$<kaTex> and <kaTex>$$S(f)e^{j2\\pi fT}$$<kaTex> with <kaTex>$$f_2(x)$$<kaTex> we can write: <b>6.____</b>",
    "Substituting in one of the previous equations yields: <b>7.____</b>",
    "or: <b>8.____</b>",
    "where the energy, <kaTex>$$E$$<kaTex>, of the input signal <kaTex>$$s(t)$$<kaTex> is:<br /> <kaTex>$$E = \\int_{-\\infty}^{\\infty}|S(f)|^2 df$$.<kaTex> <br />Thus the maximum output <kaTex>$$(S/N)_T$$<kaTex> depends on the input signal energy and the power spectral density of the noise, not on the particular shape of the waveform that is used. <br/> The equality in the previous equation holds only if the optimum filter transfer function, <kaTex>$$H_0(f)$$<kaTex>, is employed, such that: <b>9.____</b>",
    "or: <b>10.____</b>",
    "Since <kaTex>$$s(t)$$<kaTex> is a real valued signal we can write using Fourier transformations table: <b>11.____</b>",
    "Thus the impulse response of a filter that produces the maximum output signal-to-noise ratio is the mirror image of the message signal <kaTex>$$s(t)$$<kaTex>, <i>delayed</i> by the symbol time duration, <kaTex>$$T$$<kaTex>.Note that the delay of <kaTex>$$T$$<kaTex> seconds makes the previous equations causal; that is, the delay of <kaTex>$$T$$<kaTex> seconds makes <kaTex>$$h(t)$$<kaTex> a function of positive time in the interval <kaTex>$$0$$ $$\\leq$$ $$t$$ $$\\leq$$ $$T$$.<kaTex> <b>12.____</b>"

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
  "Español: $$\\left(\\frac{S}{N} \\right)_T = \\frac{a_i^2}{\\sigma_0^2}$$", 
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

const solFr:string[]=[
  "Français: $$\\left(\\frac{S}{N} \\right)_T = \\frac{a_i^2}{\\sigma_0^2}$$", 
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


const initScore=Array(1).fill('');
const initCheck=Array(1).fill(0);
const [scoreReport, setScoreReport] = useState(initScore);
const [presentPageScore, setPresentPageScore]= useState(0);
const [presentCheckIndicator, setPresentCheckIndicator]=useState(initCheck);


function scoreFunction(){
  let pageScore:number = 0;
  let checkIndicator:number[]=[];
  for (i = 0; i < numberOfItems; i++) {
      console.log(i);
      console.log (globalOption[i]);
      console.log (optionsListCorrect[props.language][i]);
      if (pageItemType[i] ==="menu")
        if (globalOption[i]===optionsListCorrect[props.language][i]) {pageScore++; checkIndicator[i]=1;}
        else checkIndicator[i]=2; 
      if (pageItemType[i] ==="num")
        if ( Math.abs(parseFloat(globalOption[i])-parseFloat(optionsListCorrect[props.language][i]))<0.01) {pageScore++; checkIndicator[i]=1;}
        else checkIndicator[i]=2;
      console.log(pageMaxScore);
    }
  setPresentCheckIndicator(checkIndicator);
  setPresentPageScore(pageScore);
  setScoreReport(globalOption);
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
    // Function will execute on click of button
    const onButtonClick = () => {
      // using Java Script method to get PDF file
      fetch('P4.pdf').then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'P4.pdf';
              alink.click();
          })
      })
  }


return(
      <div>
        <div className="item-div mx-auto"> 
          <b>ID:</b> {props.id};  
          {props.language===0?<div><b>Language: </b><i>English</i>; <b>Course:</b> <i>{pageCourse[props.language]}</i>; <b>Unit:</b> <i>{pageUnit[props.language]}</i>; <b>Title:</b> <i>{pageTitle[props.language]}</i> </div>:""} 
          {props.language===1?<div><b>Idioma: </b><i>Español</i>; <b>Curso:</b> <i>{pageCourse[props.language]}</i>; <b>Unidad:</b> <i>{pageUnit[props.language]}</i>; <b>Titulo:</b> <i>{pageTitle[props.language]}</i> </div>:""}
          {props.language===2?<div><b>Langue: </b><i>Français</i>; <b>Cours:</b> <i>{pageCourse[props.language]}</i>; <b>Unite:</b> <i>{pageUnit[props.language]}</i>; <b>Title:</b> <i>{pageTitle[props.language]}</i> </div>:""}
        </div>
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
      {pageItemIndices.map((itemIndex) =>
       <div>
        {presentCheckIndicator[itemIndex]==1 &&<div className='d-flex align-items-center'><img className='mx-auto' width='50' src='/checkmark.png'/></div>}
        {presentCheckIndicator[itemIndex]==2 &&<div className='d-flex align-items-center'><img className='mx-auto' width='50' src='/xmark.png'/></div>}
        <MenuDemo id={itemIndex} pageItemLanguage={props.language} pageItemType={pageItemType[itemIndex]} pageItemHeader={pageItemHeaderP[props.language][itemIndex]} pageItemFooter={pageItemFooterP[props.language][itemIndex]} menuSelectedOption={selectOption} globalOptionSelected={globalOption} optionsList = {(optionsListBank[props.language][itemIndex]).sort(() => Math.random() - 0.5)}/>
       </div>
      )}

      <button onClick={scoreFunction}><h3>{props.language===en && "Score" }{props.language===es && "Puntaje" }{props.language===fr && "Points" }</h3></button>
{/*       {optionsListCorrect[props.language]}
      <hr/>
      {scoreReport}
      <hr/>
      {presentPageScore}  */}
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