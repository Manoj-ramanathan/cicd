pipeline {
     agent any
          stages {          
        stage("Build"){
            node{
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
     }
}


