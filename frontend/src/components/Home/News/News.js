import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import './News.css';

// Hook component
export default function News(cityCountry) {

      return (  
              <Container>
                <div className="news-wrapper h-25">
                  
                  <section className="dates float-left text-primary">06.10</section>
                  <section className="infos w-25 float-left">
                    <strong>Weather new 1</strong>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus doloribus placeat quasi, animi libero labore, eius nemo blanditiis perferendis laudantium adipisci voluptate? Harum aliquam nemo nulla, quidem mollitia a qui.</p>
                    <p>Harum quaerat natus mollitia maxime voluptate distinctio voluptatibus? Provident ut voluptates vitae labore facere minima dolorum assumenda. Laborum molestias veniam voluptatibus totam, sint dignissimos autem quo vero quisquam iusto quibusdam.</p>
                  </section>
                  
                  <section className="dates float-left text-primary">06.10</section>
                  <section className="infos w-25 float-left">
                    <strong>Weather new 2</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque iure quaerat iste animi recusandae dolorem minus. Cum deleniti molestiae nostrum consequatur facere et quaerat aperiam provident officia, omnis ad.</p>
                    <p>Veritatis voluptatibus officiis, laboriosam perspiciatis quibusdam tempore dolore eum delectus magnam reprehenderit voluptate nostrum expedita doloribus corrupti accusamus ea sit distinctio facilis numquam omnis? Tenetur et aspernatur at repellat dolorum.</p>
                  </section>

                  <section className="dates float-left text-primary">06.10</section>
                  <section className="infos w-25 float-left">
                    <strong>Weather new 3</strong>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, ratione et sed, tempore maiores qui aut amet vero distinctio fugit totam a error quae deserunt accusantium expedita voluptatum libero animi?</p>
                    <p>Alias suscipit quas consectetur dicta, maiores iusto. Ex rem sapiente tempore explicabo commodi quod iste eum tempora mollitia? Officiis obcaecati sequi facilis unde modi nostrum similique, qui odio earum fugiat.</p>
                  </section> 
                </div>
              </Container>
    );
}