import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  githubUsername: string;
  githubPassword: string;
  githubURL: string;
  githubRepositoryName: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // submit logic
  }

}