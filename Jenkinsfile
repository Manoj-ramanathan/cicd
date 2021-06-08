pipeline {
  agent any
    
  tools {nodejs "NodeJS"}
   stage('Git') {
      steps {
         git credentialsId: '8265c7da-0d26-476d-9d0c-db844ba8edf5', url: 'https://github.com/Manoj-ramanathan/cicd.git'
      }
    }
    
  stages {    
    stage('Build') {
      steps {
        sh 'npm install'
         sh 'npm run build'
      }
    }  
   
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
