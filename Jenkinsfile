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
              dir('path/to/your/angular/app') {
                sh 'npm install'
                sh 'npm run build --prod'
              }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    def dockerImage = docker.build('my-angular-app') // Build Docker image
                    dockerImage.push() // Push the Docker image to a registry if required
                    
                    sh 'docker run -d -p 8080:80 my-angular-app' // Run the Docker container
                }
            }
        }
    }
}
