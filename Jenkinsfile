pipeline {
    agent any

    stages {
        stage('SSH into Remote Server') {
            steps {
                sshagent(['server_2_ssh']) {
                    script {
                        // Check if the repository exists
                        def repoExists = sh script: 'ssh -o StrictHostKeyChecking=no -l root 172.104.112.10 "ls exoress_test"', returnStatus: true
                        
                        if (repoExists == 0) {
                            // Repository exists, perform git pull
                            sh 'ssh -o StrictHostKeyChecking=no -l root 172.104.112.10 "cd exoress_test && git pull"'
                        } else {
                            // Repository doesn't exist, clone it
                            sh 'ssh -o StrictHostKeyChecking=no -l root 172.104.112.10 "git clone  https://github.com/pb0th/exoress_test"'
                        }

                        // Build and start Docker
                        sh 'ssh -o StrictHostKeyChecking=no -l root 172.104.112.10 "cd exoress_test && docker build -t exoress-app .  && docker stop exoress_test_container && docker run --rm  -d -p 9000:9000 --name exoress_test_container exoress-app"'
                    }
                }
            }
        }
    }
}
