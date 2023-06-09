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
        
        stage('Test') {
            steps {
                    sh 'ng serve -o'
            }
        }
    }
}
