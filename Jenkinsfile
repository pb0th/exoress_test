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

            sshCommand remote: remote, command: 'git clone https://github.com/pb0th/exoress_test.git'
            sshCommand remote: remote, command: 'cd exoress_test && docker build -t express_docker_test_image .'
            sshCommand remote: remote, command: 'docker stop express_docker_container || true'
            sshCommand remote: remote, command: 'docker rm express_docker_container || true'
            sshCommand remote: remote, command: 'docker run -d --name express_docker_container -p 3000:3000 express_docker_test_image'
          }
        }
      }
    }
  }
}
