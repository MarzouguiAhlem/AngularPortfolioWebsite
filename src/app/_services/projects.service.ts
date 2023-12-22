import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    { id:0, name: 'Angular App', summary: ' Online Personal Portfolio', description: 'Creation of a personal portfolio website in Angular to showcase your profile, skills, previous projects, and contact information.', projectLink: 'https://github.com/MarzouguiAhlem/AngularPortfolioWebsite.git', tags: [Tag.ANGULAR, Tag.TYPESCRIPT], pictures: ["../../assets/image1.png","../../assets/image11.png","../../assets/image111.png"] },
    { id:1, name: 'React App', summary: 'Web Application for an Intelligent Agriculture project', description: 'aimed at optimizing agricultural practices :User identity management, formulation of access and authentication policies, offering security features, including session and access token management.', projectLink: 'https://github.com/MarzouguiAhlem/Authentification.git', tags: [Tag.REACT, Tag.NODEJS], pictures: ["../../assets/image2.png","../../assets/image22.png","../../assets/image222.png"] },
    { id:2, name: 'Mobile App', summary: 'My Health Mate', description: 'Application for medical monitoring and patient rescue,integrating facial recognition technology.', projectLink: 'https://github.com/MarzouguiAhlem/MyProject', tags: [Tag.JAVA, Tag.NODEJS], pictures: ["../../assets/image3.png","../../assets/image33.png","../../assets/image333.png"] }
  ]

  constructor() { }

  GetProjects(){
    return this.projects;
  }
  GetProjectById(id: number) : Project {
    let project = this.projects.find(project =>project.id ===id);
    if (project===undefined){
      throw new TypeError('There is no project that matches the id: '+ id);
    }
    return project;
  }
    

}
