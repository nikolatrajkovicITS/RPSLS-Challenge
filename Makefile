all: install_deps compile_ts run_lint build_docker run_docker echo_message

install_deps:
	yarn install

compile_ts:
	yarn tsc

run_lint:
	yarn lint

build_docker:
	docker build -t my-app .

run_docker:
	docker run -d -p 3000:3000 my-app

echo_message:
	@echo "All steps are completed. Open your browser and go to: --> http://localhost:3000"
