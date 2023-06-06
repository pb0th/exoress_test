pipeline {
  agent any

  stages {


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
