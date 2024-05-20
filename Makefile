deploy:
	echo "Starting Docker..."
	docker stop trest-db-1
	docker-compose up -d
	echo "Starting 'air' in trippy_back/ directory..."
	(cd trippy_back/ && air&) || { echo "Failed to change directory to trippy_back/"; exit 1; }
	npm run dev &
	echo "Script execution complete."
	wait
