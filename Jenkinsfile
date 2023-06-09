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
        
        stage('Deploy') {
            steps {
                script {
                    agent any
                    sh 'docker build -t my-angular-app .'
                    sh 'docker run -d -p 8080:80 my-angular-app' // Run the Docker container
                }
            }
        }
    }
}
