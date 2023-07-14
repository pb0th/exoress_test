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
                            
                                echo "Executing remote commands..."

                                if [ -d 'exoress_test' ]; then
                                    cd exoress_test && git pull origin main
                                else
                                    git clone https://github.com/pb0th/exoress_test.git exoress_test
                                fi
                                
                                if docker ps -a --format '{{.Names}}' | grep -q 'exoress_test_container'; then
                                    docker stop exoress_test_container
                                fi
                                cd exoress_test && docker build -t exoress-app .
                                docker run -d -p 9000:9000 --name exoress_test_container exoress-app
                            "
                        """
                        sh remoteCommands
                    }
                }
            }
        }
    }
}
