pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                // Stage 1: Build Angular application
                dir('path/to/your/angular/app') {
                    sh 'npm install'
                    sh 'npm run build --prod'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                // Stage 2: Create Docker image and deploy
                dir('path/to/your/angular/app') {
                    script {
                        def dockerImage = docker.build('my-angular-app') // Build Docker image
                        dockerImage.push() // Push the Docker image to a registry if required
                        
                        sh 'docker run -d -p 8080:80 my-angular-app' // Run the Docker container
                    }
                }
            }
        }
    }
}
