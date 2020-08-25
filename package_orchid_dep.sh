#!/bin/bash

STAGE_DIR=swagger-ui-dist

# Copy dist directory to staging directory
cp -R dist $STAGE_DIR

# Create the package
tar -czvf orchid-swagger-ui-dist-IPCv3.32.4.tar.gz ${STAGE_DIR}

# Cleanup the staging dir
rm -rf $STAGE_DIR
