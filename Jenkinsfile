pipeline {
  agent any
  
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node:latest'
          args '-u root'
        }
      } 
      steps {
        sh 'npm install'
        sh 'npm run build --prod'
      }
    }
    
    stage('Run') {
      /*agent {
        docker {
          image 'nginx:alpine'
          args '-d -p 8081:80 -v $PWD/dist/rescue-the-stray:/usr/share/nginx/html:ro'
        }
      }*/
      steps {
        def containerId = docker.image('nginx:alpine').run("-p 8081:80 -v $PWD/dist/rescue-the-stray:/usr/share/nginx/html:ro -d")
        echo "Container ID: ${containerId}"
      }
    }
  }
}
