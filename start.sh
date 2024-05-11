
echo "Starting Docker..."
docker-compose up -d
echo "Starting 'air' in trippy_back/ directory..."
cd trippy_back/
air &
echo "Starting npm development server..."
cd .. 
npm run dev &
echo "Script execution complete."

