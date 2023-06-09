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
            steps {
              sh 'docker run -d -p 8080:80 -v $PWD/dist/rescue-the-stray:/usr/share/nginx/html:ro nginx:alpine'
             }
        }
    }
}
