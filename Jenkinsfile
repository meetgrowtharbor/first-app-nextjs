pipeline {
    agent {
        docker {
            image 'node:20' // or node:20-bullseye
            args '-u root:root' // optional, to avoid permission issues
        }
    }

    environment {
        VERCEL_TOKEN = credentials('vercel_token')
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                sh '''
                npx vercel pull --yes --environment=production --token=$VERCEL_TOKEN
                npx vercel build --prod --token=$VERCEL_TOKEN
                npx vercel deploy --prebuilt --prod --token=$VERCEL_TOKEN
                '''
            }
        }
    }
}