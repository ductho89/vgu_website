@echo off
docker build -t vgu-web-test .
docker image tag vgu-web-test tranguyenngoc2862002/vgu-web-test
docker push tranguyenngoc2862002/vgu-web-test