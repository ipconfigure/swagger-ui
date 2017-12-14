#!/bin/bash

STAGE_DIR=swagger-ui-dist
GIT_TAG=$(git describe --tags)

# Copy dist directory to staging directory
cp -R dist $STAGE_DIR

# Create the package
tar -czvf orchid-swagger-ui-dist-${GIT_TAG}.tar.gz ${STAGE_DIR}

# Cleanup the staging dir
rm -rf $STAGE_DIR
