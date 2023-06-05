pipeline {
  agent any

  stages {
    stage('Clone Repository') {
      steps {
        git 'https://github.com/your-username/your-express-app.git'
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
