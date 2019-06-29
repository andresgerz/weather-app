import React, { Component } from 'react';

import './News.css';


export default class News extends Component {
  
  render() {
    return (  
      <div className="container news-wrapper h-25">
        <section className="dates float-left text-primary">06.10</section>
        <section className="infos w-25 float-left">
          <strong>The flood in Chaco</strong>
          <p></p>
        </section>

        <section className="dates float-left text-primary">06.10</section>
        <section className="infos w-25 float-left">
          <strong>The global warming is here</strong>
          <p></p>
        </section>

        <section className="dates float-left text-primary">06.10</section>
        <section className="infos w-25 float-left">
          <strong>New news about SINARAME </strong>
          <p>The radars in Resistencia, Las Lomitas, Mercedes, Hipolito Irigoyen and Mar del Plata</p>
        </section>
        
        
      </div>
      
    );
  }
}

