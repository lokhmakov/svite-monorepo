#!/bin/bash
set -eo pipefail
S3_BUCKET=$(cat bucket-name.txt)
STACK_NAME=$(cat stack-name.txt)
aws cloudformation package --template-file template.yml --s3-bucket $S3_BUCKET --output-template-file out.yml
aws cloudformation deploy --template-file out.yml --stack-name $STACK_NAME --capabilities CAPABILITY_NAMED_IAM
