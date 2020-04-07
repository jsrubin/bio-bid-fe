import React from "react";
import styled from "styled-components";


function Projects(){
   return (
       <ProjectWrapper>
           <ProjectsTittle> Current Projects </ProjectsTittle>
           <Cards>
           <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Digestive study</h5>
                    <p class="card-text">Inflamation</p>
                    <p>Phase 1</p>
                    <a href="#" class=" btn-card">View study</a>
                </div>
           </div>

           <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Digestive study</h5>
                    <p class="card-text">Inflamation</p>
                    <p>Phase 1</p>
                    <a href="#" class=" btn-card">View study</a>
                </div>
           </div>

           <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Digestive study</h5>
                    <p class="card-text">Inflamation</p>
                    <p>Phase 1</p>
                    <a href="#" class=" btn-card">View study</a>
                </div>
           </div>
           
           <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">Digestive study</h5>
                    <p class="card-text">Inflamation</p>
                    <p>Phase 1</p>
                    <a href="#" class=" btn-card">View study</a>
                </div>
           </div>
           
           <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">Digestive study</h5>
                    <p class="card-text">Inflamation</p>
                    <p>Phase 1</p>
                    <a href="#" class=" btn-card">View study</a>
                </div>
           </div>
           </Cards>

       </ProjectWrapper>

    )
};

const ProjectWrapper= styled.div
`
width: 30%;
heigth: 25%;
`

const ProjectsTittle = styled.h1
`
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 29px;
margin:10%;
`

const Cards = styled.div
`
display:flex;
flex-direction: column;
justify-content: space-between;
height: 20%;
`
 export default Projects;