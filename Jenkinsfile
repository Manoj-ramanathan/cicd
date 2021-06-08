pipeline {
     agent any
     node{
          stages {          
        stage("Build"){
            steps{
                sh "sudo npm install"
                sh "sudo npm run build"
            }
            }
        }
     }
}


