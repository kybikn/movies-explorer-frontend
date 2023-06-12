import React from 'react';

import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__content'>
        <div>
          <p className='about-project__subtitle'>Дипломный проект включал 5 этапов</p>
          <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div>
          <p className='about-project__subtitle'>На выполнение диплома ушло 5 недель</p>
          <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about-project__table'>
        <div className='about-project__table-left'>
          <p className='about-project__column-left'>1 неделя</p>
          <p className='about-project__column-text'>Back-end</p>
        </div>
        <div className='about-project__table-right'>
          <p className='about-project__column-right'>4 недели</p>
          <p className='about-project__column-text'>Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject