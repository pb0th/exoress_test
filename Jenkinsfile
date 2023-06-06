pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Deploy to Server 2') {
      environment {
        SSH_CREDENTIALS = credentials('123jenkins')
      }
      steps {
        script {
          withCredentials([usernamePassword(credentialsId: '123jenkins', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
            def remote = [:]
            remote.name = 'Server 2'
            remote.host = '172.105.215.240'
            remote.user = 'root'
            remote.allowAnyHosts = true
            remote.password = 'Panhboth123$*'

            // Check if the repository exists on the server
            def repoExists = sshCommand remote: remote, command: 'test -d exoress_test.git && echo "true" || echo "false"'

            if (repoExists.trim() == 'true') {
              // Repository exists, perform a pull
              sshCommand remote: remote, command: 'cd exoress_test && git pull && cd ..'
            } else {
              // Repository doesn't exist, perform a clone
              sshCommand remote: remote, command: 'git clone https://github.com/pb0th/exoress_test.git && cd exoress_test'
            }

            // Build and deploy the Docker container
            sshCommand remote: remote, command: 'docker build -t express_docker_test_image .'
            sshCommand remote: remote, command: 'docker stop express_docker_container || true'
            sshCommand remote: remote, command: 'docker rm express_docker_container || true'
            sshCommand remote: remote, command: 'docker run -d --name express_docker_container -p 3000:3000 --restart=always express_docker_test_image'
          }
        }
      }
    }
  }
}
