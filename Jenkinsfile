#!/bin/bash
pipeline {
  agent any
    
  tools {nodejs "NodeJS"}
  stages {   
    stage('Git') {
      steps {
         git 'https://github.com/Manoj-ramanathan/cicd.git'
      }
    }
    stage('Build') {
      steps {
       bat 'npm install'
        bat 'npm run build'
      }
    }
    stage('deploy') {
      steps {
        sshagent(['deploy']) {
         bat 'scp -p -o StrictHostKeyChecking=no http://localhost:8090/job/cicdpipeline/build/. ec2-user@35.174.3.12:8080:/opt/apache-tomcat-8.5.66/webapps/build/.'
        }
      }
    }
  }
}
