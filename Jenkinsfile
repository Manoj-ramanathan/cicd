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
    stage('deploy') {
      steps {
        sshagent(['deploy_user']) {
          sh 'scp -o StrictHostKeyChecking=no workspace/cicd pipeline/build ec2-user@18.223.111.123:/opt/apache-tomcat-8.5.66/webapps'

        }
      }  
    }  
  }
}
}
