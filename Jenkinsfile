pipeline {
  agent {
        docker {
             image 'node:latest'
             args '-u root'
               }
         }    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build --prod'
            }
        }
          stage('test'){
            steps{
              sh'ng serve -o'
            }
          }
    }
}
