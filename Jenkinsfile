pipeline {
    agent any
    
    stages {
        stage('SSH into remote server') {
            steps {
                script {
                    sshagent(['server_2_ssh']) {
                        sh '''
                            ssh -o StrictHostKeyChecking=no root@172.104.112.10 <<EOF
                                # Step 2: Check if the folder exists
                                if [ -d "exoress_test" ]; then
                                    cd exoress_test
                                    git pull origin main
                                else
                                    git clone https://github.com/pb0th/exoress_test
                                    cd exoress_test
                                fi

                                # Step 3: Build and run the container
                                if [ "$(docker ps -a --filter "name=exoress_test_container" | grep -c "exoress_test_container")" == "1" ]; then
                                    docker stop exoress_test_container
                                fi
                                
                                docker build -t exoress_test .
                                docker run --rm -d -p 9000:9000 --name exoress_test_container -d exoress_test
                            EOF
                        '''
                    }
                }
            }
        }
    }
}
