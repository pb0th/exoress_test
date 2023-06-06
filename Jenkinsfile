pipeline {
  agent any

  stages {
    // stage('Clone Repository') {
    //   steps {
    //     git 'https://github.com/your/repository.git'
    //   }
    // }

    stage('Build Docker Image') {
      steps {
        script {
          docker.build('express_docker_test_image')
        }
      }
    }

    stage('Deploy to Docker Container') {
      steps {
        script {
          sh 'docker run -d -p 3005:3000 --name express_docker_test express_docker_test_image'
        }
      }
    }
  }
}
