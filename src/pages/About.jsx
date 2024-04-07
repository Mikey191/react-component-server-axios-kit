import React from "react";
import classes from "./About.module.css"
import { dataFirstPage, dataSecondPage, firstProject, secondProject } from "../utils/about";

function About(){
 return (
   <div>
     <h1 className={classes.aboutTitle}>О ПРОЕКТЕ</h1>

     <div className={classes.project}>
       <div className={classes.projectName}>{firstProject.title}</div>
       <a
         href={firstProject.body}
         className={classes.projectHref}
         target="_blank"
       >
         {firstProject.body}
       </a>
     </div>

     <div className={classes.project}>
       <div className={classes.projectName}>{secondProject.title}</div>
       <a
         href={secondProject.body}
         className={classes.projectHref}
         target="_blank"
       >
         {secondProject.body}
       </a>
     </div>

     <div className={classes.description}>
       <h2 className={classes.descriptionTitle}>Содержание первой части:</h2>
       {dataFirstPage.map((data, index) => (
         <div className={classes.descriptionItem}>
           {index + 1}. {data}
         </div>
       ))}
     </div>
     <div className={classes.description}>
       <h2 className={classes.descriptionTitle}>Содержание второй части:</h2>
       {dataSecondPage.map((data, index) => (
         <div className={classes.descriptionItem}>
           {index + 1}. {data}
         </div>
       ))}
     </div>
   </div>
 );
}

export default About;