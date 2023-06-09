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
      stage('Serve') {
          agent {
        docker {
          image 'nginx:alpine'
          args '-p 8080:80 -v $PWD/dist/rescue-the-stray:/usr/share/nginx/html:ro'
        }
      }
      steps {
      }
        }
    }
}
