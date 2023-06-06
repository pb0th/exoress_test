pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("express_docker_test_image")
                }
            }
        }

        stage('Deploy to Server 2') {
            steps {
                withCredentials([usernamePassword(credentialsId: '123jenkins', usernameVariable: 'SSH_USERNAME', passwordVariable: 'SSH_PASSWORD')]) {
                    script {
                        def remote = [:]
                        remote.name = 'Server 2'
                        remote.host = '172.105.215.240'
                        remote.user = "${SSH_USERNAME}"
                        remote.password = "${SSH_PASSWORD}"

                        sshCommand remote: remote, command: 'docker stop express_docker_container || true'
                        sshCommand remote: remote, command: 'docker rm express_docker_container || true'
                        sshCommand remote: remote, command: 'docker run -d --name express_docker_container -p 80:80 express_docker_test_image'
                    }
                }
            }
        }
    }
}
