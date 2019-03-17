import React, { Component } from 'react';
import PROJECTS from './data/project';


// class Project extends Component {
//     render(){
//         console.log('check prop', this.props)
//         const { title, image, description } = this.props.project;
//         return(
//             <div style={{ display:'inline-block',width: 300, margin:'10px'}}>
//               <h3>{title}</h3>
//               <img style={{padding: 10 ,width: 200, height: 120}} src={image}/>
//               <p>{description}</p>
//             </div>
//         )
//     }
// }
// class Projects extends Component {
//     render(){
//         return(
//             <div>
//                 <h2>Ngoc's photos</h2>
//                 <div>
//                     {
//                         PROJECTS.map((PROJECT, index) => {
//                             return (
//                                 <Project key={index} project = {PROJECT}/>
//                             );
//                         })
//                     }
//                 </div>
//             </div>
//         )
//     }
// }
export default Projects;