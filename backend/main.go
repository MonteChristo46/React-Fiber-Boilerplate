package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {
	app := fiber.New()

	// Allow Cors
	app.Use(cors.New())

	// Serve frontend build
	app.Static("/", "../frontend/build")

	// Initializing a logger
	app.Use(logger.New(logger.Config{
		Format: "${pid} ${locals:requestid} ${status} - ${method} ${path}\n",
	}))

	// Place for API handlers
	api := app.Group("/api")
	api.Get("/ping", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"msg": "Hello from Go!"})
	})

	app.Listen("0.0.0.0:3001")
}
