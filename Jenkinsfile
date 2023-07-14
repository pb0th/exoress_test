pipeline {
    agent any

    stages {
        stage('SSH into Remote Server') {
            steps {
                sshagent(['server_2_ssh']) {
                    sh 'ssh -o StrictHostKeyChecking=no -l root 172.104.112.10"touch dummy.txt"'
                }
            }
        }
    }
}
