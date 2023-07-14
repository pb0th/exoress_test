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
                                    echo "pulling the latest changes"
                                    cd exoress_test && git pull origin main
                                else
                                    echo "clone a new repo"
                                    git clone https://github.com/pb0th/exoress_test.git exoress_test
                                fi
                                
                                if docker ps -a --format '{{.Names}}' | grep -q 'exoress_test_container'; then
                                    echo "container exists so stop the container"
                                    docker stop exoress_test_container
                                fi
                                echo "cd into the repo"
                                echo "building docker"
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
