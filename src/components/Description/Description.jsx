import React from "react";
import classes from "./Description.module.css"

const Description = () => {
 return (
   <div className={classes.description}>
     <h1 className={classes.description__title}>В ПРОЕКТЕ:</h1>
     <ul className={classes.list__items}>
       <li>КОМПОНЕНТЫ</li>
       <li>ПРЕОБРАЗОВАНИЕ МАССИВА ОБЪЕКТОВ В МАССИВ REACT-ЭЛЕМЕНТОВ</li>
       <li>UI БИБЛИОТЕКА</li>
       <li>CSS-МОДУЛИ</li>
       <li>ПРОПС children</li>
       <li>УПРАВЛЯЕМЫЙ КОМПОНЕНТ</li>
       <li>ОБМЕН ДАННЫМИ МЕЖДУ КОМПОНЕНТАМИ</li>
       <li>УДАЛЕНИЯ ПОСТОВ ИЗ МАССИВА REACT-ЭЛЕМЕНТОВ</li>
       <li>ОТРИСОВКА ПО УСЛОВИЮ</li>
       <li>ВЫПЛЫВАЮЩИЙ СПИСОК</li>
       <li>СОРТИРОВКА </li>
       <li>ПОИСК-ФИЛЬТРАЦИЯ </li>
       <li>useMemo</li>
       <li>МОДАЛЬНОЕ ОКНО</li>
       <li>ПЕРЕИСПОЛЬЗУЕМЫЙ UI КОМПОНЕНТ</li>
       <li>АНИМАЦИЯ С ПОМОЩЬЮ REACT TRANSITION GROUP</li>
       <li>КАСТОМНЫЕ ХУКИ</li>
     </ul>
   </div>
 );
}

export default Description;