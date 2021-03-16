#!/bin/sh

echo "Switching to branch main"
git checkout main

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ myung@olympus.pharmacy.arizona.edu:/var/www/olympus/
echo "Deployment complete"