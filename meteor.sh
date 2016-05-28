#!/bin/bash
# Meteor wrapper

# INITIAL CHECKS
if [ "$1" == "" ]; then
    echo "USAGE: ./meteor.sh run [android-device]"
    exit
fi

if [ "$1" == "run" ]; then
  if [ ! -d "node_folders" ]; then
    echo "ERROR: Remember to run 'npm install' on first run and updates"
    exit
  fi
fi

# SETTING MONGO
export MONGO_URL=mongodb://localhost:27017/mantraboilerplate_local
PORT=3010
echo MONGO: $MONGO_URL

if [ "$1" == "run" ] &&  [ "$2" == "" ]; then
    echo RUNNING: "meteor run --port $PORT --settings settings-local.json"
    npm install
    meteor run --port $PORT
fi

if [ "$1" == "run" ] &&  [ "$2" == "android-device" ]; then
    echo RUNNING: "meteor run android-device --port $PORT --mobile-settings mobile-local.js"
    npm install
    meteor run android-device --port $PORT
fi
