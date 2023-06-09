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
      stage('Serve') {
          agent {
           docker {
              image 'nginx:alpine'
              args '-d -p 8081:80 -v $PWD/dist/rescue-the-stray:/usr/share/nginx/html:ro'
              }
           }
        steps {
          sh 'echo "Starting NGINX server"'
          }
        }
    }
}
