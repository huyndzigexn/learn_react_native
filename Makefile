up:
	# nvm use 14.17.5
	npx react-native start
	npx react-native run-android
	# @echo "[web]   http://localhost:8888"
	# @echo "[email] http://localhost:1081"
	# @echo "[db]    http://localhost:3320"
# stop:
# 	docker-compose -f docker-compose-dev.yml stop
# bash:
# 	docker-compose -f docker-compose-dev.yml exec web bash
# ps:
# 	docker-compose -f docker-compose-dev.yml ps
# prod:
# 	yarn prod
# watch:
# 	yarn watch
# deploy-stg:
# 	aws s3 cp s3://pronuri-private/staging/pronuri-core-757356d2d5a7.json ./ --profile $(PROFILE)
# 	docker build -t 555969652412.dkr.ecr.ap-northeast-1.amazonaws.com/pronuri-docker:staging -f docker/DockerStg .
# 	`aws ecr get-login --profile $(PROFILE) --region ap-northeast-1 --no-include-email`
# 	docker push 555969652412.dkr.ecr.ap-northeast-1.amazonaws.com/pronuri-docker:staging
# 	eb deploy --profile $(PROFILE) $(STG)
# 	rm pronuri-core-757356d2d5a7.json
# deploy-prod:
# 	aws s3 cp s3://pronuri-private/production/pronuri-core-757356d2d5a7.json ./ --profile $(PROFILE)
# 	docker build -t 555969652412.dkr.ecr.ap-northeast-1.amazonaws.com/pronuri-docker:production -f docker/DockerProd .
# 	`aws ecr get-login --profile $(PROFILE) --region ap-northeast-1 --no-include-email`
# 	docker push 555969652412.dkr.ecr.ap-northeast-1.amazonaws.com/pronuri-docker:production
# 	cp Dockerrun.aws.prod.json Dockerrun.aws.json
# 	git add Dockerrun.aws.json && git commit -m 'deploy production' || echo "No changes to commit"
# 	eb deploy --profile $(PROFILE) $(PROD)
# 	rm pronuri-core-757356d2d5a7.json
# 	git reset --hard HEAD~1
# ssh-stg:
# 	eb ssh --profile $(PROFILE) $(STG)
# ssh-prod:
# 	eb ssh --profile $(PROFILE) $(PROD)
# ssh-stg-setup:
# 	eb ssh --setup --profile $(PROFILE) $(STG)
# ssh-prod-setup:
# 	eb ssh --setup --profile $(PROFILE) $(PROD)
# deploy-batch:
# 	docker-compose -f docker-compose-dev.yml run web php vendor/bin/dep deploy batch
# deploy-stg-vn:
# 	ssh zigexn@192.168.1.68 -- "cd projects/pronuri && git pull && \
# 	    docker-compose -f docker-compose-dev.yml exec -T web php artisan cache:clear && \
# 	    docker-compose -f docker-compose-dev.yml exec -T web php artisan config:clear"