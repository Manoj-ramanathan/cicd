pipeline {
  agent any
    
  tools {nodejs "NodeJS"}
  stages {   
    stage('Git') {
      steps {
         git credentialsId: '8265c7da-0d26-476d-9d0c-db844ba8edf5', url: 'https://github.com/Manoj-ramanathan/cicd.git'
      }
    }
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
