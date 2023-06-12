pipeline {
  agent any
  stages{
    stage('Build Docker Image'){
      steps {
        sh 'docker build -t  my-application -f Dockerfile'
      }
    }
    stage('Deploy Project'){
      steps {
        sh 'docker run -d -p 8081:80 --name Vortex my-application'
      }
    }
  }
}
