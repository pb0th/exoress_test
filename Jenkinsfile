pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Deploy to Server 2') {
      steps {
        script {
          def remote = [:]
          remote.name = 'Server 2'
          remote.host = '172.105.215.240'
          remote.user = 'root'
          remote.identityFile = '/var/jenkins_home/.ssh/id_rsa'
          remote.passphrase = 'your_passphrase' // Only if your private key has a passphrase

          sshCommand remote: remote, command: 'git clone https://github.com/pb0th/exoress_test.git', strictHostKeyChecking: 'no'
          sshCommand remote: remote, command: 'cd exoress_test && docker build -t express_docker_test_image .', strictHostKeyChecking: 'no'
          sshCommand remote: remote, command: 'docker stop express_docker_container || true', strictHostKeyChecking: 'no'
          sshCommand remote: remote, command: 'docker rm express_docker_container || true', strictHostKeyChecking: 'no'
          sshCommand remote: remote, command: 'docker run -d --name express_docker_container -p 80:80 express_docker_test_image', strictHostKeyChecking: 'no'
        }
      }
    }
  }
}
