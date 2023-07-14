pipeline {
    agent any

    stages {
        stage('SSH into Remote Server') {
            steps {
                sshagent(['server_2_ssh']) {
                    script {
                        // SSH into the remote server and execute commands
                        def remoteCommands = """
                            ssh -o StrictHostKeyChecking=no -l root 172.104.112.10 "
                                if [ -d 'exoress_test' ]; then
                                    cd exoress_test && git pull origin main
                                else
                                    git clone https://github.com/pb0th/exoress_test.git
                                fi;
                                
                                docker ps -a --filter name=exoress_test_container --format '{{.Names}}' | grep -q 'exoress_test_container'
                                if [ \$? -eq 0 ]; then
                                    docker stop exoress_test_container
                                    docker rm exoress_test_container
                                fi;
                                
                                cd exoress_test && docker build -t exoress-app .
                                docker run --rm -d -p 9000:9000 --name exoress_test_container exoress-app
                            "
                        """
                        sh remoteCommands
                    }
                }
            }
        }
    }
}
