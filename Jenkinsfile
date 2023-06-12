pipeline {
  agent any
  stage('Build Project'){
    sh 'ng build --prod'
  }
  stage('Build Docker Image'){
    sh 'docker build -t  my-application -f '
  }
  stage('Deploy Project'){
    sh 'docker run -d -p 8081:80 --name Vortex my-application'
  }
}
