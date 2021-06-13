pipeline {
  agent any
    
  tools {nodejs "NodeJS"}
  stages {   
    stage('Git') {
      steps {
         git credentialsId: 'manojgithub', url: 'https://github.com/Manoj-ramanathan/cicd.git'
      }
    }
    stage('Build') {
      steps {
        sh 'npm install'
         sh 'npm run build'
      }
    }
    stage("deploy") {
      steps {
	sshagent(['tomcatserver']) {
          sh "scp -r -o StrictHostKeyChecking=no var/lib/jenkins/workspace/cicdpipeline/build ec2-user@18.224.182.253:~/opt/apache-tomcat-8.5.66/webapps"
        }
      }  
    }  
  }
}
