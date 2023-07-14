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
                                if [ -d 'express_test' ]; then
                                    cd express_test && git pull origin main
                                else
                                    git clone https://github.com/pb0th/exoress_test.git express_test
                                fi;
                                
                                docker ps -a --filter name=exoress_test_container --format '{{.Names}}' | grep -q 'exoress_test_container'
                                if [ \$? -eq 0 ]; then
                                    docker stop exoress_test_container
                                    docker rm exoress_test_container
                                fi;
                                
                                cd express_test && docker build -t express-app .
                                docker run -d -p 9000:9000 --name exoress_test_container express-app
                            "
                        """
                        sh remoteCommands
                    }
                }
            }
        }
    }
}
