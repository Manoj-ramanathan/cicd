
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
     stage("deploy") {
       steps {
          bat "scp -r /Windows/System32/config/systemprofile/AppData/Local/Jenkins/.jenkins/workspace/cicdpipeline/build tomcat@http://localhost:8080:/C:\Users\GIS00246\Downloads\tomcat\webapps"
       }
    } 
   
  }
}
