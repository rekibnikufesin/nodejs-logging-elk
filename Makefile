## up: bring the Express server and logging environment online using docker compose
.PHONY: up
up:
	@echo '🔥 bringing environment up'
	docker-compose up -d --build

## down: shutdown the environment but persist data for next time
.PHONY: down
down:
	@echo '🛑 shutting down environment, data is preserved'
	docker-compose down

## destroy: shutdown the environment and remove all saved data
.PHONY: destroy
destroy:
	@echo '💣 shutting down environment and destroying data'
	docker-compose down -v
