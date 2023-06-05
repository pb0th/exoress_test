pipeline {
  agent any

  stages {
    stage('Clone Repository') {
      steps {
        git 'https://github.com/pb0th/exoress_test.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    // stage('Run Tests') {
    //   steps {
    //     sh 'npm test'
    //   }
    // }

    stage('Build and Deploy') {
      steps {
        // sh 'npm run build'
        sh 'npm start'
      }
    }
  }
}
