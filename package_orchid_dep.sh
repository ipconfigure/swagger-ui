#!/bin/bash

STAGE_DIR=swagger-ui-dist
GIT_TAG=$(git describe --tags)

# Copy dist directory to staging directory
cp -R dist $STAGE_DIR

# Rename the template file
mv ${STAGE_DIR}/index.html ${STAGE_DIR}/index.html.template

# Create the package
tar -czvf orchid-swagger-ui-dist-${GIT_TAG}.tar.gz ${STAGE_DIR}

# Cleanup the staging dir
rm -rf $STAGE_DIR
